import {
  BadgeCheck,
  Heart,
  Lock,
  MousePointer2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const miniCards = [
  { gradient: ["#4ade80", "#15803d"], featured: true },
  { gradient: ["#60a5fa", "#1e3a8a"], featured: false },
  { gradient: ["#a855f7", "#1e1b4b"], featured: false },
  { gradient: ["#fb923c", "#7c2d12"], featured: false },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
      <div className="absolute -top-14 -left-14 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />
      <div className="absolute -bottom-14 -right-10 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />
      <div className="bg-dot-grid absolute inset-0 -z-10 rounded-[2rem] opacity-60" />

      <div className="animate-float-laptop relative">
        {/* Laptop screen */}
        <div className="relative rounded-t-2xl rounded-b-md border-[7px] border-slate-800 bg-slate-800 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.35)]">
          <div className="overflow-hidden rounded-lg bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 flex h-5 flex-1 items-center rounded-full bg-slate-100 px-2.5 text-[10px] font-medium text-slate-400">
                yourmarketplace.com/browse
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-md bg-gradient-to-br from-brand-500 to-purple-500" />
                <span className="text-[11px] font-bold text-slate-700">
                  Marketplace
                </span>
              </div>
              <div className="flex gap-1.5">
                <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[9px] font-semibold text-white">
                  All Games
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-400">
                  Tycoon
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-400">
                  Anime
                </span>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3 p-4">
              {miniCards.map((card, i) => (
                <div
                  key={i}
                  className={`animate-hero-card-${i + 1} overflow-hidden rounded-lg border border-slate-100`}
                >
                  <div
                    className="relative flex h-14 items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${card.gradient[0]}, ${card.gradient[1]})`,
                    }}
                  >
                    {card.featured && (
                      <span className="absolute left-1.5 top-1.5 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-bold text-brand-600">
                        Featured
                      </span>
                    )}
                    <Heart className="absolute right-1.5 top-1.5 h-3 w-3 text-white/80" />
                  </div>
                  <div className="space-y-1 p-2">
                    <span className="block h-1.5 w-3/4 rounded-full bg-slate-200" />
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="h-1.5 w-6 rounded-full bg-slate-300" />
                      <TrendingUp className="h-2.5 w-2.5 text-emerald-500" />
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

      <div className="absolute -right-4 -top-8 hidden h-16 w-16 rotate-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg sm:block" />
      <div className="absolute -bottom-4 -left-4 hidden h-12 w-12 -rotate-12 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg sm:block" />

      <div className="absolute -left-8 top-2 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:flex">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Lock className="h-3.5 w-3.5" />
        </span>
        <span className="whitespace-nowrap text-xs font-semibold text-slate-700">
          Escrow Protected
        </span>
      </div>

      <div className="absolute -right-8 bottom-0 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:flex">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <ShieldCheck className="h-3.5 w-3.5" />
        </span>
        <span className="whitespace-nowrap text-xs font-semibold text-slate-700">
          Verified Sellers
        </span>
      </div>
    </div>
  );
}
