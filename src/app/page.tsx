import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { TrustBar } from "@/components/TrustBar";
import { FeaturedGamesSection } from "@/components/FeaturedGamesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CTASection } from "@/components/CTASection";

const trustPoints = [
  "Secure escrow payments",
  "Verified sellers",
  "Full ownership transfer",
  "No listing fees",
];

export default function LandingPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div
          className="absolute inset-0 hidden bg-cover bg-right bg-no-repeat lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 0%, rgba(255,255,255,.95) 20%, rgba(255,255,255,.68) 42%, rgba(255,255,255,.4) 65%, rgba(255,255,255,.16) 85%, rgba(255,255,255,.16) 100%), url('/hero/roblox-city-background.webp')",
          }}
        />
        <div className="bg-dot-grid absolute inset-0 opacity-40 lg:hidden" />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-28">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600 shadow-sm ring-1 ring-inset ring-brand-100">
              <Sparkles className="h-3.5 w-3.5" />
              The Roblox Game Marketplace
            </span>
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.98] tracking-tight text-ink">
              <span className="block">Turn your Roblox</span>
              <span className="block">vision into</span>
              <span className="block text-brand-500">what&apos;s next.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 lg:mx-0">
              Verified sellers. Escrow-protected deals. Full ownership,
              guaranteed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/browse"
                className="hover-lift flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/20 hover:bg-brand-600 sm:w-auto"
              >
                Browse Marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/sell"
                className="hover-lift flex w-full items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-alt sm:w-auto"
              >
                Sell Your Game
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted lg:justify-start">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-revenue" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual />
        </div>
      </section>

      <TrustBar />
      <FeaturedGamesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}
