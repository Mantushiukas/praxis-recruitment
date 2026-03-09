# Praxis Recruitment Website

**Recruitment by Practitioners**

A modern recruitment agency website built with Next.js 15, TypeScript, Tailwind CSS, and Sanity CMS.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | Montserrat (Google Fonts) — Ultra Light → Bold |
| CMS | Sanity v3 (standalone Studio at `/sanity`) |
| Hosting | Vercel (planned) with Hostinger domain |
| Email | Resend (planned — Phase 4) |

## Brand Colors

| Name | Hex |
|------|-----|
| Primary (Dark Grey) | `#36323d` |
| Accent (Purple) | `#a885ed` |
| White | `#ffffff` |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the Next.js site

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Run Sanity Studio (separate terminal)

```bash
cd sanity
npx sanity dev
```

Open [http://localhost:3333](http://localhost:3333)

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
c:\HR\
├── app/
│   ├── layout.tsx                  # Root layout (Montserrat font, globals)
│   ├── globals.css                 # Tailwind directives + CSS variables
│   └── (site)/                     # Route group — all public pages
│       ├── layout.tsx              # Fetches all Sanity data, wraps in ClientLayout
│       ├── page.tsx                # Home page
│       ├── about/page.tsx          # About page (CMS-driven)
│       ├── process/page.tsx        # Process page (CMS-driven)
│       ├── jobs/
│       │   ├── page.tsx            # Job listings
│       │   └── [slug]/page.tsx     # Job detail
│       ├── contact/page.tsx        # Contact page (placeholder)
│       └── privacy/page.tsx        # Privacy policy (placeholder)
├── components/
│   ├── Header.tsx                  # Sticky nav: Services, For Candidates, Process, About + CTA
│   ├── Footer.tsx                  # Logo, links, contact, LinkedIn, reg. number, copyright
│   ├── Hero.tsx                    # Homepage hero (CMS-driven)
│   ├── TrustStrip.tsx              # Stats + client logos (toggleable via CMS)
│   ├── Services.tsx                # What We Do section (CMS-driven)
│   ├── WhyPraxis.tsx               # Why Praxis / founders section (CMS-driven)
│   ├── RecentJobs.tsx              # Recent job cards on homepage
│   ├── JobsList.tsx                # Full job listing grid
│   ├── Pricing.tsx                 # Pricing section (CMS-driven)
│   ├── FAQ.tsx                     # FAQ accordion (CMS-driven)
│   ├── FinalCTA.tsx                # Bottom CTA section (CMS-driven)
│   ├── JobContent.tsx              # Client component for Portable Text rendering
│   ├── PortableTextRenderer.tsx    # Portable Text → HTML
│   ├── AnimatedCounter.tsx         # Animated number counter
│   ├── AnimatedSection.tsx         # Scroll fade-in wrapper
│   ├── Logo.tsx                    # Logo component (header/footer variants)
│   └── ClientLayout.tsx            # Wraps Header + Footer + HomepageContentProvider
├── contexts/
│   ├── HomepageContentContext.tsx  # Provides all Sanity data to client components
│   └── LanguageContext.tsx         # Fixed to 'en' locale (single language)
├── hooks/
│   └── useDictionary.ts            # Returns en.json dictionary
├── dictionaries/
│   └── en.json                     # English UI strings (fallback text)
├── lib/
│   ├── sanity.ts                   # Sanity client + all fetch functions
│   ├── sanity.queries.ts           # All GROQ queries
│   └── i18n.ts                     # Dictionary loader
├── types/
│   └── sanity.ts                   # TypeScript interfaces + getLocalized()
├── sanity/                         # Standalone Sanity Studio project
│   └── schemas/
│       ├── index.ts
│       ├── job.ts
│       ├── siteSettings.ts
│       ├── service.ts
│       ├── statistic.ts
│       ├── clientLogo.ts
│       ├── whyPraxis.ts
│       ├── pricing.ts
│       ├── faq.ts
│       ├── aboutPage.ts
│       ├── processPage.ts
│       └── objects/localizedString.ts
└── public/
    └── images/
        ├── logo.png                # Header logo (dark)
        └── logo-light.png          # Footer logo (light)
```

---

## Sanity CMS — Content Types

| Schema | What it controls |
|--------|-----------------|
| Site Settings | Hero text, footer text, contact email, LinkedIn URL, reg. number, section visibility toggles |
| Job Posting | Job adverts (title, company, location, salary, description, requirements, benefits) |
| Statistic | Stats strip numbers (toggleable visibility per stat + global section toggle) |
| Client Logo | Trusted By logo strip (global section toggle) |
| Service | What We Do section cards |
| Why Praxis | Founders & key messages section |
| Pricing Section | Fee, depends-on list, included list |
| FAQ Section | Accordion questions & answers |
| About Page | Headline, intro, founders (with photos, experience, quotes), philosophy |
| Process Page | Headline, intro, numbered steps with bullet points |

---

## Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=hello@praxisrecruitment.eu
RESEND_API_KEY=your_key_here   # Phase 4
```

---

## Development Status

- [x] **Phase 1** — Setup & Shell
- [x] **Phase 2** — Static marketing (Hero, Services, WhyPraxis, Pricing, FAQ, Footer)
- [x] **Phase 3** — Sanity CMS integration (all content dynamic, English only)
- [ ] **Phase 4** — Contact form, Testimonials
- [ ] **Phase 5** — SEO polish, deployment to Vercel

---

## Documentation

- `REQUIREMENTS.md` — Project requirements (updated)
- `IMPLEMENTATION_PLAN.md` — Implementation roadmap (updated)

---

*Private project for Praxis Recruitment.*
