import { NextRequest, NextResponse } from "next/server";
import { createPkcePair, randomState } from "@/lib/pkce";
import { verifySession } from "@/lib/dal";
import { safeNextPath } from "@/lib/next-path";
import {
  ROBLOX_AUTHORIZE_URL,
  ROBLOX_OAUTH_SCOPE,
  createOAuthFlowCookie,
  getRobloxOAuthConfig,
} from "@/lib/roblox-oauth";

// Starts the Roblox OAuth 2.0 authorization code flow with PKCE. Hitting
// this route while already logged in (e.g. from an "account" screen)
// links the resulting Roblox account to the current user instead of
// starting a fresh session.
export async function GET(request: NextRequest) {
  const config = getRobloxOAuthConfig();
  if (!config) {
    return NextResponse.json(
      { error: "Roblox sign-in isn't configured on this deployment yet." },
      { status: 503 }
    );
  }

  const next = safeNextPath(request.nextUrl.searchParams.get("next"));

  const session = await verifySession();
  const { codeVerifier, codeChallenge } = createPkcePair();
  const state = randomState();

  await createOAuthFlowCookie({
    codeVerifier,
    state,
    next,
    linkUserId: session?.userId,
  });

  const authorizeUrl = new URL(ROBLOX_AUTHORIZE_URL);
  authorizeUrl.searchParams.set("client_id", config.clientId);
  authorizeUrl.searchParams.set("redirect_uri", config.redirectUri);
  authorizeUrl.searchParams.set("scope", ROBLOX_OAUTH_SCOPE);
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("code_challenge", codeChallenge);
  authorizeUrl.searchParams.set("code_challenge_method", "S256");
  authorizeUrl.searchParams.set("state", state);

  return NextResponse.redirect(authorizeUrl);
}
