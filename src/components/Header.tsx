"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(query.trim() ? `/browse?q=${encodeURIComponent(query.trim())}` : "/browse");
    searchInputRef.current?.blur();
  }

  return (
    <header className="sticky top-0 z-30 h-[70px] border-b border-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1400px] items-center gap-6 px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-brand-600" : "text-muted hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="group relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Resources
              <ChevronDown className="h-4 w-4" />
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-border bg-white p-1.5 shadow-lg">
                {siteConfig.resourcesNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-soft-blue hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <form
          onSubmit={handleSearchSubmit}
          className="relative hidden max-w-sm flex-1 lg:block"
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, genres, or keywords..."
            className="w-full rounded-lg border border-border bg-surface-alt py-2 pl-9 pr-14 text-sm text-ink placeholder:text-muted focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-border bg-white px-1.5 py-0.5 text-[11px] font-medium text-muted">
            ⌘K
          </kbd>
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-alt sm:inline-block"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="hover-lift hidden rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 sm:inline-block"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted hover:bg-surface-alt hover:text-ink lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-white px-4 py-3 lg:hidden">
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games, genres, or keywords..."
              className="w-full rounded-lg border border-border bg-surface-alt py-2 pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          </form>
          <nav className="flex flex-col">
            {siteConfig.nav.map((item) => {
              const active = item.href === pathname;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-2 py-2.5 text-sm font-medium",
                    active ? "text-brand-600" : "text-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <p className="mt-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted">
              Resources
            </p>
            {siteConfig.resourcesNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-border" />
            <Link
              href="/login"
              className="rounded-lg px-2 py-2.5 text-sm font-semibold text-ink"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="mt-1 rounded-lg bg-brand-500 px-2 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
