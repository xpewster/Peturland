export type ConnectionStatus = "connecting" | "connected" | "disconnected";

export function httpToWs(httpUrl: string): string {
  return httpUrl.replace(/^http/, "ws");
}
