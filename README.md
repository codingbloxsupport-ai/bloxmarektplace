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
- "Sign in with Roblox" via Roblox's OAuth 2.0 + PKCE
- lucide-react icons

## Getting started

1. Have a Postgres database reachable locally (or point `DATABASE_URL` at
   any Postgres instance).
2. Copy `.env.example` to `.env` and fill in `DATABASE_URL`, `SESSION_SECRET`
   (generate with `openssl rand -base64 32`), and `ADMIN_EMAILS`. Roblox
   sign-in is optional locally — leave `ROBLOX_CLIENT_ID`/`_SECRET` unset and
   the "Continue with Roblox" button will just show a friendly 503 instead
   of crashing.
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
4. To enable "Sign in with Roblox": register an OAuth 2.0 app at the
   [Creator Dashboard](https://create.roblox.com/dashboard/creations)
   (requires an ID-verified Roblox account), add both your production and
   local redirect URIs (`https://<your-domain>/api/auth/roblox/callback`
   and `http://localhost:3000/api/auth/roblox/callback`), and set
   `ROBLOX_CLIENT_ID`, `ROBLOX_CLIENT_SECRET`, and `ROBLOX_REDIRECT_URI` as
   environment variables. New OAuth apps start in private mode (capped at
   10 users) until submitted for Roblox's review.

## Project structure

- `src/app` — routes: marketplace home (`/`), browse (`/browse`), game
  detail (`/game/[slug]`), seller profile (`/seller/[id]`), sell form
  (`/sell`), how it works, resources, login/signup, watchlist, and a
  minimal admin review queue (`/admin/listings`).
- `src/app/actions` — Server Actions: `auth.ts` (signup/login/logout),
  `listings.ts` (create listing), `admin.ts` (approve/reject listing).
- `src/app/api/auth/roblox` — Route Handlers for the Roblox OAuth 2.0 +
  PKCE flow: `route.ts` starts it (redirects to Roblox), `callback/route.ts`
  completes it (exchanges the code, reads the user's identity, creates or
  links a `User` row).
- `src/lib` — `db.ts` (Prisma client), `session.ts`/`dal.ts` (auth session
  + data access layer), `password.ts`, `pkce.ts`/`roblox-oauth.ts` (Roblox
  OAuth helpers), `listings.ts` (DB queries mapped to the UI's
  `GameListing` shape), `admin.ts`, `validation.ts` (zod schemas).
- `src/components` — shared UI (header, filters, game cards, footer).
- `prisma/schema.prisma` — `User` and `Listing` models.
- `src/data/games.ts` — the fixed category taxonomy (listings themselves
  live in the database, not here).
- `src/config/site.ts` — site name, tagline, nav links.

## Status

Real accounts, sessions, and listings are wired end-to-end: sign up, log
in, submit a listing (goes to `PENDING`), an admin account approves it at
`/admin/listings`, and it becomes publicly visible on `/browse` and the
homepage.

"Sign in with Roblox" (OAuth 2.0 + PKCE, `openid profile` scopes) proves
*which* Roblox account someone is and links `robloxUserId`/`robloxUsername`
to their `User` row — that part is real. What it does **not** yet do is
prove they *own a specific experience*: Roblox's OAuth doesn't expose a
simple "list everything this user owns" scope, and the resource-scoped
consent model needed for that (a per-experience picker + the
`/oauth/v1/token/resources` endpoint) needs to be built once the exact
scope name is confirmed against a live registered app. The "Verified
Seller" badge is currently a manual flag an admin could set, deliberately
kept separate from "has a linked Roblox account" so the two aren't
conflated.

Not yet built: payments/escrow processing, per-listing Roblox ownership
verification (see above), and a self-serve admin role system
(`ADMIN_EMAILS` is an allowlist, not a database-backed role).
