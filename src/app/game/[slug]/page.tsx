import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import {
  BadgeCheck,
  Lock,
  MessageCircle,
  Play,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { formatCompact, formatPrice, formatVisits } from "@/lib/format";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();

  const related = games
    .filter((g) => g.id !== game.id && g.category === game.category)
    .slice(0, 3);
  const fallbackRelated = games.filter((g) => g.id !== game.id).slice(0, 3);
  const relatedGames = related.length > 0 ? related : fallbackRelated;

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-600">
          Marketplace
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">{game.title}</span>
      </nav>

      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="min-w-0 flex-1 space-y-8">
          <div
            className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl sm:h-96"
            style={{
              background: `linear-gradient(135deg, ${game.gradient[0]}, ${game.gradient[1]})`,
            }}
          >
            <button
              type="button"
              aria-label="Play trailer"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-transform hover:scale-105"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>
            <span className="pointer-events-none absolute bottom-6 px-4 text-center text-4xl font-extrabold uppercase tracking-wide text-white drop-shadow-sm sm:text-5xl">
              {game.title}
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {game.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              {game.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat
              icon={<span className="text-base font-bold">$</span>}
              value={formatPrice(game.price)}
              label="Asking Price"
              tone="brand"
            />
            <Stat
              icon={<TrendingUp className="h-4 w-4" />}
              value={`${formatCompact(game.monthlyRevenue)}/mo`}
              label="Monthly Revenue"
              tone="emerald"
            />
            <Stat
              icon={<Users className="h-4 w-4" />}
              value={formatVisits(game.monthlyVisits)}
              label="Monthly Visits"
              tone="purple"
            />
            <Stat
              icon={<ShieldCheck className="h-4 w-4" />}
              value={game.escrowProtected ? "Protected" : "Standard"}
              label="Transaction"
              tone="slate"
            />
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                Full ownership transfer of the game and all assets, scripts,
                and models.
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                Group and social channels associated with the experience,
                where applicable.
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                7 days of post-sale support directly from the seller.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full shrink-0 lg:w-[360px]">
          <div className="sticky top-24 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-slate-900">
                {formatPrice(game.price)}
              </span>
              {game.escrowProtected && (
                <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
                  <Lock className="h-3.5 w-3.5" />
                  Escrow
                </span>
              )}
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
            >
              Buy Now
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Seller
            </button>

            <Link
              href={`/seller/${game.seller.id}`}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 hover:bg-slate-50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white">
                {game.seller.avatarInitials}
              </span>
              <div>
                <p className="flex items-center gap-1 text-sm font-semibold text-slate-800">
                  {game.seller.name}
                  {game.seller.verified && (
                    <BadgeCheck className="h-3.5 w-3.5 text-brand-500" />
                  )}
                </p>
                <p className="text-xs text-slate-400">
                  {game.seller.gamesSold} games sold
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {relatedGames.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl font-bold text-slate-900">
            Similar listings
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGames.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
  tone,
}: {
  icon: ReactNode;
  value: string;
  label: string;
  tone: "brand" | "emerald" | "purple" | "slate";
}) {
  const toneClasses: Record<typeof tone, string> = {
    brand: "bg-brand-100 text-brand-600",
    emerald: "bg-emerald-100 text-emerald-600",
    purple: "bg-purple-100 text-purple-600",
    slate: "bg-slate-200 text-slate-600",
  };

  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${toneClasses[tone]}`}
      >
        {icon}
      </span>
      <p className="mt-2.5 text-base font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}
