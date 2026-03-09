# Final Tech Stack — Praxis Recruitment

**Updated:** February 16, 2026  
**Status:** Ready for Phase 3 implementation

---

## Complete Technology Stack

| Layer | Technology | Purpose | Cost |
|-------|------------|---------|------|
| **Framework** | Next.js 15 (App Router) | React framework, routing, SSR/ISR | Free |
| **Language** | TypeScript | Type safety | Free |
| **Styling** | Tailwind CSS 3.4 | Utility-first CSS | Free |
| **Font** | System fonts (SF Pro Display, Segoe UI) | Apple-inspired typography | Free |
| **CMS** | Sanity.io | Headless CMS for all content | Free (3 users) |
| **Localization** | Sanity + localStorage | Bilingual (LT/EN) | Free |
| **Email** | Resend | Contact form emails | Free (3k/mo) |
| **Forms** | React Hook Form + Zod | Form handling & validation | Free |
| **Hosting** | Vercel | Website hosting | Free (100GB/mo) |
| **Domain** | Hostinger | Existing domain + email | Included |
| **Analytics** | Google Analytics 4 | Visitor tracking (optional) | Free |
| **Icons** | Heroicons | SVG icons | Free |
| **Animations** | CSS + Intersection Observer | Fade-ins, counters | Free |

**Total Monthly Cost: $0** (+ existing Hostinger plan)

---

## Content Management

### What's in Sanity CMS:

| Content Type | Bilingual | Fields | Purpose |
|--------------|-----------|--------|---------|
| **Jobs** | ✅ Yes | Title, description, requirements, benefits, salary, location | Job postings |
| **Statistics** | ✅ Yes (labels) | Value, label, icon | Trust metrics |
| **Services** | ✅ Yes | Title, description, items (bullets) | Service offerings |
| **Specializations** | ✅ Yes | Name, description, icon | Industries |
| **Client Logos** | ✅ Yes (name) | Company name, logo image | Social proof |
| **Site Settings** | ✅ Yes | Hero text, contact email | Global settings |
| **Testimonials** | ✅ Yes | Quote, author, role | Client reviews (Phase 4) |
| **FAQ** | ✅ Yes | Question, answer | FAQ section (Phase 4) |

**All content editable by non-technical staff in both Lithuanian and English!**

---

## Language Implementation

### Default Language
**Lithuanian (LT)**
- First-time visitors see Lithuanian
- Native market focus
- Professional Lithuanian business tone

### Secondary Language
**English (EN)**
- For international clients
- Expandable to other languages later
- Professional international tone

### Storage
- User preference saved in browser (localStorage)
- Key: `praxis-recruitment-locale`
- Persists across sessions
- Same URL for both languages

### Switcher UI
```
Header: [Logo]  Services  For Candidates  About  Contact  [LT | EN]  Get in Touch
                                                    ↑
                                           Language toggle
```

---

## File Structure (Complete)

```
c:\HR\
├── app/                        # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── jobs/
│   ├── about/
│   ├── contact/
│   ├── privacy/
│   └── api/
│       └── contact/
│           └── route.ts
├── components/                 # React components
│   ├── ui/                     # shadcn/ui (future)
│   ├── Logo.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx    ← NEW
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── Services.tsx
│   ├── Specializations.tsx
│   ├── RecentJobs.tsx
│   ├── AboutPreview.tsx
│   ├── AnimatedSection.tsx
│   └── AnimatedCounter.tsx
├── contexts/                   # React contexts
│   └── LanguageContext.tsx     ← NEW
├── lib/                        # Utilities
│   ├── sanity.ts              ← NEW
│   └── i18n.ts                ← NEW
├── types/                      # TypeScript types
│   └── sanity.ts              ← NEW
├── dictionaries/               # UI translations
│   ├── lt.json                ← NEW
│   └── en.json                ← NEW
├── sanity/                     # Sanity config
│   ├── schema.ts              ← NEW
│   ├── schemas/               ← NEW
│   │   ├── job.ts
│   │   ├── statistic.ts
│   │   ├── service.ts
│   │   ├── specialization.ts
│   │   ├── clientLogo.ts
│   │   ├── siteSettings.ts
│   │   ├── testimonial.ts
│   │   └── faq.ts
│   ├── lib/
│   │   ├── client.ts
│   │   └── image.ts
│   └── sanity.config.ts
├── public/
│   ├── images/
│   │   └── logo.png
│   └── favicon.ico
├── [config files]
└── [documentation]
```

---

## Features Summary

### ✨ Design Features
- ✅ Apple-inspired typography (SF Pro Display, light weights)
- ✅ Purple accent brand color (#9B8FD9)
- ✅ Smooth animations (fade-ins, counters)
- ✅ Subtle background effects (radial gradients)
- ✅ Responsive design (mobile-first)
- ✅ Clean, minimal interface

### 🌍 Internationalization
- ✅ Lithuanian (default) + English
- ✅ Language switcher in header
- ✅ All content translatable via Sanity
- ✅ Preference saved in browser
- ✅ Graceful fallback (LT if EN missing)

### 📝 Content Management
- ✅ Jobs (add/edit/delete)
- ✅ Homepage sections (all editable)
- ✅ Statistics (customizable)
- ✅ Services (editable bullets)
- ✅ Client logos (upload images)
- ✅ Testimonials (Phase 4)
- ✅ FAQ (Phase 4)

### ⚡ Performance
- ✅ ISR (Incremental Static Regeneration)
- ✅ Image optimization (Sanity CDN)
- ✅ Font optimization (system fonts)
- ✅ Lazy loading
- ✅ Lighthouse score > 90

### ♿ Accessibility
- ✅ WCAG 2.1 Level AA
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators
- ✅ Semantic HTML

### 🔍 SEO
- ✅ Meta tags (bilingual)
- ✅ JSON-LD structured data
- ✅ Sitemap
- ✅ hreflang tags
- ✅ Open Graph
- ✅ Fast page loads

---

## Development Progress

### ✅ Phase 1 Complete (Feb 16)
- Next.js setup
- Header & Footer
- Route structure
- Brand colors configured
- Logo integrated

### ✅ Phase 2 Complete (Feb 16)
- Home page content
- All sections (Hero, Trust, Services, Specializations, Jobs preview, About)
- Apple-inspired design
- Animations implemented
- Responsive design

### ⏳ Phase 3 In Progress
- [ ] Language switcher
- [ ] Sanity CMS setup
- [ ] Bilingual schemas
- [ ] Dynamic content
- [ ] Job board

### 📅 Phase 4 Planned
- [ ] Testimonials
- [ ] FAQ
- [ ] Contact form
- [ ] Email integration

### 📅 Phase 5 Planned
- [ ] Search & filters
- [ ] Performance optimization
- [ ] Final SEO tuning
- [ ] Production deployment

---

## Dependencies

### NPM Packages
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "^15.5.12",
    "@sanity/client": "^6.x",         ← Phase 3
    "@sanity/image-url": "^1.x",      ← Phase 3
    "next-sanity": "^9.x",            ← Phase 3
    "react-hook-form": "^7.x",        ← Phase 4
    "zod": "^3.x",                    ← Phase 4
    "resend": "^3.x"                  ← Phase 4
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "eslint": "^9",
    "eslint-config-next": "^15.1.6",
    "tailwindcss": "^3.4.1",
    "postcss": "^8",
    "autoprefixer": "^10.4.20",
    "@sanity/cli": "^3.x"             ← Phase 3
  }
}
```

---

## External Services

### Accounts Needed

| Service | Purpose | Status | Cost |
|---------|---------|--------|------|
| GitHub | Version control | ✅ Assumed | Free |
| Vercel | Hosting | ⏳ Needed | Free |
| Sanity | CMS | ⏳ Needed | Free |
| Resend | Email (Phase 4) | ⏳ Needed | Free |
| Google Analytics | Analytics (optional) | Optional | Free |

### Service URLs
- **Sanity Dashboard:** [manage.sanity.io](https://manage.sanity.io)
- **Sanity Studio:** `https://praxis-recruitment.sanity.studio` (after deployment)
- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Resend Dashboard:** [resend.com/dashboard](https://resend.com/dashboard)

---

## Environment Variables

### Current (.env.local)
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=info@praxisrecruitment.lt
```

### After Phase 3 (to add)
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12def
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### After Phase 4 (to add)
```bash
RESEND_API_KEY=re_...
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Targets

- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3.5s
- ✅ Lighthouse Performance: > 90
- ✅ Lighthouse Accessibility: > 95
- ✅ Lighthouse SEO: > 95

---

**Stack finalized and ready for bilingual Phase 3 implementation!** 🚀
