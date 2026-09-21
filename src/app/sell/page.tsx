"use client";

import { FormEvent, ReactNode, useState } from "react";
import { CheckCircle2, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { categories } from "@/data/games";

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Sell Your Game
        </h1>
        <p className="mt-2 text-slate-500">
          List your Roblox game in front of thousands of vetted buyers.
          Escrow-protected payouts and a dedicated listing review team.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <div className="min-w-0 flex-1">
          {submitted ? (
            <div className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-16 text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              <h2 className="mt-4 text-lg font-semibold text-slate-800">
                Listing submitted for review
              </h2>
              <p className="mt-1 max-w-sm text-sm text-slate-600">
                Our team typically reviews new listings within 24-48 hours.
                We&apos;ll email you once it&apos;s live.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-xl border border-emerald-300 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
              >
                Submit another listing
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <Field label="Game title" htmlFor="title">
                <input
                  id="title"
                  required
                  placeholder="e.g. Plant Tycoon"
                  className="input"
                />
              </Field>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Category" htmlFor="category">
                  <select id="category" required className="input" defaultValue="">
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories
                      .filter((c) => c !== "All Games")
                      .map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                  </select>
                </Field>
                <Field label="Asking price (USD)" htmlFor="price">
                  <input
                    id="price"
                    type="number"
                    min={0}
                    required
                    placeholder="24500"
                    className="input"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Average monthly revenue (USD)" htmlFor="revenue">
                  <input
                    id="revenue"
                    type="number"
                    min={0}
                    required
                    placeholder="3200"
                    className="input"
                  />
                </Field>
                <Field label="Average monthly visits" htmlFor="visits">
                  <input
                    id="visits"
                    type="number"
                    min={0}
                    required
                    placeholder="180000"
                    className="input"
                  />
                </Field>
              </div>

              <Field label="Description" htmlFor="description">
                <textarea
                  id="description"
                  required
                  rows={5}
                  placeholder="Tell buyers what makes this game valuable: mechanics, monetization, audience, growth trend..."
                  className="input resize-none"
                />
              </Field>

              <Field label="Contact email" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="input"
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
              >
                Submit Listing for Review
              </button>
            </form>
          )}
        </div>

        <aside className="w-full shrink-0 space-y-4 lg:w-80">
          <InfoCard
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Escrow-protected payouts"
            body="Funds are held securely until ownership transfer is confirmed by both parties."
          />
          <InfoCard
            icon={<Users className="h-4 w-4" />}
            title="Vetted buyer network"
            body="Your listing reaches thousands of buyers actively looking for established games."
          />
          <InfoCard
            icon={<TrendingUp className="h-4 w-4" />}
            title="No listing fees"
            body="It's free to list. We only take a small commission when your game sells."
          />
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </span>
      <p className="mt-3 text-sm font-semibold text-slate-800">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{body}</p>
    </div>
  );
}
