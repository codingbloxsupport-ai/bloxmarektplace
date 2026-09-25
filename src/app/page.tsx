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
        className="relative overflow-hidden border-b border-border bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/desk-scene-wash.webp')" }}
      >
        <div className="relative mx-6 mt-6 h-56 overflow-hidden rounded-2xl sm:h-72 lg:hidden">
          <div
            className="absolute inset-0 bg-cover bg-[position:68%_22%]"
            style={{ backgroundImage: "url('/hero/desk-scene.webp')" }}
            role="img"
            aria-label="A seller reviewing their Roblox game listings on BloxMarket from a widescreen monitor"
          />
        </div>

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-14 text-center lg:px-10 lg:py-24 lg:text-left">
            <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-surface-alt px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted lg:mx-0">
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

          <div className="relative hidden lg:block lg:min-h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-[position:center_22%]"
              style={{
                backgroundImage: "url('/hero/desk-scene.webp')",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 18%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 18%)",
              }}
              role="img"
              aria-label="A seller reviewing their Roblox game listings on BloxMarket from a widescreen monitor"
            />
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
