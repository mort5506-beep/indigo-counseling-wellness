# Indigo Counseling & Wellness — Master Build Spec

> Single source of truth for ALL build agents. Read this fully before writing code.
> Goal: a genuinely high-end ("$10,000"), luxury, calming therapy-practice website.
> Aesthetic pillars: **glassmorphism · indigo→violet→lavender gradients · cinematic scroll
> animations · generous whitespace · elegant serif display type.** Calm, expensive, trustworthy.

---

## 1. Business facts (NEVER change these)

- **Name:** Indigo Counseling & Wellness
- **Tagline:** "an innovative approach to therapy"
- **Therapist:** Lisa Larkins Morton, Licensed Professional Counselor (LPC) / psychotherapist
- **Location:** Mount Pleasant / Charleston, South Carolina
- **Address:** 207 Simmons Street, Mount Pleasant, SC
- **Phone:** 843.367.5452  → tel href `tel:+18433675452`
- **Email:** lisa@indigocounselingandwellness.com
- **Hours note:** Evening & weekend hours available
- **Response note:** "If needed, you will hear back within 48–72 hours."
- **Modalities:** EMDR, DBT (Dialectical Behavior Therapy), Seeking Safety (CBT for PTSD),
  CBT, mindfulness / holistic wellness, strengths-based & collaborative.

### Rates (exact)
- Initial Consultation — 15 minutes — **Complimentary**
- Individual Counseling — 60 minutes — **$165**
- Couples Counseling — 60 minutes — **$200**
- Family Session — 60 minutes — **$200**
- Sliding-scale fees available on an as-needed basis; payment plans available.
- Cash, checks, and all major credit cards accepted.
- Does **not** accept insurance, but provides documentation for out-of-network reimbursement.

### Specialties (exact, grouped)
1. **Mood Disorders** — Depression · Anxiety · Bipolar Disorder
2. **Relationship Issues** — Communication · Conflict · Separation & Divorce · Infidelity · Infertility · Family Planning
3. **Addiction & Substance Use** — Substance Use/Abuse · Alcohol Use/Abuse · Dual Diagnosis
4. **Personality & Self-Harm** — Borderline Personality Disorder · Self-Harming behaviors
5. **Trauma & PTSD** — Trauma · Abuse History · PTSD

---

## 2. Tech stack (fixed)

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme` tokens, `@tailwindcss/postcss`)
- **framer-motion** (`motion`) for animations
- **lenis** for smooth scroll (`'use client'` provider)
- **lucide-react** for icons (NO emoji icons, ever)
- `next/font/google` for fonts. Deploy target: **Vercel**.

---

## 3. Design tokens (define in globals.css `@theme` + `:root`)

### Color palette
```
--cream:        #FBF9FF   /* page background, warm lavender-white */
--surface:      #FFFFFF
--ink:          #211C35   /* primary text, near-black plum */
--ink-soft:     #564F6B   /* secondary text */
--ink-faint:    #8B85A0   /* muted/captions */

--indigo-950:   #1B1140
--indigo-900:   #2A1065
--indigo-800:   #3B0764
--violet-700:   #6D28D9
--violet-600:   #7C3AED   /* primary */
--violet-500:   #8B5CF6
--lavender-400: #A78BFA
--lavender-300: #C4B5FD
--lavender-100: #EDE9FE
--lavender-50:  #F5F3FF

--sage-700:     #047857
--sage-600:     #0E9F6E   /* accent / wellness green (CTA secondary, success) */
--sage-500:     #10B981

--champagne:    #C9A86A   /* LUXE detail only: eyebrow text, hairline dividers, tiny accents */
--champagne-soft:#E7D8B8

--border:       #ECE7F7
--ring:         #7C3AED
```

### Signature gradients
- **Brand gradient (text/buttons):** `linear-gradient(120deg,#3B0764 0%,#7C3AED 45%,#A78BFA 100%)`
- **Aurora hero mesh:** layered radial blobs of violet-600, lavender-300, sage-500 (low opacity) over indigo-950 base for dark hero, OR over cream for light sections.
- **Dark CTA band:** `linear-gradient(135deg,#1B1140,#3B0764 60%,#6D28D9)`

### Typography
- **Display / headings:** `Cormorant Garamond` (weights 500/600/700) — hero, section titles, prices, big numbers. High-contrast elegant serif = luxury. Use ONLY at large sizes (≥28px).
- **Body / UI / nav / buttons / small text:** `Raleway` (300/400/500/600/700).
- **Eyebrow label style:** Raleway, uppercase, `letter-spacing:.22em`, `font-size:.75rem`, color `--champagne` (or violet-600 on dark).
- Body base 16px (≥16px on mobile), line-height 1.7, max body measure ~68ch.
- Headings: tight line-height (1.05–1.15), `letter-spacing:-0.01em`.

### Effects
- **Glass:** `background: rgba(255,255,255,0.55); backdrop-filter: blur(20px) saturate(140%); border:1px solid rgba(255,255,255,0.6); box-shadow:0 10px 40px -12px rgba(43,16,101,0.18)`. On dark sections use `rgba(255,255,255,0.08)` + `border rgba(255,255,255,0.14)`.
- **Card radius:** 20–24px. Buttons: pill (radius 9999) or 14px.
- **Soft shadow scale:** sm `0 4px 16px -8px rgba(43,16,101,.18)`; md `0 14px 44px -16px rgba(43,16,101,.22)`; lg `0 30px 80px -24px rgba(43,16,101,.30)`.
- Champagne hairline divider: `1px` line with `linear-gradient(90deg,transparent,#C9A86A55,transparent)`.

### Spacing & layout
- Container max-width ~`1200px` (`mx-auto px-6 md:px-8`). Section vertical padding `py-24 md:py-32`.
- 4/8px spacing rhythm. Mobile-first. Breakpoints 375 / 768 / 1024 / 1440.

---

## 4. Animation principles

- **Lenis** smooth scroll site-wide (lerp ~0.1). Provider wraps app body.
- **Reveal on scroll:** opacity 0→1, translateY 24→0, `ease:[0.22,1,0.36,1]`, duration .7s, `whileInView` with `viewport={{ once:true, margin:"-80px" }}`. Stagger children 70ms.
- **Hero:** slowly drifting aurora blobs (12–22s loops), subtle gradient-text shimmer on the headline, staggered entrance of eyebrow→headline→subhead→buttons.
- **Glass cards:** hover lift `translateY(-6px)` + shadow-lg, 220ms ease-out; subtle border-glow.
- **Buttons:** hover sheen sweep; active `scale(.97)`.
- **Navbar:** transparent at top; on scroll past 24px, becomes glass (blur + subtle border + shadow) with a smooth transition.
- **Numbers/prices:** can use a count-up or just reveal.
- **ACCESSIBILITY:** wrap all motion so `@media (prefers-reduced-motion: reduce)` disables transforms/loops (content appears instantly, opacity only). Framer reveals: gate with a `useReducedMotion()` check OR rely on CSS `@media` to neutralize. Every page must be fully readable with motion off.

---

## 5. Shared component contracts (FOUNDATION builds these; pages CONSUME them)

Build under `components/` and `lib/`. Exact names & props below — pages depend on this API.

- **`lib/site.ts`** — exports `site` object:
  ```ts
  export const site = {
    name: "Indigo Counseling & Wellness",
    tagline: "an innovative approach to therapy",
    therapist: "Lisa Larkins Morton, LPC",
    phone: "843.367.5452",
    phoneHref: "tel:+18433675452",
    email: "lisa@indigocounselingandwellness.com",
    emailHref: "mailto:lisa@indigocounselingandwellness.com",
    address: "207 Simmons Street, Mount Pleasant, SC",
    mapQuery: "207 Simmons Street, Mount Pleasant, SC",
    hours: "Evening & weekend hours available",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Specialties", href: "/specialties" },
      { label: "Rates", href: "/rates" },
      { label: "Contact", href: "/contact" },
    ],
  };
  ```
- **`components/smooth-scroll.tsx`** (`'use client'`) — Lenis provider wrapping `{children}`.
- **`components/aurora-background.tsx`** — props `{ variant?: 'dark' | 'light'; className?: string }`. Animated gradient-mesh blobs (CSS keyframes or framer). `dark` = over indigo base (for hero/CTA), `light` = faint over cream (for body sections). Must be `pointer-events-none` and behind content. Respect reduced-motion (freeze blobs).
- **`components/reveal.tsx`** (`'use client'`) — props `{ children; delay?: number; y?: number; className?: string; as?: keyof JSX.IntrinsicElements }`. Framer `whileInView` reveal per §4. Provide also a `RevealStagger` (or accept that children use their own delay) — minimum: a `Reveal` that accepts `delay`.
- **`components/glass-card.tsx`** — props `{ children; className?; hover?: boolean; tone?: 'light'|'dark' }`. Renders glass surface per §3. `hover` adds lift interaction.
- **`components/gradient-button.tsx`** — props `{ href?: string; onClick?; children; variant?: 'primary'|'outline'|'ghost'; size?: 'md'|'lg'; className?; type? }`. When `href` provided, render Next `<Link>`; else `<button>`. `primary` = brand gradient fill, white text, sheen hover. `outline` = violet border + violet text on transparent/glass. Pill shaped. Always `cursor-pointer`, visible focus ring, min height 44px.
- **`components/section-heading.tsx`** — props `{ eyebrow?: string; title: string; subtitle?: string; align?: 'left'|'center'; tone?: 'light'|'dark'; className? }`. Eyebrow style per §3, title in Cormorant, subtitle in Raleway `--ink-soft`.
- **`components/navbar.tsx`** (`'use client'`) — sticky top, scroll-aware glass (per §4), wordmark left (links home), nav links from `site.nav` with active state (use `usePathname`), a primary "Book free consult" `GradientButton` → `/contact` on the right. Mobile: hamburger → slide/fade glass overlay menu with the nav links + CTA + phone. Fully keyboard accessible, closes on route change/Esc. min 44px targets.
- **`components/footer.tsx`** — dark indigo-gradient footer: wordmark + tagline, quick nav, contact block (address, click-to-call phone, mailto email, hours), champagne hairline, bottom row `© {year} Indigo Counseling & Wellness · Mount Pleasant, SC`, and a gentle crisis line: **"In crisis? Call or text 988 (Suicide & Crisis Lifeline), or dial 911 in an emergency."**

`app/layout.tsx`: load fonts via `next/font/google` (Cormorant_Garamond → `--font-display`, Raleway → `--font-sans`), set `<html>`/body classes, global metadata, wrap children in `SmoothScroll`, render `Navbar` + `{children}` + `Footer`. Add `scroll-smooth` fallback off (Lenis handles). Set page background `--cream`.

---

## 6. Page content (ELEVATED copy — use this exact copy; keep all facts)

### HOME — `app/page.tsx`
**Hero (dark aurora):**
- Eyebrow: `COUNSELING & WELLNESS · MOUNT PLEASANT, SC`
- Headline (gradient/shimmer): `Therapy that meets you with compassion — never judgment.`
- Subhead: `An innovative, mind-body approach to healing. Together we'll explore what's creating dissonance in your life — at a pace that feels safe — guided by a licensed therapist who believes, deeply, that it can get better.`
- Buttons: `Book a free consultation` → `/contact` (primary) · `Explore specialties` → `/specialties` (outline)
- Trust row (small, with check/sparkle icons): `Licensed Professional Counselor` · `EMDR & DBT trained` · `Evening & weekend hours`

**Section — A safe place to be fully yourself (light):**
- Body: `As your therapist, you can trust that you will never be judged. You'll be met with compassion and empathy in a safe, comfortable space — free to explore the issues creating dissonance in your life, at a pace that feels right for you. And if you're struggling, hold on to this: it can get better. When you feel challenged or unhappy, you hold the power to make the changes that lead to greater fulfillment and happiness. I am here to help you.`

**Section — Our approach / mind-body (light):**
- Eyebrow: `OUR APPROACH` · Title: `A mind-body perspective on wellness`
- Subtitle: `At Indigo, we believe healing happens when mind and body move together. We bring unique, evidence-based strategies — and a willingness to think outside the box — to move you intentionally toward the life you want.`
- 3 pillar glass cards (icon + title + blurb):
  - `Compassion-first` — `A safe, judgment-free space where you set the pace.` (icon: HeartHandshake)
  - `Mind-body wellness` — `Holistic strategies that treat the whole person, not just a symptom.` (icon: Sparkles / Leaf)
  - `Collaborative & strengths-based` — `We build on your strengths so trust and self-efficacy grow together.` (icon: Users / Handshake)

**Section — Philosophy (can be glass panel over soft aurora):**
- Eyebrow: `PHILOSOPHY` · Title: `Let's start this journey together`
- Body: `My counseling philosophy is a simple one: I fully believe in the power and the process of therapy. I've seen it work — radically changing lives and restoring relationships — and I'm honored when people allow me into their world to offer knowledge, understanding, and guidance. My work is collaborative and strengths-based, and I find the most effective therapy blends cognitive behavioral therapy with holistic practices like mindfulness, all centered on your overall wellness. I offer evening and weekend hours to fit real life. Take the first step — you deserve it.`
- Signature line (Cormorant italic): `— Lisa Larkins Morton, LPC`

**Section — Specialties preview:** heading `How I can help`, 5 category chips/cards (names from §1) each linking to `/specialties`; button `View all specialties` → `/specialties`.

**Section — Rates teaser (glass):** `Therapy is an investment in yourself.` short line + `Your first 15-minute consultation is complimentary.` Buttons → `/rates` (outline "See rates") and `/contact` (primary "Book free consult").

**Final CTA band (dark gradient + aurora):** Title `Take the first step`, body `Your first 15-minute consultation is complimentary. Let's talk about where you are — and where you'd like to be.`, primary button `Schedule your free consult` → `/contact`, secondary click-to-call phone.

### ABOUT — `app/about/page.tsx`
- Hero eyebrow `ABOUT` · Title `Meet Lisa Larkins Morton` · Subtitle `Licensed Professional Counselor · Charleston, South Carolina`. Optional portrait placeholder area (graceful: a tasteful gradient/initial monogram "LM" in a glass frame — NO fake stock face; use an elegant monogram or soft aurora portrait placeholder labeled for the client to replace).
- Para (professional): `Lisa Larkins Morton has spent several years in the addiction field, focusing on the relationship between mental health and substance use disorders. She is trained in Seeking Safety — a cognitive-behavioral therapy for PTSD — and in EMDR, and she draws on Dialectical Behavior Therapy (DBT), which blends behavioral science with acceptance and mindfulness, throughout her practice.`
- Para (interests): `Her areas of interest include depression, anxiety, bipolar disorder, PTSD, and substance use, as well as couples and relationships and women's specific concerns such as reproductive and fertility issues.`
- Para (approach): `Lisa's approach to counseling is both collaborative and strengths-based, allowing each person to build trust and self-efficacy through the therapeutic relationship. She is known for a natural ability to put people at ease — creating space to explore what's causing distress at a comfortable pace, while still gently challenging and encouraging growth.`
- Para (personal, first person): `I'm a licensed psychotherapist based in Charleston, South Carolina, specializing in trauma and women's issues. With a deeply relational, compassionate approach, I help clients navigate complex emotional experiences, build resilience, and reconnect with their authentic selves. In both my personal and professional life, I value presence, connection, and meaningful growth. As a self-employed practitioner, I've intentionally structured my work to prioritize family life — particularly being fully present for my young son — and that lived commitment to balance informs my work with clients, many of whom are seeking the same. Outside of my practice, I'm an avid reader and lifelong learner with a passion for interior design, gardening, and the outdoors. Whether hiking in the mountains, boating on the lake, or tending my rose bushes and vegetable garden, I bring the same mindfulness and joy to everyday life that I strive to help my clients cultivate in theirs.`
- Credentials/modalities glass cards (icon + label + 1-line): EMDR · DBT · Seeking Safety (CBT for PTSD) · Mindfulness & holistic wellness · Strengths-based & collaborative.
- CTA → `/contact`.

### SPECIALTIES — `app/specialties/page.tsx`
- Hero eyebrow `SPECIALTIES` · Title `Areas of focus` · Subtitle `Wherever you're starting from, there is a path forward. These are the areas I most often walk through with clients.`
- 5 category glass cards (icon + category title + item list as styled pills/list) per §1 grouping. Suggested Lucide icons: Mood→`CloudSun` or `Brain`; Relationships→`HeartHandshake` or `Users`; Addiction→`ShieldCheck`; Personality/Self-harm→`HandHeart` or `ShieldAlert`; Trauma/PTSD→`Sprout` or `Anchor`. Pick consistent stroke width.
- Hover lift animations; staggered reveal.
- CTA band → `/contact` (`Not sure where to start? Book a free consultation.`)

### RATES — `app/rates/page.tsx`
- Hero eyebrow `RATES` · Title `Simple, transparent pricing` · Subtitle `Therapy is an investment — and at Indigo we work to make it possible for as many people as we can.`
- Pricing cards grid (4). Highlight the free consult as the lead/featured card with a champagne ribbon "Start here". Prices in Cormorant large. Each: name · duration · price · 1-line.
- Info glass cards (3): Sliding scale, Payment methods, Insurance & reimbursement — copy from §1, warm tone (e.g. Sliding scale: `On an as-needed basis, we offer sliding-scale fees based on your ability to pay, along with payment plans. If finances are a barrier to the support you need, let's talk.` / Insurance: `Indigo does not accept insurance, but we provide documentation for every session so you can file for reimbursement from an out-of-network provider.` / Payment: `Cash, checks, and all major credit cards are accepted.`)
- Short FAQ (3, use accessible accordion or simple cards): "Do you accept insurance?", "What is the sliding scale?", "How do I get started?"
- CTA → `/contact`.

### CONTACT — `app/contact/page.tsx`
- Hero eyebrow `CONTACT` · Title `Take the first step` · Subtitle `Reach out for your complimentary 15-minute consultation. If needed, you will hear back within 48–72 hours.`
- Two-column: LEFT = contact info glass cards (Address, Phone click-to-call, Email mailto, Hours) + Google Map embed iframe using `https://maps.google.com/maps?q=<encoded mapQuery>&output=embed` (no API key, lazy-loaded, rounded, with title). RIGHT = contact form.
- **Form (mailto-based):** fields Name*, Email*, Subject*, Message*, optional checkbox "Email me occasional updates". Client component: validate required fields + email format on submit; on valid submit, build a `mailto:lisa@...` with subject = the Subject field and body = name/email/message (+ updates pref), then `window.location.href`. Show inline field errors (below field, red, aria), and a success/confirmation note: `Thank you for reaching out — your email app should open with your message ready to send. If needed, you'll hear back within 48–72 hours.` Buttons disabled→loading style ok. Labels visible (not placeholder-only). Inputs ≥44px, proper input types (email/text), autocomplete.
- CTA/reassurance footer line.

---

## 7. Global quality bar (Pre-delivery checklist — every page)

- No emoji as icons (Lucide only). Consistent icon stroke (1.5–2). 
- Color contrast ≥4.5:1 for body text in BOTH light sections and on dark/glass (verify white-ish text on dark indigo, and ink text on glass). Champagne text only used large/decorative or on dark — verify contrast where it carries meaning.
- All interactive elements: `cursor-pointer`, visible focus ring, ≥44px touch target, hover transition 150–300ms.
- Responsive at 375 / 768 / 1024 / 1440, no horizontal scroll, `min-h-dvh` not `100vh` where full-height.
- `prefers-reduced-motion`: all looping/scroll animations reduce to instant/opacity.
- Semantic HTML, sequential headings (one h1/page), alt text / aria-labels on icon-only buttons, labelled form fields.
- Per-page SEO `metadata` (title + description). Favicon ok to leave default.
- Images: none required; use gradients/CSS art + monogram placeholders. If any placeholder for a future photo, make it elegant and clearly swappable.

## 8. Definition of done (foundation)
`npm run build` succeeds (or `npm run dev` compiles with no errors), tokens + all shared components exist with the exact APIs in §5, Navbar+Footer render, home route shows hero. Commit.
