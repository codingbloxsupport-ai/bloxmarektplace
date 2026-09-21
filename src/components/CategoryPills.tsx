"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { categories } from "@/data/games";
import { cn } from "@/lib/cn";

export function CategoryPills() {
  const [active, setActive] = useState("All Games");

  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActive(category)}
          className={cn(
            "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === category
              ? "bg-brand-500 text-white shadow-sm"
              : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-50"
          )}
        >
          {category}
        </button>
      ))}
      <button
        type="button"
        aria-label="More categories"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-inset ring-slate-200 hover:bg-slate-50"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
