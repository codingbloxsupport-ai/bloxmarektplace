// A small rotating palette of on-brand gradient pairs assigned to new
// listings automatically (sellers don't pick a color) — matches the blue/
// cyan/emerald/amber accents used elsewhere on the site, deliberately
// excludes purple.
const LISTING_GRADIENTS: [string, string][] = [
  ["#0a5cf5", "#0a2472"],
  ["#17c7fb", "#0b3fc4"],
  ["#10b981", "#065f46"],
  ["#f59e0b", "#92400e"],
];

export function gradientForSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return LISTING_GRADIENTS[hash % LISTING_GRADIENTS.length];
}
