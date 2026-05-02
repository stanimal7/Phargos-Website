# Phargos Website — Deployment Guide

## Repo
https://github.com/stanimal7/Phargos-Website

## Vercel Setup (Stan to do once)

1. Go to https://vercel.com/new
2. Import Git repository: `stanimal7/Phargos-Website`
3. Framework: Next.js (auto-detected)
4. Root directory: `.` (leave as-is)
5. Build command: `npm run build` (default)
6. Deploy — Vercel will auto-deploy on every push to `main`

After first deployment:
- Add custom domain: `phargos.ai`
- Vercel will give you a DNS value (CNAME or A record)

## DNS Setup (Cloudflare)

1. Go to Cloudflare → phargos.ai domain
2. Add the record Vercel provides
3. CRITICAL: Set proxy status to **DNS-only (grey cloud)** — NOT proxied (orange)
4. Add www → phargos.ai redirect in Cloudflare or Vercel

## Pre-Launch Checklist

### Formspree (5 min)
- Go to formspree.io, create account
- Create new form: "Phargos Demo Request"
- Set notification email to: hello@phargos.ai
- Copy the form ID (format: XXXXXXXX)
- In `app/demo/page.tsx`, replace `REPLACE_WITH_FORMSPREE_ID` with your form ID
- Push to main to redeploy

### Plausible Analytics
- Create account at plausible.io
- Add domain: phargos.ai
- Add script to `app/layout.tsx` in `<head>`:
  ```html
  <script defer data-domain="phargos.ai" src="https://plausible.io/js/script.js"></script>
  ```

### Logo / Visual Assets (Lucius)
- Replace text "PHARGOS" wordmark in Navbar.tsx with SVG logo
- Replace hero placeholder box with actual logo mark visual
- Add OG image (1200x630) to `/public/og-image.jpg`
- Add favicon to `/public/favicon.ico` (16x16 + 32x32)

### Copy Needed (Felix)
- `/about/story` — Founder narrative
- `/pricing` — Pricing structure (coordinate with Stan)  
- `/industries/building-products` — Full page
- `/platform/integrations` — Content
- Privacy Policy and Terms of Service

### Google Search Console
- Add property for phargos.ai
- Verify via DNS TXT record (Cloudflare)
- Submit sitemap: https://phargos.ai/sitemap.xml
