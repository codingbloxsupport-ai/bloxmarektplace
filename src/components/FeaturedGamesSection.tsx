import Link from "next/link";
import { ArrowRight, PackageSearch } from "lucide-react";
import { games } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export function FeaturedGamesSection() {
  const featured = games.slice(0, 4);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Featured Roblox Games
          </h2>
          <p className="mt-2 text-muted">
            Handpicked opportunities from verified sellers.
          </p>
        </div>
        <Link
          href="/browse"
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          View all games
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {featured.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface-alt px-6 py-16 text-center">
          <PackageSearch className="h-8 w-8 text-brand-500" />
          <h3 className="mt-4 text-lg font-semibold text-ink">
            No listings yet
          </h3>
          <p className="mt-1 max-w-sm text-sm text-muted">
            This marketplace is brand new — nobody has listed a game for sale
            yet. Be the first.
          </p>
          <Link
            href="/sell"
            className="mt-6 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Sell Your Game
          </Link>
        </div>
      )}
    </section>
  );
}
