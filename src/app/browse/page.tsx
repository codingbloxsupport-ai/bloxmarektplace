import { PackageSearch } from "lucide-react";
import { CategoryPills } from "@/components/CategoryPills";
import { EmptyState } from "@/components/EmptyState";
import { FilterSidebar } from "@/components/FilterSidebar";
import { GameCard } from "@/components/GameCard";
import { games } from "@/data/games";

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim();
  const results = query
    ? games.filter((g) => g.title.toLowerCase().includes(query.toLowerCase()))
    : games;

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <FilterSidebar />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {query ? `Results for "${query}"` : "Marketplace"}
              </h1>
              <p className="mt-1 text-muted">
                Discover and buy incredible Roblox games from verified
                creators.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-ink">
                {results.length} listings live
              </p>
              <p className="text-xs text-muted">
                New listings appear here as sellers join.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <CategoryPills />
          </div>

          <div className="mt-6">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            ) : query ? (
              <EmptyState
                icon={<PackageSearch className="h-6 w-6" />}
                title={`No results for "${query}"`}
                body="Try a different search term, or browse all listings."
                action={{ label: "Browse All Games", href: "/browse" }}
              />
            ) : (
              <EmptyState
                icon={<PackageSearch className="h-6 w-6" />}
                title="No listings yet"
                body="This marketplace is brand new — nobody has listed a game for sale yet. Be the first."
                action={{ label: "Sell Your Game", href: "/sell" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
