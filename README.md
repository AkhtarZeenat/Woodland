# WoodLand — Next.js (TypeScript + Tailwind) project

Your original static site, converted into a **Next.js 14 (App Router) + TypeScript + Tailwind CSS** project, with a real product catalogue, individual product pages, a working database-backed contact form, and your logo in the nav.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

The contact form needs a database connected to actually save submissions — see **Contact form database** below. Everything else works without any setup.

## Deploying to Vercel

1. Push this project to a GitHub repo (or use `vercel` CLI directly from this folder).
2. Import it in Vercel → it'll auto-detect Next.js, no config needed.
3. Before the contact form will work in production, follow **Contact form database** below.

## What maps to what

| Page                | Route              |
|----------------------|--------------------|
| Home                 | `/`                |
| About / Our Story    | `/our-story`       |
| Collections (Doors)  | `/collections`     |
| Door Locks           | `/door-locks`      |
| Gallery              | `/gallery`         |
| Contact              | `/contact`         |
| **Product detail**   | `/products/[slug]` — e.g. `/products/zf-6813`. **Not in the nav** — only reachable by clicking a product card on `/collections` or the homepage's "Best-Selling Doors" section. |

## Product catalogue (new)

- **`lib/products.ts`** — the full product database: 64 unique doors, generated from the `Door_Specs.xlsx` supplier packing list you uploaded (item code, material, size, net weight, and the 5 standard features, deduplicated from ~75 line items down to 64 unique codes).
- **`public/products/`** — one photo per product, pulled from the images embedded in that same spreadsheet, resized and compressed (the originals were ~28MB total; these are ~2MB total).
- **`/collections`** now renders all 64 real products instead of the original 9 placeholders, with the same PET/PPH/CCP filter pills as before.
- **`/products/[slug]`** — a new page per product: photo, full specs (size, weight, material, category), the 5 key features, a "Request a Quote" button, and 3 related products from the same material category. Statically generated at build time (`generateStaticParams`), so all 64 pages are fast and pre-rendered.

**Heads-up on the photos:** the images in the spreadsheet are the supplier's own catalogue photos — some are clean product shots, but a number of them are phone photos of a printed catalogue page (desk, other papers, etc. visible in the background). They're real and usable for an internal client review, but I'd swap in proper product photography before this goes live publicly. Everything is driven from `lib/products.ts` / `public/products/`, so replacing a photo later is just replacing that one file — no code changes needed.

## Logo (new)

- **`public/logo-icon.png`** — the mark from your logo (the root/grain icon), cropped and trimmed from the file you sent, transparent background.
- **`public/logo-full.png`** — the full vertical lockup (icon + "WOOD LAND" wordmark), not currently used in the nav but available if you want it somewhere (e.g. footer, a splash/loading screen).
- The nav (`components/Nav.tsx`) now shows the icon next to the existing "WoodLand" text wordmark — same nav pill, same links, same layout as before, just with your mark added. Sizing lives in `.logo img` in `app/globals.css` if you want it bigger/smaller.

## Contact form database (new)

The form at `/contact` now actually saves submissions, via `POST /api/contact` → **Vercel Postgres**.

**One-time setup, in the Vercel dashboard:**
1. Open your project → **Storage** tab → **Create Database** → **Postgres**.
2. Connect it to this project (Vercel does this automatically and adds the `POSTGRES_URL` etc. environment variables for you — no manual `.env` editing needed).
3. Still in the Storage tab, open your new database → **Query** tab, paste in the contents of **`scripts/schema.sql`**, and run it once. This creates the `contact_submissions` table.
4. Redeploy (or it'll pick up the env vars on the next deploy automatically).

That's it — every quote request submitted on `/contact` will now be a row in `contact_submissions` (name, contact info, interest, message, timestamp). You can view/export them anytime from the same Query tab, or connect any Postgres client (e.g. TablePlus, pgAdmin) using the connection string Vercel gives you.

**Local development:** run `vercel env pull .env.local` (with the Vercel CLI, once the project is linked) to pull the same `POSTGRES_URL` down to your machine, so the form works in `npm run dev` too. Without it, the form will show a friendly error instead of crashing.

## Styling

- **`app/globals.css`** — Tailwind directives + the site-wide design tokens/nav/footer/buttons/loader CSS.
- **Each page has its own CSS file** next to it (e.g. `app/collections/collections.css`, `app/products/products.css`) — plain global CSS (not CSS Modules), since `main.js` selects elements by these exact class names.

## Shared components (`/components`)

- `Nav.tsx` — floating nav bar + mobile menu, now with the logo icon. `active` prop is optional (product pages pass none, so nothing in the nav highlights).
- `Footer.tsx` — shared footer.
- `Loader.tsx` — preloader + custom cursor markup, plus the fail-safe inline script.
- `ContactForm.tsx` — the quote-request form; submits to `/api/contact` with proper loading/success/error states.
- `VendorScripts.tsx` — loads GSAP/ScrollTrigger/Lenis and signals `main.js` once they're actually ready (see below).

## Scripts & animation — reliability fixes

A few rounds of real-world testing surfaced some timing bugs, all fixed in `public/main.js`:

- **Preloader could hang forever**: it used to wait solely on the browser's `load` event; now it also runs immediately if the doc's already loaded, and has a safety timeout either way.
- **GSAP race condition**: `main.js` no longer assumes GSAP has already loaded by the time it runs — `VendorScripts.tsx` dispatches a `vendor-scripts:ready` event once it actually has, and `main.js` waits for that (plus a short poll as a last-resort fallback).
- **Back/forward cache (bfcache)**: if you navigate away from the homepage before its door-opening intro finishes and then hit the browser Back button, the browser can restore the frozen mid-animation frame without re-running any scripts. `main.js` now listens for `pageshow` with `event.persisted` and forces everything to its final visible state when that happens.
- **Door-leaf seam**: the two door-opening image halves used `width:50%`, which could leave a 1px rounding gap at certain screen widths/zoom levels. Now uses `flex` distribution + a 1px overlap so it can't happen.

Duplicate inline `<script>` blocks that used to live at the bottom of the homepage and collections page were also removed — that logic now lives only in `main.js`, since raw inline scripts aren't guaranteed to execute reliably from a Next.js Server Component.

## Known items carried over unchanged

- A few `<img>` tags on Home/About (the ones *not* sourced from the spreadsheet) still point to local Windows paths (e.g. `c:\Users\Zeenat\Downloads\...avif`) exactly as in the original HTML — swap these for real paths under `/public` whenever you're ready.
- `gallery.html`'s footer originally omitted the "Showroom" link that other pages have — preserved as-is (`Footer.tsx`'s `showShowroomLink` prop).

## What had to change (framework requirements, not design)

- `class` → `className`, `for` → `htmlFor`, inline `style="..."` strings → JS style objects.
- Internal links now point to Next.js routes (`/`, `/collections`, etc.) instead of `.html` files.
- Navigation uses plain `<a href>` (not `<Link>`) so every page does a full load — same animation re-init behavior as the original static site.
- Images are plain `<img>` tags (not `next/image`), so sizing/behavior is unchanged from the original.
