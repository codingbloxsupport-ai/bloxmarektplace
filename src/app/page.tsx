import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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
      <section
        className="relative overflow-hidden border-b border-border bg-cover bg-[position:62%_30%]"
        style={{ backgroundImage: "url('/hero/header-scene.webp')" }}
        role="img"
        aria-label="A Roblox creator working on their game in a bright studio overlooking a city skyline"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-14 lg:flex lg:min-h-[620px] lg:items-center lg:px-10 lg:py-24">
          <div className="text-center lg:max-w-xl lg:text-left">
            <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted backdrop-blur-sm lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              The Roblox Game Marketplace
            </span>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.98] tracking-tight text-ink">
              <span className="block">Buy and sell</span>
              <span className="block text-brand-500">Roblox games.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-slate-700 lg:mx-0">
              Verified sellers. Escrow-protected deals. Full ownership,
              guaranteed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/browse"
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 sm:w-auto"
              >
                Browse Marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/sell"
                className="flex w-full items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-alt sm:w-auto"
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
        </div>
      </section>

      <TrustBar />
      <FeaturedGamesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}
