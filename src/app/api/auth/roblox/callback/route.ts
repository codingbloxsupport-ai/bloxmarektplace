import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { createSession } from "@/lib/session";
import {
  ROBLOX_TOKEN_URL,
  ROBLOX_USERINFO_URL,
  getRobloxOAuthConfig,
  readAndClearOAuthFlowCookie,
  type RobloxUserInfo,
} from "@/lib/roblox-oauth";

function redirectToLoginWithError(request: NextRequest, error: string) {
  const url = new URL("/login", request.url);
  url.searchParams.set("error", error);
  return NextResponse.redirect(url);
}

export async function GET(request: NextRequest) {
  const config = getRobloxOAuthConfig();
  if (!config) {
    return redirectToLoginWithError(request, "roblox_oauth_unavailable");
  }

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const oauthError = request.nextUrl.searchParams.get("error");

  const flow = await readAndClearOAuthFlowCookie();

  if (oauthError || !code || !state || !flow || state !== flow.state) {
    return redirectToLoginWithError(request, "roblox_oauth_failed");
  }

  const tokenResponse = await fetch(ROBLOX_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: config.redirectUri,
      code_verifier: flow.codeVerifier,
    }),
  });

  if (!tokenResponse.ok) {
    return redirectToLoginWithError(request, "roblox_oauth_failed");
  }

  const tokens = (await tokenResponse.json()) as { access_token: string };

  const userInfoResponse = await fetch(ROBLOX_USERINFO_URL, {
    headers: { Authorization: `Bearer ${tokens.access_token}` },
  });

  if (!userInfoResponse.ok) {
    return redirectToLoginWithError(request, "roblox_oauth_failed");
  }

  const info = (await userInfoResponse.json()) as RobloxUserInfo;
  const robloxUserId = info.sub;
  const robloxUsername =
    info.preferred_username ?? info.nickname ?? `roblox-${robloxUserId}`;
  const displayName = info.name ?? robloxUsername;

  if (flow.linkUserId) {
    const conflict = await prisma.user.findUnique({ where: { robloxUserId } });
    if (conflict && conflict.id !== flow.linkUserId) {
      return redirectToLoginWithError(request, "roblox_already_linked");
    }

    await prisma.user.update({
      where: { id: flow.linkUserId },
      data: { robloxUserId, robloxUsername },
    });

    return NextResponse.redirect(new URL(flow.next, request.url));
  }

  let user = await prisma.user.findUnique({ where: { robloxUserId } });
  if (!user) {
    user = await prisma.user.create({
      data: { name: displayName, robloxUserId, robloxUsername },
    });
  }

  await createSession(user.id);
  return NextResponse.redirect(new URL(flow.next, request.url));
}
