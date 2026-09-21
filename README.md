# Roblox game marketplace

A marketplace for buying and selling established Roblox games, built with
Next.js (App Router), TypeScript, and Tailwind CSS.

Buyers can browse verified listings with revenue/traffic stats, filter by
category, price, and monthly revenue, and view detailed listing pages.
Sellers can submit a game for listing. Escrow protection and ownership
transfer are presented as the trust model throughout the flow.

The brand name is **not finalized** — it currently shows as a placeholder
(`YourMarketplace`). Change it in one place: `src/config/site.ts`.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` — routes: marketplace home (`/`), game detail
  (`/game/[slug]`), seller profile (`/seller/[id]`), sell form (`/sell`),
  how it works, resources, login/signup, watchlist.
- `src/components` — shared UI (header, filters, game cards, featured
  listing panel, footer).
- `src/data/games.ts` — mock listings and seller data. Swap for a real
  data source (API/database) when the backend is ready.
- `src/config/site.ts` — site name, tagline, nav links.

## Status

The UI is fully built out against the marketplace mockup, using mock data.
There is no backend yet — no real authentication, payments, escrow, or
persisted listings/watchlist. Those are the natural next steps once the
product direction (auth provider, payments processor, data store) is
decided.
