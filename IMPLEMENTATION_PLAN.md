# Praxis Recruitment — Implementation Plan

**Last Updated:** March 9, 2026  
**Current Status:** Phase 3 complete — Phase 4 next

---

## Phases Summary

| Phase | Focus | Status |
|-------|-------|--------|
| 1 | Setup & shell | ✅ Complete |
| 2 | Static marketing pages | ✅ Complete |
| 3 | Sanity CMS + dynamic content | ✅ Complete |
| 4 | Contact form + Testimonials | ⏳ Next |
| 5 | SEO + Deployment | 📅 Planned |

---

## Phase 1 — Setup & Shell ✅

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Global layout (`app/layout.tsx`) with Montserrat font
- Header (sticky, responsive, mobile hamburger)
- Footer (4-column layout)
- Route structure: `/`, `/about`, `/jobs`, `/jobs/[slug]`, `/contact`, `/privacy`
- Brand colours configured in `tailwind.config.ts`

---

## Phase 2 — Static Marketing ✅

- Hero section with headline, sublines, 2 CTAs
- TrustStrip (stats + client logos)
- Services ("What We Do") section
- WhyPraxis section (founders + messages)
- RecentJobs preview (3 cards)
- Pricing section
- FAQ accordion
- FinalCTA section
- AnimatedCounter, AnimatedSection components
- Error boundaries (`error.tsx`)

---

## Phase 3 — Sanity CMS + Dynamic Content ✅

### CMS Setup
- Sanity Studio standalone project at `c:\HR\sanity\`
- Runs on `http://localhost:3333`
- All schemas defined with English-only fields

### Schemas Built
- `job` — job postings with rich text fields
- `siteSettings` — hero, footer, toggles for sections
- `statistic` — stats with per-item visibility toggle
- `clientLogo` — logos with optional website link
- `service` — what we do cards
- `whyPraxis` — founders and messages
- `pricing` — fee, lists
- `faq` — question/answer pairs
- `aboutPage` — full about page (founders with photos, philosophy)
- `processPage` — numbered steps with bullet points

### Frontend Wiring
- `HomepageContentContext` — distributes all Sanity data to client components
- `lib/sanity.ts` — all fetch functions with `safeFetch` wrapper
- `lib/sanity.queries.ts` — all GROQ queries
- All homepage sections connected to Sanity with graceful fallbacks

### Pages Connected to CMS
- Home (`/`) — all sections dynamic
- Jobs (`/jobs`) — full job listing from Sanity
- Job Detail (`/jobs/[slug]`) — dynamic with fallback fetch by `_id`
- About (`/about`) — fully CMS-driven
- Process (`/process`) — fully CMS-driven

### Language Decision
- Lithuanian version removed
- Single language: English
- `LanguageSwitcher` component deleted
- `LanguageContext` fixed to `locale: 'en'`
- All Sanity `localizedString` fields now show English field only

### UX / Visibility Toggles (all in Site Settings)
- `showStatistics` — hide/show entire stats strip
- `showClientLogos` — hide/show client logos strip
- `showRegistrationNumber` — hide/show reg number in footer
- Per-stat `isVisible` toggle on each Statistic document

### Bug Fixes
- `'use client'` added to all components using hooks
- Portable Text serialized as JSON strings to avoid RSC errors
- Fallbacks removed from Services/Stats to prevent stale hardcoded data showing

---

## Phase 4 — Contact Form + Testimonials ⏳

### Contact Page
- [ ] Form fields: name (required), email (required), company (optional), message (required)
- [ ] Validation with React Hook Form + Zod
- [ ] API route `app/api/contact/route.ts`
- [ ] Email delivery via Resend to `hello@praxisrecruitment.eu`
- [ ] Success and error state UI
- [ ] Spam protection (honeypot field)

### Testimonials
- [ ] `testimonial` Sanity schema: quote, author, role, company, optional avatar
- [ ] Testimonials component on homepage (grid or carousel)
- [ ] Section toggle in Site Settings

---

## Phase 5 — SEO + Deployment 📅

### Deployment
- [ ] Create GitHub repository
- [ ] Push project to GitHub
- [ ] Connect repo to Vercel
- [ ] Configure environment variables in Vercel:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_SANITY_API_VERSION`
  - `RESEND_API_KEY`
  - `CONTACT_EMAIL`
- [ ] Connect Hostinger domain via DNS (A + CNAME records)
- [ ] Verify SSL

### SEO
- [ ] `generateMetadata` on all pages
- [ ] Open Graph images (1200×630)
- [ ] `sitemap.xml` generation
- [ ] `robots.txt`
- [ ] Google Search Console submission

### Performance
- [ ] Lighthouse audit (target: Performance > 90, SEO > 95)
- [ ] Image optimisation review
- [ ] Check Sanity CDN usage for images

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 15 (App Router) | |
| Language | TypeScript | |
| Styling | Tailwind CSS | Custom colours + Montserrat font |
| CMS | Sanity v3 | Standalone Studio |
| Font | Montserrat | Via `next/font/google` |
| Hosting | Vercel | Phase 5 |
| Email | Resend | Phase 4 |
| Domain | Hostinger | DNS → Vercel |

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `app/(site)/layout.tsx` | Fetches all Sanity data, passes to context |
| `lib/sanity.ts` | All fetch functions |
| `lib/sanity.queries.ts` | All GROQ queries |
| `types/sanity.ts` | All TypeScript interfaces |
| `contexts/HomepageContentContext.tsx` | Client-side data distribution |
| `contexts/LanguageContext.tsx` | Fixed to `en` locale |
| `dictionaries/en.json` | Fallback UI strings |
| `sanity/schemas/index.ts` | Schema registry |
| `tailwind.config.ts` | Brand tokens |
| `app/globals.css` | CSS variables + base styles |
