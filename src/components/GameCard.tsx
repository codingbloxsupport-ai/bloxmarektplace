"use client";

import Link from "next/link";
import { useState } from "react";
import { BadgeCheck, Heart, ShieldCheck, TrendingUp } from "lucide-react";
import { GameListing } from "@/types/game";
import { formatCompact, formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function GameCard({ game }: { game: GameListing }) {
  const [saved, setSaved] = useState(false);

  return (
    <Link
      href={`/game/${game.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className="relative flex h-40 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})`,
        }}
      >
        {game.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            Featured
          </span>
        )}
        <button
          type="button"
          aria-label={saved ? "Remove from watchlist" : "Add to watchlist"}
          onClick={(e) => {
            e.preventDefault();
            setSaved((v) => !v);
          }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm transition-colors hover:bg-white"
        >
          <Heart
            className={cn("h-4 w-4", saved && "fill-rose-500 text-rose-500")}
          />
        </button>
        <span className="px-4 text-center text-2xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-sm">
          {game.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-semibold text-slate-900">{game.title}</h3>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            {formatPrice(game.price)}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-emerald-600">
            <TrendingUp className="h-3.5 w-3.5" />
            {formatCompact(game.monthlyRevenue)}/mo
          </span>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-slate-100 pt-3 text-xs text-slate-500">
          {game.verifiedSeller && (
            <span className="flex items-center gap-1 text-brand-600">
              <BadgeCheck className="h-3.5 w-3.5" />
              Verified Seller
            </span>
          )}
          {game.escrowProtected && (
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              Escrow Protected
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
