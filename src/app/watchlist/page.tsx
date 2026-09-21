import { Heart } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function WatchlistPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Watchlist
      </h1>
      <p className="mt-1 text-slate-500">
        Keep track of listings you&apos;re interested in.
      </p>

      <div className="mt-10">
        <EmptyState
          icon={<Heart className="h-6 w-6" />}
          title="Your watchlist is empty"
          body="Tap the heart icon on any listing to save it here for later."
          action={{ label: "Browse Marketplace", href: "/browse" }}
        />
      </div>
    </div>
  );
}
