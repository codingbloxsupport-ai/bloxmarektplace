import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Marketplace",
    links: [
      { label: "Browse Games", href: "/browse" },
      { label: "Sell Your Game", href: "/sell" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Resources",
    links: siteConfig.resourcesNav.map((item) => ({
      label: item.label,
      href: item.href,
    })),
  },
  {
    title: "Account",
    links: [
      { label: "Log In", href: "/login" },
      { label: "Sign Up", href: "/signup" },
      { label: "Watchlist", href: "/watchlist" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-white">
      <div className="h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-brand-500" />
      <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              {siteConfig.tagline}
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-slate-900">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-100 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
