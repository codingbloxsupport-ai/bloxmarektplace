import Link from "next/link";
import { Boxes } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
        <Boxes className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        {siteConfig.name}
      </span>
    </Link>
  );
}
