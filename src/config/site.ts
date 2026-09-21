// Brand name is not finalized yet — change it here and it updates everywhere.
export const siteConfig = {
  name: "YourMarketplace",
  shortName: "YM",
  tagline: "Buy and sell Roblox games from verified creators.",
  description:
    "Discover, buy, and sell established Roblox games and experiences. Verified sellers, escrow-protected transactions, full ownership transfer.",
  nav: [
    { label: "Browse", href: "/browse" },
    { label: "Sell Your Game", href: "/sell" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  resourcesNav: [
    { label: "Help Center", href: "/resources" },
    { label: "Seller Guide", href: "/resources#seller-guide" },
    { label: "Buyer Protection", href: "/resources#buyer-protection" },
    { label: "Blog", href: "/resources#blog" },
  ],
} as const;
