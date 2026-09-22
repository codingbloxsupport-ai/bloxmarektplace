"use client";

import { useState } from "react";
import { ChevronDown, Headphones } from "lucide-react";
import { categories } from "@/data/games";
import { DualRangeSlider } from "@/components/DualRangeSlider";
import { ToggleSwitch } from "@/components/ToggleSwitch";
import { formatCompact } from "@/lib/format";

const genres = categories.filter((c) => c !== "All Games");
const INITIAL_VISIBLE_GENRES = 8;

export function FilterSidebar() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [showAllGenres, setShowAllGenres] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(true);
  const visibleGenres = showAllGenres
    ? genres
    : genres.slice(0, INITIAL_VISIBLE_GENRES);

  function toggleGenre(name: string) {
    setSelectedGenres((prev) =>
      prev.includes(name) ? prev.filter((g) => g !== name) : [...prev, name]
    );
  }

  return (
    <aside className="w-full shrink-0 space-y-6 lg:w-72">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-ink">Filters</h2>
        <button
          type="button"
          onClick={() => {
            setSelectedGenres([]);
            setVerifiedOnly(false);
          }}
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Reset
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-ink">
          Category
        </label>
        <div className="relative">
          <select className="w-full appearance-none rounded-lg border border-border bg-white py-2.5 pl-3 pr-9 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100">
            <option>All Categories</option>
            {genres.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-ink">
          Genre
        </label>
        <div className="space-y-2.5">
          {visibleGenres.map((genre) => (
            <label
              key={genre}
              className="flex cursor-pointer items-center text-sm"
            >
              <span className="flex items-center gap-2.5 text-muted">
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => toggleGenre(genre)}
                  className="h-4 w-4 rounded border-border text-brand-500 focus:ring-brand-500"
                />
                {genre}
              </span>
            </label>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowAllGenres((v) => !v)}
          className="mt-3 flex items-center gap-1 text-sm font-medium text-muted hover:text-ink"
        >
          {showAllGenres ? "Show less" : "Show more"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${showAllGenres ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div className="border-t border-border pt-6">
        <label className="mb-3 block text-sm font-semibold text-ink">
          Price Range
        </label>
        <DualRangeSlider
          min={0}
          max={500000}
          step={5000}
          formatValue={(v) => `$${formatCompact(v).slice(1)}`}
        />
      </div>

      <div className="border-t border-border pt-6">
        <label className="mb-3 block text-sm font-semibold text-ink">
          Monthly Revenue
        </label>
        <DualRangeSlider
          min={0}
          max={100000}
          step={2500}
          formatValue={(v) => `$${formatCompact(v).slice(1)}`}
        />
      </div>

      <div className="flex items-center justify-between border-t border-border pt-6">
        <div>
          <p className="text-sm font-semibold text-ink">
            Verified Sellers Only
          </p>
          <p className="mt-0.5 text-xs text-muted">
            Show only verified and trusted sellers
          </p>
        </div>
        <ToggleSwitch
          checked={verifiedOnly}
          onChange={setVerifiedOnly}
          label="Verified sellers only"
        />
      </div>

      <div className="border-t border-border pt-6">
        <label className="mb-2 block text-sm font-semibold text-ink">
          Sort By
        </label>
        <div className="relative">
          <select className="w-full appearance-none rounded-lg border border-border bg-white py-2.5 pl-3 pr-9 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100">
            <option>Most Relevant</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Revenue: High to Low</option>
            <option>Newest</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        </div>
      </div>

      <div className="rounded-xl border border-border p-4">
        <div className="flex items-start gap-3">
          <Headphones className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <div>
            <p className="text-sm font-semibold text-ink">
              Need help?
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Our team is here to help you find the right game.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-lg border border-border bg-white py-2 text-sm font-medium text-ink hover:bg-surface-alt"
        >
          Contact Support
        </button>
      </div>
    </aside>
  );
}
