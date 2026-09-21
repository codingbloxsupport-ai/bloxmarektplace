import { BadgeCheck, Heart, Lock, MousePointer2, ShieldCheck, Sparkles } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

const miniCards = [
  { image: "/games/tycoon.webp", featured: true },
  { image: "/games/anime.webp", featured: false },
  { image: "/games/pet-world.webp", featured: false },
  { image: "/games/city-life.webp", featured: false },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:min-h-[560px] lg:pr-24">
      {/* Decorative floating cubes — behind the laptop, above the background */}
      <div className="absolute -right-4 -top-10 z-0 hidden h-16 w-16 sm:block">
        <SafeImage
          src="/hero/floating-cube-1.webp"
          alt=""
          fill
          className="object-contain drop-shadow-lg"
          sizes="64px"
        />
      </div>
      <div className="absolute -bottom-6 left-0 z-0 hidden h-12 w-12 sm:block">
        <SafeImage
          src="/hero/floating-cube-2.webp"
          alt=""
          fill
          className="object-contain drop-shadow-lg"
          sizes="48px"
        />
      </div>

      {/* Roblox character — right side, overlapping the laptop, behind the floating cards */}
      <div className="pointer-events-none absolute -right-2 bottom-0 z-20 hidden h-[340px] w-[230px] sm:block lg:-right-6 lg:h-[420px] lg:w-[290px]">
        <SafeImage
          src="/hero/roblox-character.webp"
          alt="Roblox character waving"
          fill
          className="object-contain object-bottom drop-shadow-2xl"
          sizes="290px"
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-xl lg:mx-0"
        style={{
          transform: "perspective(1600px) rotateY(-7deg) rotateX(3deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="animate-float-laptop relative">
          {/* Laptop screen */}
          <div className="relative rounded-t-2xl rounded-b-md border-[7px] border-slate-800 bg-slate-800 shadow-[0_35px_65px_-15px_rgba(11,18,32,0.4)]">
            <div className="overflow-hidden rounded-lg bg-white">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="ml-3 flex h-5 flex-1 items-center rounded-full bg-surface-alt px-2.5 text-[10px] font-medium text-muted">
                  yourmarketplace.com/browse
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-4 w-4 rounded-md bg-brand-500" />
                  <span className="text-[11px] font-bold text-ink">
                    Marketplace
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[9px] font-semibold text-white">
                    All Games
                  </span>
                  <span className="rounded-full bg-surface-alt px-2 py-0.5 text-[9px] font-medium text-muted">
                    Tycoon
                  </span>
                  <span className="rounded-full bg-surface-alt px-2 py-0.5 text-[9px] font-medium text-muted">
                    Anime
                  </span>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-3 p-4">
                {miniCards.map((card, i) => (
                  <div
                    key={card.image}
                    className={`animate-hero-card-${i + 1} overflow-hidden rounded-lg border border-border`}
                  >
                    <div className="relative h-14 bg-surface-alt">
                      <SafeImage
                        src={card.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="140px"
                      />
                      {card.featured && (
                        <span className="absolute left-1.5 top-1.5 z-10 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-bold text-brand-600">
                          Featured
                        </span>
                      )}
                      <Heart className="absolute right-1.5 top-1.5 z-10 h-3 w-3 text-white drop-shadow" />
                    </div>
                    <div className="space-y-1 p-2">
                      <span className="block h-1.5 w-3/4 rounded-full bg-slate-200" />
                      <div className="flex items-center justify-between pt-0.5">
                        <span className="h-1.5 w-6 rounded-full bg-slate-300" />
                        <span className="h-1.5 w-4 rounded-full bg-revenue/40" />
                      </div>
                      <div className="flex items-center gap-1 pt-0.5">
                        <BadgeCheck className="h-2.5 w-2.5 text-brand-400" />
                        <ShieldCheck className="h-2.5 w-2.5 text-slate-300" />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="animate-cursor pointer-events-none absolute z-10 -translate-x-1 -translate-y-1">
                  <MousePointer2
                    className="h-4 w-4 fill-slate-900 text-white drop-shadow"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div className="relative mx-auto h-4 w-[104%] -translate-x-[2%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md" />
          <div className="mx-auto h-1.5 w-1/3 rounded-b-lg bg-slate-400" />
        </div>
      </div>

      <div className="absolute -left-8 top-2 z-30 hidden items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 shadow-xl sm:flex">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-revenue">
          <Lock className="h-3.5 w-3.5" />
        </span>
        <span className="whitespace-nowrap text-xs font-semibold text-ink">
          Escrow Protected
        </span>
      </div>

      <div className="absolute -top-10 left-1/3 z-30 hidden w-44 -translate-x-1/2 -rotate-2 items-start gap-2 rounded-xl border border-border bg-white px-3 py-2.5 shadow-xl md:flex">
        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500" />
        <span className="text-[11px] font-medium leading-snug text-ink">
          Turn your passion into opportunity.
        </span>
      </div>
    </div>
  );
}
