export { PlayerClient } from "./player-client";
export type {
  PlayerClientOptions,
  PlayerClientState,
} from "./player-client";
export type { ChatMessage } from "./protocol"

export { HostClient } from "./host-client";
export type { HostClientOptions, HostClientState } from "./host-client";

export {
  fetchGoogleApiKey,
  AuthError,
  NoApiKeyError,
} from "./google-key";

export type { ConnectionStatus } from "./connection";

// Re-export the domain types so the UI only needs one import path.
export type {
  LatLng,
  Question,
  ImageQuestion,
  TextQuestion,
  Answer,
  MapAnswer,
  TextAnswer,
  ClientAnswer,
  Guess,
  MapGuess,
  TextGuess,
} from "./types";

export type {
  TeamId,
  Team,
  Player,
  GamePhase,
  LobbyPhase,
  GuessingPhase,
  ResultsPhase,
  EndedPhase,
  SubmittedGuess,
  CompletedRound,
  GameState,
} from "./game";

export { teamOf, teamScore } from "./game";
