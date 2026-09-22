import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-soft-blue text-brand-600">
        <Compass className="h-7 w-7" />
      </span>
      <p className="mt-6 text-sm font-bold uppercase tracking-wide text-brand-600">
        404
      </p>
      <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        This page wandered off
      </h1>
      <p className="mt-2 text-sm text-muted">
        The listing or page you&apos;re looking for doesn&apos;t exist or may
        have been moved.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/browse"
          className="hover-lift flex items-center justify-center gap-1.5 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
        >
          <Compass className="h-4 w-4" />
          Browse Marketplace
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:bg-surface-alt"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
