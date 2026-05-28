import type { Guess } from "./types";
import type {
  GameState,
  Player,
  TeamId,
} from "./game";
import type {
  ClientMessage,
  ServerMessage,
  WelcomeMessage,
} from "./protocol";
import { httpToWs, type ConnectionStatus } from "./connection";

export type PlayerClientOptions = {
  /** Base server URL, e.g. "http://localhost:8080". */
  url: string;
  name: string;
  password: string;
};

export type PlayerClientState = {
  connectionStatus: ConnectionStatus;
  /** Your player id (= name). Populated after welcome. */
  playerId: string | null;
  quizInfo: WelcomeMessage["quizInfo"] | null;
  /** Server-authoritative game state. Null before the first `state` message. */
  gameState: GameState | null;
  /**
   * Live (in-progress) guesses for the current guessing phase, keyed by
   * playerId. Includes your own guess and teammates'. Empty outside of
   * guessing phase. Cleared automatically on round change / phase change.
   */
  liveGuesses: Map<string, Guess>;
  /**
   * Most recent server error message (e.g., from a rejected action). UI can
   * display + dismiss via `clearError()`.
   */
  lastError: string | null;
};

export class PlayerClient {
  private socket: WebSocket;
  private state: PlayerClientState;
  private listeners = new Set<() => void>();
  private welcomeResolve: ((c: PlayerClient) => void) | null = null;
  private welcomeReject: ((e: Error) => void) | null = null;

  private readonly url: string;
  private readonly name: string;
  private readonly password: string;

  private intentionallyClosed = false;
  private reconnectAttempt = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;

  private constructor(opts: PlayerClientOptions) {
    this.url = opts.url;
    this.name = opts.name;
    this.password = opts.password;
    this.state = {
        connectionStatus: "connecting",
        playerId: null,
        quizInfo: null,
        gameState: null,
        liveGuesses: new Map(),
        lastError: null,
    };
    this.socket = this.openSocket();
  }

  private openSocket(): WebSocket {
    const socket = new WebSocket(httpToWs(this.url));
    socket.addEventListener("open", () => {
        socket.send(JSON.stringify({
            type: "join",
            name: this.name,
            password: this.password,
        }));
    });
    socket.addEventListener("message", (e) =>
        this.handleMessage(typeof e.data === "string" ? e.data : ""),
    );
    socket.addEventListener("close", () => this.handleClose());
    return socket;
  }

  /**
   * Open a connection and authenticate. Resolves with the client once the
   * server sends `welcome`. Rejects if the server sends an error first or
   * the connection closes before authentication.
   */
  static connect(opts: PlayerClientOptions): Promise<PlayerClient> {
    return new Promise((resolve, reject) => {
      const client = new PlayerClient(opts);
      client.welcomeResolve = resolve;
      client.welcomeReject = reject;
    });
  }

  // -------------------------------------------------------------------------
  // Store API.
  // -------------------------------------------------------------------------

  getState(): PlayerClientState {
    return this.state;
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  // -------------------------------------------------------------------------
  // Derived accessors. Stable references; useful in UI code.
  // -------------------------------------------------------------------------

  /** Your own Player record, if known. */
  me(): Player | null {
    const id = this.state.playerId;
    if (!id || !this.state.gameState) return null;
    return this.state.gameState.players.find((p) => p.id === id) ?? null;
  }

  /** Have you submitted in the current round? False outside guessing. */
  hasSubmitted(): boolean {
    const phase = this.state.gameState?.phase;
    if (phase?.type !== "guessing") return false;
    const id = this.state.playerId;
    if (!id) return false;
    return phase.submittedPlayerIds.includes(id);
  }

  /** Your current live guess for the round, if any. */
  myLiveGuess(): Guess | undefined {
    const id = this.state.playerId;
    if (!id) return undefined;
    return this.state.liveGuesses.get(id);
  }

  // -------------------------------------------------------------------------
  // Actions.
  // -------------------------------------------------------------------------

  joinTeam(team: TeamId): void {
    this.rawSend({ type: "join_team", team });
  }

  /**
   * Place or move your marker. Optimistically updates your own entry in
   * state.liveGuesses. The server broadcasts to teammates but does not echo
   * back to you.
   */
  updateGuess(guess: Guess): void {
    this.rawSend({ type: "update_guess", guess });
    const id = this.state.playerId;
    if (id) {
      const newLive = new Map(this.state.liveGuesses);
      newLive.set(id, guess);
      this.updateState({ liveGuesses: newLive });
    }
  }

  submitGuess(): void {
    this.rawSend({ type: "submit_guess" });
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
      case "welcome": {
        this.reconnectAttempt = 0;
        this.updateState({
          connectionStatus: "connected",
          playerId: msg.playerId,
          quizInfo: msg.quizInfo,
        });
        const resolve = this.welcomeResolve;
        this.welcomeResolve = null;
        this.welcomeReject = null;
        resolve?.(this);
        return;
      }
      case "state":
        this.handleStateMessage(msg.state);
        return;
      case "teammate_guess":
        this.handleTeammateGuess(msg.playerId, msg.guess);
        return;
      case "error": {
        this.updateState({ lastError: msg.message });
        // If still in auth phase, fail the connect() promise.
        if (this.welcomeReject) {
          this.intentionallyClosed = true; // prevent reconnect
          const reject = this.welcomeReject;
          this.welcomeResolve = null;
          this.welcomeReject = null;
          reject(new Error(msg.message));
        }
        return;
      }
      case "host_welcome":
        // Wrong client role — shouldn't happen, ignore.
        return;
    }
  }

  private handleStateMessage(newGameState: GameState): void {
    const oldPhase = this.state.gameState?.phase;
    const newPhase = newGameState.phase;
    const sameGuessing =
      oldPhase?.type === "guessing" &&
      newPhase.type === "guessing" &&
      oldPhase.roundIndex === newPhase.roundIndex;

    this.updateState({
      gameState: newGameState,
      liveGuesses: sameGuessing ? this.state.liveGuesses : new Map(),
    });
  }

  private handleTeammateGuess(playerId: string, guess: Guess | null): void {
    const newLive = new Map(this.state.liveGuesses);
    if (guess === null) newLive.delete(playerId);
    else newLive.set(playerId, guess);
    this.updateState({ liveGuesses: newLive });
  }

  private handleClose(): void {
      if (this.welcomeReject) {
          const reject = this.welcomeReject;
          this.welcomeResolve = null;
          this.welcomeReject = null;
          reject(new Error("Connection closed before welcome"));
      }
      if (this.intentionallyClosed) {
          this.updateState({ connectionStatus: "disconnected" });
          return;
      }
      this.updateState({ connectionStatus: "reconnecting" });
      this.scheduleReconnect();
  }

  private scheduleReconnect(): void {
      const delay = Math.min(5_000, 250 * Math.pow(2, this.reconnectAttempt));
      this.reconnectAttempt++;
      this.reconnectTimer = setTimeout(() => {
          this.reconnectTimer = null;
          this.socket = this.openSocket();
          // openSocket's close listener re-enters handleClose if this attempt
          // also fails, which re-schedules with longer backoff.
      }, delay);
  }

  private updateState(patch: Partial<PlayerClientState>): void {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((listener) => listener());
  }
}
