import Link from "next/link";
import { Heart } from "lucide-react";

export default function WatchlistPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Watchlist
      </h1>
      <p className="mt-1 text-slate-500">
        Keep track of listings you&apos;re interested in.
      </p>

      <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
          <Heart className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-lg font-semibold text-slate-800">
          Your watchlist is empty
        </h2>
        <p className="mt-1 max-w-sm text-sm text-slate-500">
          Tap the heart icon on any listing to save it here for later.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Browse Marketplace
        </Link>
      </div>
    </div>
  );
}
