import { CategoryPills } from "@/components/CategoryPills";
import { FeaturedListingPanel } from "@/components/FeaturedListingPanel";
import { FilterSidebar } from "@/components/FilterSidebar";
import { GameCard } from "@/components/GameCard";
import { games } from "@/data/games";

export default function MarketplacePage() {
  const featuredGame = games.find((g) => g.featured) ?? games[0];
  const gridGames = games;

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <FilterSidebar />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Marketplace
              </h1>
              <p className="mt-1 text-slate-500">
                Discover and buy incredible Roblox games from verified
                creators.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-700">
                1,200+ games available
              </p>
              <p className="text-xs text-slate-400">
                Real sellers. Real opportunities.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <CategoryPills />
          </div>

          <div className="mt-6 flex flex-col gap-8 xl:flex-row">
            <div className="min-w-0 flex-1">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {gridGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>

            <FeaturedListingPanel game={featuredGame} />
          </div>
        </div>
      </div>
    </div>
  );
}
