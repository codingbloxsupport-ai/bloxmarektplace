import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";

const mainLinks = [
  { label: "Browse", href: "/browse" },
  { label: "Sell Your Game", href: "/sell" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Resources", href: "/resources" },
];

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Support", href: "/resources" },
];

// Social presence isn't set up yet, so these are visual placeholders
// (not linked) rather than pointing at accounts that don't exist.
const socialInitials = ["D", "X", "Y", "T"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socialInitials.map((initial) => (
              <span
                key={initial}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-alt text-xs font-semibold text-muted"
              >
                {initial}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
