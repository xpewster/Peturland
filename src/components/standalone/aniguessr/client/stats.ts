import type { LatLng } from "./types";
import type { TeamId } from "./game";

export type FlagKey = "nick_of_time"; // extensible

export type FlagInfo = {
  id: string;            // player id
  roundNumber?: number;
};

export type PlayerRoundStat = {
  playerId: string;
  team: TeamId | null;
  guess: LatLng | null;   // final location, null if none / text round
  score: number;
  distanceKm: number | null;
  lockInMs: number | null; // submit time − round start; null if never submitted
};

export type RoundStats = {
  roundIndex: number;
  correct: LatLng | null;
  winningTeam: TeamId | null;
  players: PlayerRoundStat[];
};

export type StatsLog = {
  rounds: RoundStats[];
  flags: Partial<Record<FlagKey, FlagInfo[]>>;
};

export type StatValue = {
  value: string;     // playerId / team / round index / number, as a string
  detail?: string;   // optional context, e.g. "3 rounds", "312 km avg"
};

export type PlayerStats = {
  playerId: string;
  stats: Record<string, StatValue>;
};

export type TeamStats = {
  team: TeamId;
  stats: Record<string, StatValue>;
};

export type GameStats = {
  awards: Record<string, StatValue>;
  players: PlayerStats[];
  teams: TeamStats[];
};