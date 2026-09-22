import { BadgeCheck, Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { SafeImage } from "@/components/SafeImage";
import { siteConfig } from "@/config/site";
import {
  AnimeScene,
  CityScene,
  PetScene,
  TycoonScene,
} from "@/components/GameSceneArt";

const miniCards = [
  {
    Scene: TycoonScene,
    featured: true,
    title: "Tycoon Empire",
    price: "$2,400",
  },
  {
    Scene: AnimeScene,
    featured: false,
    title: "Anime Legends",
    price: "$1,850",
  },
  {
    Scene: PetScene,
    featured: false,
    title: "Pet World RP",
    price: "$980",
  },
  {
    Scene: CityScene,
    featured: false,
    title: "City Life",
    price: "$3,200",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:min-h-[520px] lg:pr-20">
      {/* Roblox character — recedes behind the laptop as atmosphere, not a
          second focal point: lower z-index, slightly muted, no overlap
          onto the laptop's corner. */}
      <div className="pointer-events-none absolute -right-4 bottom-0 z-20 hidden h-[280px] w-[190px] opacity-90 saturate-[0.92] sm:block lg:-right-8 lg:h-[340px] lg:w-[230px]">
        <SafeImage
          src="/hero/roblox-character.webp"
          alt=""
          fill
          className="object-contain object-bottom drop-shadow-xl"
          sizes="230px"
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
                  {siteConfig.name.toLowerCase()}.com/browse
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="relative h-7 w-7 shrink-0">
                    <Image
                      src="/logo-icon.webp"
                      alt=""
                      fill
                      className="object-contain"
                      sizes="28px"
                    />
                  </span>
                  <span className="text-xs font-bold text-ink">
                    {siteConfig.name}
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

              <div className="grid grid-cols-2 gap-3 p-4">
                {miniCards.map((card, i) => {
                  const Scene = card.Scene;
                  return (
                    <div
                      key={card.title}
                      className={`animate-hero-card-${i + 1} overflow-hidden rounded-xl border border-border bg-white`}
                    >
                      <div className="relative h-14 overflow-hidden">
                        <Scene />
                        {card.featured && (
                          <span className="absolute left-1.5 top-1.5 z-10 rounded-full bg-white/95 px-1.5 py-0.5 text-[7px] font-bold text-brand-600 shadow-sm">
                            Featured
                          </span>
                        )}
                        <Heart className="absolute right-1.5 top-1.5 z-10 h-3 w-3 text-white drop-shadow" />
                      </div>
                      <div className="space-y-1 p-2">
                        <span className="block truncate text-[9px] font-semibold text-ink">
                          {card.title}
                        </span>
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-[9px] font-bold text-revenue">
                            {card.price}
                          </span>
                          <div className="flex items-center gap-1">
                            <BadgeCheck className="h-2.5 w-2.5 text-brand-400" />
                            <ShieldCheck className="h-2.5 w-2.5 text-slate-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div className="relative mx-auto h-4 w-[104%] -translate-x-[2%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-md" />
          <div className="mx-auto h-1.5 w-1/3 rounded-b-lg bg-slate-400" />
        </div>
      </div>
    </div>
  );
}
