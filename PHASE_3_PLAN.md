# Phase 3 — Full CMS + i18n Implementation Plan

**Approach:** Bilingual Sanity CMS for ALL content  
**Languages:** Lithuanian (default) + English  
**Storage:** Browser localStorage (same URL)  
**Time Estimate:** 3.5-4 hours  
**Deliverables:** Fully editable bilingual website via Sanity Studio

---

## Overview

Phase 3 will transform the Praxis Recruitment website from hardcoded content to a fully dynamic, CMS-powered site. Your HR team will be able to edit everything without touching code.

---

## What Will Be Editable

### Homepage
- ✅ Hero headline
- ✅ Hero subline
- ✅ Statistics (3 stats)
- ✅ Services (2 groups with bullets)
- ✅ Specializations (3 cards)
- ✅ Client logos
- ✅ Recent jobs (pulled from CMS)

### Job Board
- ✅ All job postings
- ✅ Add/edit/delete jobs
- ✅ Publish/unpublish
- ✅ Job details, requirements, benefits

### Site Settings
- ✅ Contact email
- ✅ Company registration number
- ✅ Social media links

---

## Implementation Steps

### Step 1: Your Tasks (10 minutes)

**Create Sanity Account:**
1. Go to [sanity.io](https://sanity.io)
2. Sign up (use Google for fastest)
3. Create project: "praxis-recruitment"
4. Choose dataset: "production"
5. Save your **Project ID** (you'll need it)

**Share with me:**
- Your Sanity Project ID

---

### Step 2: My Tasks — Sanity Setup (45 minutes)

**2.1 Install Sanity Dependencies**
```bash
npm install @sanity/client @sanity/image-url next-sanity
npm install -D @sanity/cli
```

**2.2 Initialize Sanity Studio**
- Create `sanity/` folder structure
- Configure Sanity project
- Set up TypeScript types

**2.3 Create All Schemas**
- Job schema (title, company, description, etc.)
- Statistic schema (value, label)
- Service schema (title, items)
- Specialization schema (name, icon, description)
- ClientLogo schema (company, logo image)
- SiteSettings schema (hero text, contact)
- Testimonial schema (Phase 4)
- FAQ schema (Phase 4)

**2.4 Configure Studio**
- Set up structure and navigation
- Configure image uploads
- Add validation rules
- Deploy Studio to Sanity hosting

**2.5 Environment Variables**
Add to `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

---

### Step 3: My Tasks — Next.js Integration (60 minutes)

**3.1 Sanity Client Setup**
- Create `lib/sanity.ts` with client config
- Create TypeScript interfaces
- Set up image URL builder
- Create data fetching functions

**3.2 Update Job Pages**

**`app/jobs/page.tsx`:**
- Fetch jobs from Sanity
- Filter published jobs only
- Sort by date (newest first)
- Add ISR (revalidate every 60 seconds)

**`app/jobs/[slug]/page.tsx`:**
- Fetch single job by slug
- Render rich text (description, requirements)
- Add JSON-LD for SEO
- Handle 404 for non-existent jobs

**3.3 Update Homepage Components**

**`components/Hero.tsx`:**
- Fetch from SiteSettings
- Use heroHeadline and heroSubline
- Keep existing styling

**`components/TrustStrip.tsx`:**
- Fetch Statistics (ordered)
- Fetch ClientLogos (ordered)
- Render images with Sanity CDN
- Keep existing layout

**`components/Services.tsx`:**
- Fetch Service documents (ordered)
- Map items to bullet points
- Keep existing cards

**`components/Specializations.tsx`:**
- Fetch Specialization documents (ordered)
- Render icons and descriptions
- Keep existing grid

**`components/RecentJobs.tsx`:**
- Fetch latest 3 jobs from Sanity
- Use same card design
- Link to job detail pages

**3.4 Image Optimization**
- Use `@sanity/image-url` for client logos
- Add responsive image sizes
- Lazy loading for below-fold images

---

### Step 4: Your Tasks — Add Content (30 minutes)

Once I deploy the Studio, you'll access it at:
```
https://praxis-recruitment.sanity.studio
```

**Add Initial Content:**

1. **Site Settings**
   - Hero Headline: "Recruitment by Practitioners"
   - Hero Subline: (current text)
   - Contact Email: info@praxisrecruitment.lt

2. **Statistics** (create 3 documents)
   - 85% Clients Return
   - 70% Roles Filled in < 2 Weeks
   - 500+ Successful Placements

3. **Services** (create 2 documents)
   - Recruitment & Sourcing (with 5 bullet points)
   - Process & Interviews (with 5 bullet points)

4. **Specializations** (create 3 documents)
   - Technology (💻 icon)
   - Digital Marketing (📱 icon)
   - Human Resources (👥 icon)

5. **Jobs** (create 2-3 sample jobs)
   - Add title, company, location
   - Write description
   - Add requirements
   - Publish

---

### Step 5: Testing (15 minutes)

**I'll test:**
- Homepage loads with Sanity content
- Statistics display correctly
- Services render with bullets
- Specializations show icons
- Jobs list page works
- Job detail pages work
- Images load properly
- ISR revalidation works

**You'll verify:**
- Can add/edit content in Studio
- Changes appear on website
- All sections editable
- Images upload successfully

---

## File Structure (After Phase 3)

```
c:\HR\
├── sanity/                     ✅ NEW
│   ├── schema.ts               # All schemas
│   ├── schemas/
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
├── lib/
│   └── sanity.ts               ✅ NEW (client & queries)
├── types/
│   └── sanity.ts               ✅ NEW (TypeScript types)
├── components/                 ✅ UPDATED (all fetch from Sanity)
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── Services.tsx
│   ├── Specializations.tsx
│   └── RecentJobs.tsx
└── app/
    ├── jobs/
    │   ├── page.tsx            ✅ UPDATED (fetch from Sanity)
    │   └── [slug]/
    │       └── page.tsx        ✅ UPDATED (fetch from Sanity)
    └── page.tsx                (no changes, imports updated components)
```

---

## Benefits After Phase 3

### For Your Team:
✅ Edit homepage content without code  
✅ Add/remove jobs in minutes  
✅ Upload client logos directly  
✅ Reorder sections with drag & drop  
✅ Preview before publishing  
✅ No deployments needed (ISR)  

### For You:
✅ One source of truth for all content  
✅ Version history (undo changes)  
✅ Type-safe TypeScript integration  
✅ SEO-optimized (JSON-LD for jobs)  
✅ Fast (ISR caching)  
✅ Scalable (handles 1000+ jobs)  

---

## Timeline

| Task | Time | Who |
|------|------|-----|
| Create Sanity account | 10 min | You |
| Install dependencies | 5 min | Me |
| Set up i18n (context, dictionaries) | 20 min | Me |
| Create language switcher | 15 min | Me |
| Set up Sanity Studio | 20 min | Me |
| Create all schemas (with lt/en) | 40 min | Me |
| Deploy Studio | 5 min | Me |
| **Break / Handoff** | — | — |
| Update Next.js components (localized) | 60 min | Me |
| Connect to Sanity API | 15 min | Me |
| **Break / Handoff** | — | — |
| Add Lithuanian content | 30 min | You |
| Test both languages | 15 min | Both |
| English translations (later) | Variable | You |
| **Total** | **~3.5-4 hours** | |

---

## What You'll Get

### Sanity Studio URL
```
https://praxis-recruitment.sanity.studio
```

Log in here to manage all content.

### Studio Interface
```
📋 Content Management
   ├── Job Postings (14 jobs)
   ├── Statistics (3 items)
   ├── Services (2 items)
   ├── Specializations (3 items)
   └── Client Logos (5 companies)

⚙️ Site Settings
   └── Homepage & Contact Info

👥 Team (Phase 4)
   ├── Testimonials
   └── FAQ Items
```

---

## Post-Phase 3 Workflow

**To add a new job:**
1. Open Sanity Studio
2. Click "Job Postings" → "Create"
3. Fill in title, company, location, etc.
4. Write description (rich text editor)
5. Click "Publish"
6. Job appears on website in ~60 seconds (ISR)

**To update homepage stats:**
1. Open Sanity Studio
2. Click "Statistics"
3. Edit the value or label
4. Save
5. Homepage updates in ~60 seconds

**To add client logo:**
1. Click "Client Logos" → "Create"
2. Add company name
3. Upload logo image
4. Set display order
5. Publish
6. Logo appears in "Trusted by" section

---

## Success Criteria

Phase 3 is complete when:

- [x] Sanity Studio deployed and accessible
- [x] All 8 schemas created and working
- [x] Jobs page pulling from Sanity
- [x] Job detail pages working
- [x] Homepage sections dynamic (hero, stats, services, etc.)
- [x] Client logos displaying
- [x] ISR caching working (60s revalidation)
- [x] Initial content added
- [x] HR team can add/edit without code
- [x] No TypeScript errors
- [x] All images optimized
- [x] SEO metadata correct

---

## Ready to Start?

**Your next step:**
1. Create Sanity account at [sanity.io](https://sanity.io)
2. Get your Project ID
3. Share it with me
4. I'll start the implementation!

Once you have the Project ID, say "ready" and I'll begin building! 🚀
