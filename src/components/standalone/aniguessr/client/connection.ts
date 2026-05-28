export type ConnectionStatus = "connecting" | "connected" | "reconnecting" | "closed" | "disconnected";

export function httpToWs(httpUrl: string): string {
  return httpUrl.replace(/^http/, "ws");
}
