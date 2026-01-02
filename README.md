# Rhino Tribe — One-Page Site (Next.js + Tailwind)

This is a ready-to-deploy project for **Vercel**.

## Quick Start
```bash
npm install
npm run dev
# then open http://localhost:3000
```

## Deploy to Vercel
```bash
npm run build
vercel deploy  # or connect the repo to Vercel
```

## Where to put your real logos
Replace the placeholder SVGs in **/public/logos** with your brand assets (keep the same filenames or update `data/brands.ts`):
- /public/logos/rhino-tribe.svg
- /public/logos/cineq.svg
- /public/logos/data-rhino.svg
- /public/logos/rhino-academy.svg

## Update brand links
Edit **/data/brands.ts** to point to your real domains.

## Colors
- Rhino Tribe dark: `#101820`
- Rhino Tribe blue: `#0078D4`
- Light BG: `#F5F7FA`

## Structure
- **/app** — App Router pages (Next.js 14)
- **/components** — UI components
- **/data** — Brand metadata
- **/public** — Static assets
- **/styles** — Tailwind global styles

## Notes
- This template uses a **geometric rhino watermark** in `/public/rhino-watermark.svg`. Replace if desired.
- Fonts are system defaults via Next.js; add Google Fonts in `layout.tsx` if you want Nova Square.
