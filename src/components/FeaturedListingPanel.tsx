"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Heart,
  Lock,
  MessageCircle,
  Play,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { GameListing } from "@/types/game";
import { formatCompact, formatPrice, formatVisits } from "@/lib/format";
import { cn } from "@/lib/cn";

export function FeaturedListingPanel({ game }: { game: GameListing }) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [saved, setSaved] = useState(false);
  const thumbs = [0, 1, 2, 3];

  return (
    <div className="w-full shrink-0 lg:w-[380px] xl:w-[420px]">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <div
          className="relative flex h-48 items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})`,
          }}
        >
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-brand-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            <BadgeCheck className="h-3.5 w-3.5" />
            Featured Listing
          </span>
          <button
            type="button"
            aria-label={saved ? "Remove from watchlist" : "Add to watchlist"}
            onClick={() => setSaved((v) => !v)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-muted shadow-sm hover:bg-white"
          >
            <Heart
              className={cn(
                "h-4 w-4",
                saved && "fill-rose-500 text-rose-500"
              )}
            />
          </button>
          <span className="px-4 text-center text-3xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-sm">
            {game.title}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 p-3">
          {thumbs.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveThumb(i)}
              className={cn(
                "relative flex h-14 items-center justify-center overflow-hidden rounded-lg border-2",
                activeThumb === i ? "border-brand-500" : "border-transparent"
              )}
              style={{
                background: `linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})`,
              }}
            >
              {i === 0 && (
                <Play className="h-4 w-4 fill-white text-white" />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-4 px-4 pb-4">
          <div>
            <h2 className="text-lg font-bold text-ink">{game.title}</h2>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-surface-alt px-2 py-0.5 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted">
            {game.description}
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-surface-alt p-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                <span className="text-sm font-bold">$</span>
              </span>
              <p className="mt-2 text-sm font-bold text-ink">
                {formatPrice(game.price)}
              </p>
              <p className="text-[11px] text-muted">Price</p>
            </div>
            <div className="rounded-xl bg-surface-alt p-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <TrendingUp className="h-4 w-4" />
              </span>
              <p className="mt-2 text-sm font-bold text-ink">
                {formatCompact(game.monthlyRevenue)}
              </p>
              <p className="text-[11px] text-muted">Monthly Revenue</p>
            </div>
            <div className="rounded-xl bg-surface-alt p-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <Users className="h-4 w-4" />
              </span>
              <p className="mt-2 text-sm font-bold text-ink">
                {formatVisits(game.monthlyVisits)}
              </p>
              <p className="text-[11px] text-muted">Monthly Visits</p>
            </div>
          </div>

          <Link
            href={`/seller/${game.seller.id}`}
            className="flex items-center gap-3 rounded-xl border border-border p-3 hover:bg-surface-alt"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white">
              {game.seller.avatarInitials}
            </span>
            <div className="flex-1">
              <p className="flex items-center gap-1 text-sm font-semibold text-ink">
                {game.seller.name}
                {game.seller.verified && (
                  <BadgeCheck className="h-3.5 w-3.5 text-brand-500" />
                )}
              </p>
              <p className="text-xs text-muted">
                {game.seller.verified ? "Verified Seller" : "Seller"} ·{" "}
                {game.seller.gamesSold} games sold
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted" />
          </Link>

          <div className="space-y-3">
            <TrustRow
              icon={<Lock className="h-4 w-4" />}
              title="Escrow Protected"
              subtitle="Your transaction is secure with escrow."
            />
            <TrustRow
              icon={<MessageCircle className="h-4 w-4" />}
              title="7 Day Support"
              subtitle="Get support from the seller after purchase."
            />
            <TrustRow
              icon={<ShieldCheck className="h-4 w-4" />}
              title="Full Ownership"
              subtitle="Receive complete ownership and all assets."
            />
          </div>

          <Link
            href={`/game/${game.slug}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-sm font-medium text-ink hover:bg-surface-alt"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Seller
            </button>
            <button
              type="button"
              onClick={() => setSaved((v) => !v)}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-sm font-medium text-ink hover:bg-surface-alt"
            >
              <Heart
                className={cn("h-4 w-4", saved && "fill-rose-500 text-rose-500")}
              />
              Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustRow({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="text-xs text-muted">{subtitle}</p>
      </div>
    </div>
  );
}
