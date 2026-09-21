export function formatPrice(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}

export function formatCompact(value: number): string {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return `$${value}`;
}

export function formatVisits(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return `${value}`;
}
