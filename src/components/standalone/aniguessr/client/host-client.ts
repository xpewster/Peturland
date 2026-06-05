
import type { GameState, Team, TeamId } from "./game";
import type {
  ChatMessage,
  ClientMessage,
  HostWelcomeMessage,
  ServerMessage,
} from "./protocol";
import { httpToWs, type ConnectionStatus } from "./connection";
import { Answer, Guess } from "./types";

export type HostClientOptions = {
  /** Base server URL, e.g. "http://localhost:8080". */
  url: string;
  password: string;
};

export type HostClientState = {
  connectionStatus: ConnectionStatus;
  quizInfo: HostWelcomeMessage["quizInfo"] | null;
  gameState: GameState | null;
  lastError: string | null;
  liveGuesses: ReadonlyMap<string, Guess>;
  currentRoundAnswer: { roundIndex: number; answer: Answer } | null;
  chatLog: ChatMessage[];
};

export class HostClient {
  private socket: WebSocket;
  private state: HostClientState;
  private listeners = new Set<() => void>();
  private welcomeResolve: ((c: HostClient) => void) | null = null;
  private welcomeReject: ((e: Error) => void) | null = null;

  private readonly url: string;
  private readonly password: string;

  private intentionallyClosed = false;
  private reconnectAttempt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;

  private constructor(opts: HostClientOptions) {
    this.url = opts.url;
    this.password = opts.password;
    this.state = {
      connectionStatus: "connecting",
      quizInfo: null,
      gameState: null,
      lastError: null,
      liveGuesses: new Map(),
      currentRoundAnswer: null,
      chatLog: [],
    };
    this.socket = this.openSocket();
  }

  private openSocket(): WebSocket {
    const socket = new WebSocket(httpToWs(this.url));
    socket.addEventListener("open", () => {
        socket.send(JSON.stringify({
            type: "host_login",
            password: this.password,
        }));
    });
    socket.addEventListener("message", (e) =>
        this.handleMessage(typeof e.data === "string" ? e.data : ""),
    );
    socket.addEventListener("close", (e) => this.handleClose(e));
    return socket;
  }

  static connect(opts: HostClientOptions): Promise<HostClient> {
    return new Promise((resolve, reject) => {
      const client = new HostClient(opts);
      client.welcomeResolve = resolve;
      client.welcomeReject = reject;
    });
  }

  // -------------------------------------------------------------------------
  // Store API.
  // -------------------------------------------------------------------------

  getState(): HostClientState {
    return this.state;
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  // -------------------------------------------------------------------------
  // Actions.
  // -------------------------------------------------------------------------

  createTeam(name: string): void {
    this.rawSend({ type: "create_team", name });
  }

  removeTeam(name: TeamId): void {
    this.rawSend({ type: "remove_team", name });
  }

  startGame(): void {
    this.rawSend({ type: "start_game" });
  }

  advanceRound(): void {
    this.rawSend({ type: "advance_round" });
  }

  endGame(): void {
    this.rawSend({ type: "end_game" });
  }

  resetToLobby(): void {
    this.rawSend({ type: "reset_to_lobby" });
  }

  kickPlayer(playerId: string): void {
    this.rawSend({ type: "kick_player", playerId });
  }

  sendChat(text: string): void {
    this.rawSend({ type: "chat", text });
  }

  clearError(): void {
    if (this.state.lastError !== null) {
      this.updateState({ lastError: null });
    }
  }

  close(): void {
    this.intentionallyClosed = true;
    if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
    }
    try {
        this.socket.close();
    } catch {
        /* ignore */
    }
  }

  // -------------------------------------------------------------------------
  // Internal.
  // -------------------------------------------------------------------------

  private rawSend(msg: ClientMessage): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(msg));
    }
  }

  private handleMessage(data: string): void {
    let msg: ServerMessage;
    try {
      msg = JSON.parse(data) as ServerMessage;
    } catch {
      return;
    }

    switch (msg.type) {
      case "host_welcome": {
        this.reconnectAttempt = 0;
        this.updateState({
          connectionStatus: "connected",
          quizInfo: msg.quizInfo,
        });
        const resolve = this.welcomeResolve;
        this.welcomeResolve = null;
        this.welcomeReject = null;
        resolve?.(this);
        return;
      }
      case "state": {
        const prevPhase = this.state.gameState?.phase;
        const newPhase = msg.state.phase;

        const sameRound =
            prevPhase?.type === "guessing" &&
            newPhase.type === "guessing" &&
            prevPhase.roundIndex === newPhase.roundIndex;

        this.updateState({
            gameState: msg.state,
            ...(sameRound
                ? {}
                : { liveGuesses: new Map(), currentRoundAnswer: null }),
        });
        return;
      }
      case "error": {
        this.updateState({ lastError: msg.message });
        if (this.welcomeReject) {
          this.intentionallyClosed = true; // prevent reconnect
          const reject = this.welcomeReject;
          this.welcomeResolve = null;
          this.welcomeReject = null;
          reject(new Error(msg.message));
        }
        return;
      }
      case "welcome":
        return;
      case "teammate_guess": {
        if (msg.guess === null) return;
        const next = new Map(this.state.liveGuesses);
        next.set(msg.playerId, msg.guess);
        this.updateState({ liveGuesses: next });
        return;
      }
      case "round_answer": {
        this.updateState({
            currentRoundAnswer: {
                roundIndex: msg.roundIndex,
                answer: msg.answer,
            },
        });
        return;
      }
      case "chat":
        this.updateState({ chatLog: [...this.state.chatLog, msg.message] });
        return;
      case "chat_history":
        this.updateState({ chatLog: msg.messages });
        return;
    }
  }

  private handleClose(event?: CloseEvent): void {
      if (this.welcomeReject) {
          const reject = this.welcomeReject;
          this.welcomeResolve = null;
          this.welcomeReject = null;
          this.intentionallyClosed = true;
          this.updateState({ connectionStatus: "disconnected" });
          reject(new Error("Connection closed before welcome"));
          return;
      }
      if (this.intentionallyClosed || event?.code === 1000) {
          this.updateState({ connectionStatus: "disconnected" });
          return;
      }
      this.updateState({ connectionStatus: "reconnecting" });
      this.scheduleReconnect();
  }

  private scheduleReconnect(): void {
      const delay = Math.min(10_000, 500 * Math.pow(2, this.reconnectAttempt));
      this.reconnectAttempt++;
      this.reconnectTimer = setTimeout(() => {
          this.reconnectTimer = null;
          this.socket = this.openSocket();
          // openSocket's close listener re-enters handleClose if this attempt
          // also fails, which re-schedules with longer backoff.
      }, delay);
  }

  private updateState(patch: Partial<HostClientState>): void {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((listener) => listener());
  }
}
