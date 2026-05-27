
export class AuthError extends Error {
  constructor() {
    super("Incorrect password");
    this.name = "AuthError";
  }
}

export class NoApiKeyError extends Error {
  constructor() {
    super("No Google API key configured on the server");
    this.name = "NoApiKeyError";
  }
}

export async function fetchGoogleApiKey(
  serverUrl: string,
  password: string,
): Promise<string> {
  const url = `${serverUrl.replace(/\/$/, "")}/api/google-key`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  if (res.status === 401) throw new AuthError();
  if (res.status === 404) throw new NoApiKeyError();
  if (!res.ok) throw new Error(`Server returned ${res.status}`);
  const body = (await res.json()) as { key?: unknown };
  if (typeof body.key !== "string" || !body.key) {
    throw new Error("Malformed response from server");
  }
  return body.key;
}
