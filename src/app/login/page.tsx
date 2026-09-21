"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16 sm:px-6">
      <Logo />
      <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
        Welcome back
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Log in to manage your listings and watchlist.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
      >
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
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
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            placeholder="••••••••"
            className="input"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-brand-500 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
        >
          Log In
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500">
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
