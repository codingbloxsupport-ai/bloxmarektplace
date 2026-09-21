import { notFound } from "next/navigation";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { games, sellers } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export function generateStaticParams() {
  return Object.keys(sellers).map((id) => ({ id }));
}

export default async function SellerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const seller = sellers[id];
  if (!seller) notFound();

  const listings = games.filter((g) => g.seller.id === id);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-semibold text-white">
          {seller.avatarInitials}
        </span>
        <div className="flex-1">
          <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900">
            {seller.name}
            {seller.verified && (
              <BadgeCheck className="h-5 w-5 text-brand-500" />
            )}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {seller.verified ? "Verified Seller" : "Seller"} ·{" "}
            {seller.gamesSold} games sold · {listings.length} active listing
            {listings.length === 1 ? "" : "s"}
          </p>
        </div>
        {seller.verified && (
          <div className="flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-2.5 text-sm font-medium text-brand-700">
            <ShieldCheck className="h-4 w-4" />
            Identity Verified
          </div>
        )}
      </div>

      <h2 className="mt-10 text-xl font-bold text-slate-900">
        Listings from {seller.name}
      </h2>
      {listings.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-500">
          This seller has no active listings right now.
        </p>
      )}
    </div>
  );
}
