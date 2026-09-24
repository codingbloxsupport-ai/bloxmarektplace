"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { Gamepad2 } from "lucide-react";
import { Logo } from "@/components/Logo";
import { login } from "@/app/actions/auth";

const OAUTH_ERROR_MESSAGES: Record<string, string> = {
  roblox_oauth_unavailable: "Roblox sign-in isn't set up on this deployment yet.",
  roblox_oauth_failed: "Something went wrong signing in with Roblox. Please try again.",
  roblox_already_linked:
    "That Roblox account is already linked to a different account.",
};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/";
  const oauthError = searchParams.get("error");

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16 sm:px-6">
      <Logo />
      <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">
        Welcome back
      </h1>
      <p className="mt-1 text-sm text-muted">
        Log in to manage your listings and watchlist.
      </p>

      <div className="mt-8 w-full space-y-4 rounded-2xl border border-border bg-white p-6">
        {oauthError && OAUTH_ERROR_MESSAGES[oauthError] && (
          <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-600">
            {OAUTH_ERROR_MESSAGES[oauthError]}
          </p>
        )}

        <Link
          href={`/api/auth/roblox?next=${encodeURIComponent(next)}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white py-2.5 text-sm font-semibold text-ink hover:bg-surface-alt"
        >
          <Gamepad2 className="h-4 w-4" />
          Continue with Roblox
        </Link>

        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-muted">
          <span className="h-px flex-1 bg-border" />
          or
          <span className="h-px flex-1 bg-border" />
        </div>

        <form action={formAction} className="space-y-4">
          {state?.message && (
            <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-600">
              {state.message}
            </p>
          )}
          <input type="hidden" name="next" value={next} />
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-ink"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="input"
            />
            {state?.errors?.email && (
              <p className="mt-1 text-xs text-rose-600">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-ink"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="input"
            />
            {state?.errors?.password && (
              <p className="mt-1 text-xs text-rose-600">
                {state.errors.password[0]}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-brand-500 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-60"
          >
            {pending ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>

      <p className="mt-6 text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
