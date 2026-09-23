# BloxMarket

A marketplace for buying and selling established Roblox games, built with
Next.js (App Router), TypeScript, Tailwind CSS, and Postgres via Prisma.

Buyers can browse verified listings with revenue/traffic stats, filter by
category, price, and monthly revenue, and view detailed listing pages.
Sellers create a real account, submit a game for listing, and it goes into
review before appearing publicly. Escrow protection and ownership transfer
are presented as the trust model throughout the flow.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Postgres + Prisma ORM 7 (`@prisma/adapter-pg`)
- Session auth: bcrypt password hashing, signed JWT session cookies (`jose`)
- lucide-react icons

## Getting started

1. Have a Postgres database reachable locally (or point `DATABASE_URL` at
   any Postgres instance).
2. Copy `.env.example` to `.env` and fill in `DATABASE_URL`, `SESSION_SECRET`
   (generate with `openssl rand -base64 32`), and `ADMIN_EMAILS`.
3. Install dependencies and run migrations:

   ```bash
   npm install
   npx prisma migrate dev
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Deploying (Railway)

1. Add a Postgres plugin/addon to the Railway project and copy its
   connection string into the web service's `DATABASE_URL` environment
   variable.
2. Set `SESSION_SECRET` (a real random value — do not reuse the local dev
   one) and `ADMIN_EMAILS` as environment variables on the service.
3. `npm run build` runs `prisma generate` automatically, and `npm run start`
   runs `prisma migrate deploy` before starting the server, so schema
   changes apply automatically on each deploy.

## Project structure

- `src/app` — routes: marketplace home (`/`), browse (`/browse`), game
  detail (`/game/[slug]`), seller profile (`/seller/[id]`), sell form
  (`/sell`), how it works, resources, login/signup, watchlist, and a
  minimal admin review queue (`/admin/listings`).
- `src/app/actions` — Server Actions: `auth.ts` (signup/login/logout),
  `listings.ts` (create listing), `admin.ts` (approve/reject listing).
- `src/lib` — `db.ts` (Prisma client), `session.ts`/`dal.ts` (auth session
  + data access layer), `password.ts`, `listings.ts` (DB queries mapped to
  the UI's `GameListing` shape), `admin.ts`, `validation.ts` (zod schemas).
- `src/components` — shared UI (header, filters, game cards, footer).
- `prisma/schema.prisma` — `User` and `Listing` models.
- `src/data/games.ts` — the fixed category taxonomy (listings themselves
  live in the database, not here).
- `src/config/site.ts` — site name, tagline, nav links.

## Status

Real accounts, sessions, and listings are wired end-to-end: sign up, log
in, submit a listing (goes to `PENDING`), an admin account approves it at
`/admin/listings`, and it becomes publicly visible on `/browse` and the
homepage. Not yet built: payments/escrow processing, real Roblox ownership
verification for sellers (see the "Verified Seller" badge — currently just
a manual flag an admin could set), and a self-serve admin role system
(`ADMIN_EMAILS` is an allowlist, not a database-backed role).
