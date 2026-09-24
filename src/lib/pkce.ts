import "server-only";
import crypto from "node:crypto";

// PKCE per Roblox's OAuth 2.0 implementation guide: a random code verifier
// (43-128 chars of unreserved characters) and its SHA-256 "S256" challenge.
// Buffer's "base64url" encoding is RFC 4648 §5 base64url without padding —
// the same result as Roblox's manual base64 + "+/=" substitution example.
export function createPkcePair() {
  const codeVerifier = crypto.randomBytes(32).toString("base64url");
  const codeChallenge = crypto
    .createHash("sha256")
    .update(codeVerifier)
    .digest("base64url");
  return { codeVerifier, codeChallenge };
}

export function randomState() {
  return crypto.randomBytes(16).toString("base64url");
}
