import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2">
      <span className="relative h-8 w-8 shrink-0">
        <Image
          src="/logo-icon.webp"
          alt=""
          fill
          priority
          className="object-contain"
          sizes="32px"
        />
      </span>
      <span className="text-lg font-bold tracking-tight text-ink">
        {siteConfig.name}
      </span>
    </Link>
  );
}
