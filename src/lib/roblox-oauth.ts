import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

// Endpoints and flow per Roblox's OAuth 2.0 implementation guide:
// https://create.roblox.com/docs/cloud/auth/oauth2-develop
export const ROBLOX_AUTHORIZE_URL = "https://apis.roblox.com/oauth/v1/authorize";
export const ROBLOX_TOKEN_URL = "https://apis.roblox.com/oauth/v1/token";
export const ROBLOX_USERINFO_URL = "https://apis.roblox.com/oauth/v1/userinfo";

// Identity-only scopes — well-documented and stable. Per-experience
// ownership scopes are deliberately not requested yet; see README.
export const ROBLOX_OAUTH_SCOPE = "openid profile";

export function getRobloxOAuthConfig() {
  const clientId = process.env.ROBLOX_CLIENT_ID;
  const clientSecret = process.env.ROBLOX_CLIENT_SECRET;
  const redirectUri = process.env.ROBLOX_REDIRECT_URI;
  if (!clientId || !clientSecret || !redirectUri) return null;
  return { clientId, clientSecret, redirectUri };
}

export interface RobloxUserInfo {
  sub: string;
  name?: string;
  nickname?: string;
  preferred_username?: string;
  profile?: string;
}

const FLOW_COOKIE = "roblox_oauth_flow";

interface OAuthFlowState {
  codeVerifier: string;
  state: string;
  next: string;
  linkUserId?: string;
}

function getSecretKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET environment variable is not set.");
  }
  return new TextEncoder().encode(secret);
}

// Roblox's authorization flow redirects the browser away and back, so the
// PKCE verifier and CSRF state have to survive that round trip outside of
// any in-memory state. A short-lived signed cookie (mirroring the session
// cookie pattern in src/lib/session.ts) does that without needing a DB row
// for what is a ~10 minute-lived, single-use value.
export async function createOAuthFlowCookie(payload: OAuthFlowState) {
  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(getSecretKey());

  const cookieStore = await cookies();
  cookieStore.set(FLOW_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
}

export async function readAndClearOAuthFlowCookie(): Promise<OAuthFlowState | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(FLOW_COOKIE)?.value;
  cookieStore.delete(FLOW_COOKIE);

  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"],
    });
    return payload as unknown as OAuthFlowState;
  } catch {
    return null;
  }
}
