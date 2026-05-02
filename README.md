# Phargos Website

Marketing site for [phargos.ai](https://phargos.ai) — AI-native ERP for distribution operators.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Vercel** hosting
- **Formspree** for lead capture

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed automatically via Vercel on push to `main`.

## Pages Built

- `/` — Homepage (hero, problem, platform overview, industry fit, comparison table, founder quote, proof, CTA)
- `/demo` — Lead capture form (Formspree)
- `/platform/how-it-works` — How Phargos works
- `/industries/hardwood-distribution` — Hardwood distribution industry page
- `/industries/building-products` — Building products stub
- `/platform/integrations` — Integrations stub
- `/about/story` — Founder story (copy needed)
- `/pricing` — Pricing (copy needed)
- `/privacy` — Privacy policy stub
- `/terms` — Terms stub

## Setup Required Before Launch

1. **Formspree** — Create form at formspree.io, replace `REPLACE_WITH_FORMSPREE_ID` in `app/demo/page.tsx`
2. **Plausible** — Create property for phargos.ai, add script to layout
3. **OG Image** — Create 1200x630 og-image.jpg per spec and add to `/public/`
4. **Logo/Wordmark** — Replace text logo with actual Phargos wordmark SVG from Lucius
5. **Hero Visual** — Replace placeholder box with logo mark / visual from Lucius
6. **Social links** — Add LinkedIn and Twitter/X URLs to Footer.tsx
7. **DNS** — Point phargos.ai Cloudflare DNS (grey cloud) to Vercel

## Copy Needed from Felix

- `/about/story` — Full founder narrative
- `/pricing` — Pricing structure (coordinate with Stan)
- `/industries/building-products` — Full industry page
- `/platform/integrations` — Integrations content
- Privacy Policy and Terms of Service
