"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Logo } from "@/components/Logo";

export default function SignupPage() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16 sm:px-6">
      <Logo />
      <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">
        Create your account
      </h1>
      <p className="mt-1 text-center text-sm text-muted">
        Join to buy and sell established Roblox games.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full space-y-4 rounded-2xl border border-border bg-white p-6"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-semibold text-ink"
          >
            Full name
          </label>
          <input id="name" required placeholder="Alex Johnson" className="input" />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold text-ink"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="input"
          />
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
            type="password"
            required
            placeholder="At least 8 characters"
            className="input"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-brand-500 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
