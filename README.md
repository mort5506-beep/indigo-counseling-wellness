# Indigo Counseling & Wellness

A luxury website for **Indigo Counseling & Wellness** — Lisa Larkins Morton, LPC, Mount Pleasant / Charleston, SC. Rebuilt from the original site with a premium, calming aesthetic: indigo→violet→lavender gradients, glassmorphism, an animated aurora hero, and cinematic scroll animations.

## 🌐 Live site

**https://mort5506-beep.github.io/indigo-counseling-wellness/**

Hosted on **GitHub Pages** (static export) from the `gh-pages` branch.

### Redeploy after changes

```bash
npm run deploy   # rebuilds and pushes to gh-pages; live again in ~30–60s
```

> **Note:** GitHub Pages serves this at a `/indigo-counseling-wellness/` sub-path, so `next.config.mjs` sets a `basePath`. If you later move to **Vercel** (recommended for the real `indigocounselingandwellness.com` domain), remove the `basePath` line and the site serves from the root with a valid auto SSL certificate.

## Tech stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css` via `@theme`)
- **Framer Motion** (scroll reveals) · **Lenis** (smooth scroll) · **lucide-react** (icons)
- Fonts: **Cormorant Garamond** (display) + **Raleway** (body) via `next/font`

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, approach, philosophy, specialties preview, rates teaser, CTA |
| `/about` | About Lisa — bio, credentials & modalities (EMDR, DBT, Seeking Safety) |
| `/specialties` | Areas of focus — mood, relationships, addiction, personality/self-harm, trauma/PTSD |
| `/rates` | Pricing (free consult · $165 individual · $200 couples/family), sliding scale, insurance, FAQ |
| `/contact` | Contact info, Google Map, and a message form |

## Getting started

```bash
cd indigo-counseling-wellness
npm install
npm run dev        # http://localhost:3000  (this project was previewed on :3030)
npm run build      # production build
npm start          # serve the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel → **New Project** → import the repo. Framework auto-detects as **Next.js**; no env vars needed.
3. Deploy. Then add the custom domain `indigocounselingandwellness.com` under **Project → Settings → Domains**.

> **Domain note:** the original host had an SSL certificate mismatch on `www`. When you move DNS to Vercel, Vercel provisions a valid certificate automatically for both the apex and `www` — that issue goes away.

Alternatively: `npm i -g vercel && vercel` from this directory.

## Customizing content

- **Contact details, nav, hours** → `lib/site.ts` (single source of truth, used everywhere).
- **Copy** lives directly in each page file under `app/`.
- **Therapist photo:** the About hero currently shows an elegant "LM" monogram placeholder. To use a real photo, open `app/about/page.tsx` and replace the monogram block with a Next.js `<Image>` (drop the file in `public/` and point to it). The placeholder is clearly marked.
- **Brand colors / fonts / effects** → design tokens at the top of `app/globals.css`.

## Contact form

The form is **mailto-based** (no backend): on submit it opens the visitor's email app pre-filled to `lisa@indigocounselingandwellness.com`. To upgrade to a true server-side form later (so submissions arrive without the visitor's mail client), wire `components/contact-form.tsx` to a service like **Formspree** or **Resend** — the markup and validation are already in place.

## Accessibility & quality

- Responsive (375 / 768 / 1024 / 1440), no horizontal scroll, ≥44px touch targets, visible focus rings.
- Honors `prefers-reduced-motion` (animations reduce to instant).
- Semantic headings, labeled form fields, aria-labels on icon/click-to-call links.
- Footer includes a **988 Suicide & Crisis Lifeline** note — please keep it.

---

`BUILD_SPEC.md` documents the full design system and content spec used to build the site.
