import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface-alt px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-14">
        <div className="max-w-lg">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
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
            className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
          >
            Sell Your Game
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/browse"
            className="flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-alt"
          >
            Browse Marketplace
          </Link>
        </div>
      </div>
    </section>
  );
}
