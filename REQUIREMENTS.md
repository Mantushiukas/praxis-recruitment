# Praxis Recruitment — Requirements Document

**Project:** Praxis Recruitment Website  
**Version:** 2.0  
**Last Updated:** March 9, 2026  
**Status:** Phase 3 complete — Phase 4 in progress

---

## 1. Project Overview

### 1.1 Purpose
A professional recruitment agency website for Praxis Recruitment that combines:
- **Service-led marketing** — showcase recruitment services, process, and trust signals
- **Job board** — list open positions and connect candidates with opportunities
- **CMS-driven content** — all text editable by non-technical staff via Sanity Studio

### 1.2 Target Audience
- **Primary:** Companies seeking recruitment services (B2B)
- **Secondary:** Job seekers in Digital Marketing and IT
- **Tertiary:** Search engines and referral sources

### 1.3 Language
- **Single language: English only**
- Lithuanian version removed (February 2026 decision)
- All Sanity fields are plain English (no lt/en split)

### 1.4 Brand
- **Font:** Montserrat — weights: Ultra Light (200), Light (300), Regular (400), Semi Bold (600), Bold (700)
- **Primary colour:** `#36323d` (Dark Grey)
- **Accent colour:** `#a885ed` (Purple)
- **White:** `#ffffff`

---

## 2. Pages

### 2.1 Home Page (`/`) ✅
- Hero section — headline, sublines, 2 CTAs
- Stats strip — animated counters (toggleable per stat + globally via CMS)
- Client logos strip (toggleable globally via CMS)
- Services section — "What We Do" cards
- Why Praxis — founders and key messages
- Recent Jobs — 3 latest job cards
- Pricing section
- FAQ accordion
- Final CTA section
- Footer

### 2.2 Jobs List (`/jobs`) ✅
- Grid of all published job cards
- Each card: title, company, location, work type, salary range
- Links to job detail page

### 2.3 Job Detail (`/jobs/[slug]`) ✅
- Full job information
- Rich text description, requirements, benefits
- Apply CTA (mailto or apply URL)
- JSON-LD structured data for SEO
- Error boundary + 404 handling

### 2.4 About Page (`/about`) ✅
- CMS-driven: headline, intro, founder cards, philosophy section
- Founder cards: name, role, title, experience items, quote, photo
- Fallback content if CMS empty

### 2.5 Process Page (`/process`) ✅
- CMS-driven: headline, intro, numbered steps
- Each step: title, description, bullet points
- Visual timeline with accent-coloured step numbers
- Fallback content if CMS empty
- Linked from header nav and footer "Learn How We Work"

### 2.6 Contact Page (`/contact`) ⏳ Phase 4
- Contact form: name, email, company (optional), message
- Email delivery via Resend
- Client + server validation
- Success/error states

### 2.7 Privacy Policy (`/privacy`) 📅 Planned
- Static legal page

---

## 3. Navigation

### 3.1 Header
- Logo (links to `/`)
- Nav links: Services (`/#services`), For Candidates (`/jobs`), Process (`/process`), About (`/about`)
- CTA button: "Get in Touch" → `/contact`
- Mobile: hamburger menu

### 3.2 Footer
- Logo + tagline
- Company column: About, Services, Contact
- For Candidates column: Browse Jobs, Learn How We Work
- Get in Touch column: email, LinkedIn link (if set in CMS)
- Bottom bar: copyright text, optional registration number (toggleable), Privacy Policy link

---

## 4. CMS (Sanity) — Content Model

All content is managed via Sanity Studio at `http://localhost:3333`.

### 4.1 Site Settings (singleton)
| Field | Type | Notes |
|-------|------|-------|
| heroHeadline | localizedString (en) | Homepage hero headline |
| heroSubline1–3 | localizedString (en) | Hero paragraph lines |
| sectionWhatWeDo | localizedString (en) | Services section heading |
| sectionWhatWeDoSubtitle | localizedString (en) | Services section subtitle |
| finalCtaTitle | localizedString (en) | Bottom CTA title |
| finalCtaSubtitle | localizedString (en) | Bottom CTA subtitle |
| footerTagline | localizedString (en) | Footer tagline |
| footerCopyright | localizedString (en) | Full copyright line (replaces entire bottom bar text) |
| contactEmail | string | Displayed in footer + contact |
| linkedinUrl | url | LinkedIn link in footer |
| companyRegistrationNumber | string | Reg number |
| showRegistrationNumber | boolean | Toggle reg number in footer |
| showStatistics | boolean | Toggle entire stats strip |
| showClientLogos | boolean | Toggle client logos strip |

### 4.2 Job Posting
| Field | Type |
|-------|------|
| title | string (required) |
| slug | slug (auto-generated) |
| company | string (required) |
| location | string |
| workType | enum: full-time, part-time, contract, temporary |
| salaryMin / salaryMax | number |
| salaryCurrency | enum: EUR, USD, GBP |
| salaryNote | string |
| description | rich text (block) |
| requirements | rich text (block) |
| benefits | rich text (block) |
| contactEmail | string |
| applyUrl | url |
| isPublished | boolean (default: true) |
| publishedAt | datetime |

### 4.3 Statistic
| Field | Notes |
|-------|-------|
| value | e.g. `85%` |
| label | e.g. `Clients Return` |
| order | display order |
| isVisible | toggle individual stat on/off |

### 4.4 Client Logo
| Field | Notes |
|-------|-------|
| companyName | text fallback if no image |
| logo | image |
| website | optional link |
| order | display order |

### 4.5 Service
| Field | Notes |
|-------|-------|
| title | localizedString (en) |
| description | localizedString (en) |
| items | array of localizedString (en) — bullet points |
| order | display order |

### 4.6 Why Praxis (singleton)
Founder names, roles, messages 1–3, subtitles — all localizedString (en).

### 4.7 Pricing Section (singleton)
Fee, fee description, fee note, depends-on list, included list — all localizedString (en).

### 4.8 FAQ Section (singleton)
Section title, subtitle, array of question/answer pairs — all localizedString (en).

### 4.9 About Page (singleton)
| Field | Notes |
|-------|-------|
| headline | string |
| intro | text |
| founders | array of founder objects |
| philosophyTitle | string |
| philosophyItems | string[] — one line per item |

**Founder object:** name, role, title, experienceHeading, experienceItems (string[]), quote, photo (image).

### 4.10 Process Page (singleton)
| Field | Notes |
|-------|-------|
| headline | string |
| intro | text |
| steps | array of step objects |

**Step object:** stepNumber, title, description, items (string[]).

---

## 5. Technical Requirements

### 5.1 Stack
| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| CMS | Sanity v3 |
| Font | Montserrat via `next/font/google` |
| Hosting | Vercel (planned) |
| Email | Resend (Phase 4) |

### 5.2 Data Fetching
- All Sanity fetches wrapped in `safeFetch` utility (returns `null`/`[]` on error)
- ISR revalidation: 60 seconds
- Homepage data fetched once in `app/(site)/layout.tsx` and distributed via `HomepageContentContext`
- About and Process pages fetch independently as server components

### 5.3 Error Handling
- Root `app/error.tsx` — catches all unhandled errors
- `app/(site)/jobs/[slug]/error.tsx` — job detail error boundary
- `app/(site)/jobs/[slug]/not-found.tsx` — custom 404 for job detail

### 5.4 Routing
```
/                     → app/(site)/page.tsx
/about                → app/(site)/about/page.tsx
/process              → app/(site)/process/page.tsx
/jobs                 → app/(site)/jobs/page.tsx
/jobs/[slug]          → app/(site)/jobs/[slug]/page.tsx
/contact              → app/(site)/contact/page.tsx
/privacy              → app/(site)/privacy/page.tsx
```

---

## 6. Remaining Work

### Phase 4 — Contact & Testimonials
- [ ] Contact page form (React Hook Form + Zod)
- [ ] API route `/api/contact` sending email via Resend
- [ ] Testimonials schema in Sanity + component on homepage
- [ ] Privacy Policy page content

### Phase 5 — Deployment & SEO
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Connect Hostinger domain
- [ ] Configure environment variables in Vercel dashboard
- [ ] Sitemap generation (`/sitemap.xml`)
- [ ] Open Graph meta images
- [ ] Google Search Console submission

---

## 7. Out of Scope

- Candidate application tracking system (ATS)
- User accounts / authentication
- Job search/filter
- Multi-language support (removed)
- Blog or news section
- Live chat
- Internal admin dashboard
