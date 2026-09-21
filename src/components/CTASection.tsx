import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
      <div className="relative rounded-3xl border border-border bg-gradient-to-br from-brand-50 via-white to-soft-blue">
        <div className="absolute -right-8 -top-10 hidden h-24 w-24 rotate-12 rounded-2xl bg-brand-500/90 shadow-lg sm:block" />
        <div className="absolute -bottom-8 right-24 hidden h-14 w-14 -rotate-12 rounded-2xl bg-brand-200 shadow-md sm:block" />
        <div className="absolute -left-6 top-10 hidden h-12 w-12 rotate-6 rounded-2xl bg-brand-100 shadow-md md:block" />

        <div className="relative flex flex-col items-start gap-6 px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-16">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm ring-1 ring-inset ring-brand-100">
              <Sparkles className="h-3.5 w-3.5" />
              We&apos;re just getting started
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              There are no listings yet — list your game today.
            </h2>
            <p className="mt-3 text-muted">
              No fees to list, escrow-protected payouts, and be the first
              thing buyers see when they browse.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/sell"
              className="hover-lift flex items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/20 hover:bg-brand-600"
            >
              Sell Your Game
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/browse"
              className="hover-lift flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
