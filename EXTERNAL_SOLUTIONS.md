# External Solutions & Integrations Guide

**Project:** Praxis Recruitment Website  
**Client:** Praxis Recruitment  
**Purpose:** List all external services needed, with recommendations, pricing, and integration notes

---

## Overview

Your HR agency website needs external solutions for:
1. **Content management** (for job posts)
2. **Email sending** (contact form)
3. **Hosting & deployment**
4. **Optional:** Database, analytics, CDN

**Decision tree:**
- **Non-technical staff will add jobs?** → Use headless CMS (Sanity or Contentful)
- **Only developers add jobs?** → Use Markdown/MDX (no external service needed)
- **Need application tracking or complex data?** → Use database + simple admin

---

## 1. Content Management (Jobs & Posts)

### Option A: Headless CMS (Recommended for Non-Technical Editing)

#### 1.1 Sanity (⭐ Recommended)

**What it is:** Headless CMS with real-time editing, flexible schema, and excellent developer experience.

**Pros:**
- Free tier: 3 users, unlimited API requests, 10GB bandwidth, 500GB assets
- Real-time collaborative editing
- Powerful query language (GROQ)
- Great TypeScript support
- Hosted by Sanity (no server needed)
- Portable Text for rich content
- Built-in image optimization

**Cons:**
- Learning curve for GROQ
- Paid tiers start at $99/mo if you need more users/bandwidth

**Pricing:**
- **Free:** 3 users, unlimited datasets, API requests, 10GB bandwidth/mo
- **Growth:** $99/mo — 5 users, 50GB bandwidth
- **Team/Enterprise:** Custom

**Integration:**
```bash
npm install @sanity/client @sanity/image-url next-sanity
```

**Setup steps:**
1. Create Sanity project: `npm create sanity@latest`
2. Define schema (Job, Testimonial, etc.) in `sanity/schemas/`
3. Run Sanity Studio: `npm run dev` (runs on localhost:3333 or deploy to sanity.studio)
4. In Next.js, fetch data via Sanity client:
   ```typescript
   import { createClient } from '@sanity/client'
   
   const client = createClient({
     projectId: process.env.SANITY_PROJECT_ID,
     dataset: 'production',
     apiVersion: '2024-01-01',
     useCdn: false,
   })
   
   // Fetch all published jobs
   const jobs = await client.fetch(`*[_type == "job" && isPublished == true]`)
   ```

**Environment variables needed:**
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_token (for mutations, optional for reads)
```

**Best for:** Teams where non-devs (HR, marketing) will add/edit jobs regularly.

---

#### 1.2 Contentful

**What it is:** Enterprise-grade headless CMS with UI for content editors.

**Pros:**
- Free tier: 1 user, 25,000 records, 2 locales
- User-friendly editor UI
- Built-in media library with CDN
- Good documentation and TypeScript SDK
- Multi-language support (i18n)

**Cons:**
- Free tier limited to 1 user
- Less flexible than Sanity for complex schemas
- Paid tiers expensive ($300/mo+)

**Pricing:**
- **Free:** 1 user, 25k records, 2 locales
- **Team:** $300/mo — 5 users, 100k records
- **Premium:** Custom

**Integration:**
```bash
npm install contentful
```

**Setup steps:**
1. Create Contentful space
2. Define content models (Job, Testimonial) in Contentful web UI
3. In Next.js, fetch via Contentful SDK:
   ```typescript
   import { createClient } from 'contentful'
   
   const client = createClient({
     space: process.env.CONTENTFUL_SPACE_ID,
     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
   })
   
   const entries = await client.getEntries({ content_type: 'job' })
   ```

**Environment variables needed:**
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

**Best for:** If you need only 1 editor and want a polished UI, or if you plan to add multi-language later.

---

#### 1.3 Strapi (Self-Hosted)

**What it is:** Open-source headless CMS; you host it yourself (or use Strapi Cloud).

**Pros:**
- Free and open-source (self-hosted)
- Full control over data and hosting
- Built-in admin panel
- REST and GraphQL APIs
- Good for complex data models

**Cons:**
- Requires separate hosting (VPS, Docker, or Strapi Cloud)
- More DevOps work (updates, backups, security)
- Strapi Cloud paid tiers: $99/mo+

**Pricing:**
- **Self-hosted:** Free (you pay for server: ~$5–20/mo on DigitalOcean, Railway, etc.)
- **Strapi Cloud:** $99/mo — 2 users, 50GB assets

**Integration:**
```bash
# Run Strapi separately
npx create-strapi-app@latest strapi-cms
cd strapi-cms && npm run develop

# In Next.js, fetch via REST or GraphQL
const res = await fetch('https://your-strapi.com/api/jobs?populate=*')
const data = await res.json()
```

**Environment variables needed:**
```
STRAPI_API_URL=https://your-strapi.com
STRAPI_API_TOKEN=your_token (if protected)
```

**Best for:** If you want full control, have DevOps skills, or need complex workflows (approval, roles, etc.).

---

### Option B: Markdown/MDX (No External Service)

**What it is:** Store jobs as `.md` or `.mdx` files in your repo (`content/jobs/`).

**Pros:**
- Zero cost
- Version control (git history)
- Fast and simple
- No external dependencies
- Works offline

**Cons:**
- Only devs can add jobs (need git/code editor)
- No UI for non-technical staff
- Harder to scale for 100+ jobs

**Pricing:**
- **Free**

**Integration:**
```bash
npm install contentlayer next-contentlayer
# or
npm install next-mdx-remote gray-matter
```

**Setup steps:**
1. Create `content/jobs/` folder
2. Add `.mdx` files:
   ```markdown
   ---
   title: "Senior React Developer"
   company: "Tech Co"
   location: "Vilnius"
   workType: "full-time"
   salaryMin: 3000
   salaryMax: 5000
   publishedAt: "2026-02-16"
   ---
   
   ## Job Description
   We are looking for...
   ```
3. In Next.js, read files and parse frontmatter:
   ```typescript
   import fs from 'fs'
   import path from 'path'
   import matter from 'gray-matter'
   
   const jobsDir = path.join(process.cwd(), 'content/jobs')
   const files = fs.readdirSync(jobsDir)
   const jobs = files.map(file => {
     const content = fs.readFileSync(path.join(jobsDir, file), 'utf-8')
     const { data, content: body } = matter(content)
     return { ...data, body, slug: file.replace('.mdx', '') }
   })
   ```

**Environment variables needed:**
- None

**Best for:** MVP, small job count, or dev-only content updates.

---

### Option C: Database + Simple Admin

**What it is:** Store jobs in Postgres/MySQL; build simple admin UI or use tools like Prisma Studio.

**Pros:**
- Full control and flexibility
- Fast queries, relational data
- Can add features like application tracking
- No CMS vendor lock-in

**Cons:**
- Need to build admin UI (or use basic tools)
- More code to write and maintain
- Requires database hosting

**Pricing:**
- See section 2 (Database) below

**Integration:**
- Use Prisma ORM (see section 2.1)

**Best for:** If you plan to add features like candidate applications, user accounts, or complex data relationships.

---

## 2. Database (Optional or for Advanced Features)

### When You Need a Database
- Storing job applications
- User accounts (employers, candidates)
- Tracking views/analytics
- Contact form submissions (if you want to store them)
- If you chose "Database + Admin" for content

### When You DON'T Need a Database
- If using Sanity or Contentful (they are your database)
- If using Markdown/MDX
- If contact form just sends email (no storage)

---

### 2.1 Vercel Postgres (⭐ Recommended if on Vercel)

**What it is:** Managed Postgres database by Vercel, powered by Neon.

**Pros:**
- Seamless Vercel integration (one-click setup)
- Auto-scales and pauses when idle (cost-efficient)
- Fast Edge network
- Built-in connection pooling
- Free tier available

**Cons:**
- Vercel-specific (harder to migrate)
- Free tier limited (60 hours compute/mo, 256MB storage)

**Pricing:**
- **Hobby (Free):** 60 compute hours/mo, 256MB storage, 1 database
- **Pro:** $0.102 per compute hour, $0.09/GB storage

**Integration:**
```bash
npm install @vercel/postgres
# or use Prisma
npm install prisma @prisma/client
npx prisma init --datasource-provider postgresql
```

**Setup steps:**
1. In Vercel dashboard, go to Storage → Create Database → Postgres
2. Copy connection string to `.env.local`:
   ```
   POSTGRES_URL=postgres://...
   ```
3. Define schema with Prisma:
   ```prisma
   // prisma/schema.prisma
   model Job {
     id          String   @id @default(cuid())
     slug        String   @unique
     title       String
     company     String
     location    String
     workType    String
     salaryMin   Int?
     salaryMax   Int?
     description String
     requirements String
     isPublished Boolean  @default(false)
     publishedAt DateTime?
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
   }
   ```
4. Push schema: `npx prisma db push`
5. Query in Next.js:
   ```typescript
   import { PrismaClient } from '@prisma/client'
   const prisma = new PrismaClient()
   
   const jobs = await prisma.job.findMany({
     where: { isPublished: true },
     orderBy: { publishedAt: 'desc' },
   })
   ```

**Best for:** Vercel hosting + need for relational data and flexibility.

---

### 2.2 Supabase (⭐ Recommended for Open Source)

**What it is:** Open-source Firebase alternative; Postgres + Auth + Storage + Realtime.

**Pros:**
- Generous free tier (500MB database, 50k monthly active users, 1GB file storage)
- Built-in auth and storage (if needed later)
- Real-time subscriptions
- Self-hostable
- Good documentation and SDK

**Cons:**
- Overkill if you only need Postgres
- Dashboard can be complex for beginners

**Pricing:**
- **Free:** 500MB database, 2 projects, 50k MAU
- **Pro:** $25/mo — 8GB database, 100k MAU, daily backups

**Integration:**
```bash
npm install @supabase/supabase-js
# or use Prisma with Supabase's Postgres connection string
```

**Setup steps:**
1. Create Supabase project at supabase.com
2. Get connection string from Settings → Database
3. Add to `.env.local`:
   ```
   DATABASE_URL=postgresql://...
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your_anon_key
   ```
4. Use Prisma (same as Vercel Postgres) or Supabase SDK:
   ```typescript
   import { createClient } from '@supabase/supabase-js'
   const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL,
     process.env.SUPABASE_ANON_KEY
   )
   
   const { data } = await supabase
     .from('jobs')
     .select('*')
     .eq('isPublished', true)
   ```

**Best for:** If you want more than just a database (auth, storage, realtime) or prefer open-source.

---

### 2.3 Neon

**What it is:** Serverless Postgres with branching (like git for databases).

**Pros:**
- Generous free tier (10 projects, 3GB storage per project)
- Auto-scales to zero (no idle cost)
- Database branching for dev/staging
- Fast cold starts

**Cons:**
- Relatively new (less mature than others)

**Pricing:**
- **Free:** 10 projects, 3GB storage, 100 compute hours/mo
- **Pro:** $19/mo — unlimited projects, 200 compute hours

**Integration:**
- Same as Vercel Postgres (Prisma + connection string)

**Best for:** If you want serverless Postgres without Vercel lock-in.

---

### 2.4 PlanetScale (MySQL)

**What it is:** Serverless MySQL with branching and schema migrations.

**Pros:**
- Free tier: 1 database, 5GB storage, 1 billion reads/mo
- Branching workflows (great for teams)
- No downtime migrations

**Cons:**
- MySQL, not Postgres (some differences in queries/features)
- Paid tiers expensive ($39/mo+)

**Pricing:**
- **Hobby (Free):** 1 database, 5GB storage, 1B reads/mo
- **Scaler:** $39/mo — 2 databases, 10GB storage

**Integration:**
```bash
npm install @planetscale/database
# or Prisma with MySQL provider
```

**Best for:** If you prefer MySQL or need branching workflows.

---

## 3. Email Sending (Contact Form)

### 3.1 Resend (⭐ Recommended)

**What it is:** Modern email API for developers.

**Pros:**
- Best-in-class developer experience
- React Email integration (design emails in JSX)
- Free tier: 3,000 emails/month
- Fast delivery, good reputation
- Simple API

**Cons:**
- Younger service (less track record than SendGrid)

**Pricing:**
- **Free:** 3,000 emails/mo, 1 domain
- **Pro:** $20/mo — 50,000 emails/mo, multiple domains

**Integration:**
```bash
npm install resend
```

**Setup steps:**
1. Create account at resend.com
2. Get API key from dashboard
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_...
   ```
4. In Next.js API route (`app/api/contact/route.ts`):
   ```typescript
   import { Resend } from 'resend'
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   export async function POST(req: Request) {
     const { name, email, message } = await req.json()
     
     await resend.emails.send({
       from: 'website@yourdomain.lt',
       to: 'asta@youragency.lt',
       subject: `New contact from ${name}`,
       html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
     })
     
     return Response.json({ success: true })
   }
   ```

**Environment variables needed:**
```
RESEND_API_KEY=re_...
CONTACT_EMAIL=asta@youragency.lt
```

**Best for:** Modern Next.js projects; simple and fast setup.

---

### 3.2 SendGrid

**What it is:** Established email delivery service by Twilio.

**Pros:**
- Free tier: 100 emails/day (3,000/month)
- Very reliable delivery
- Detailed analytics and logs
- Transactional + marketing emails

**Cons:**
- More complex API than Resend
- Dashboard can be overwhelming
- Requires domain authentication (DKIM, SPF) for best delivery

**Pricing:**
- **Free:** 100 emails/day
- **Essentials:** $19.95/mo — 50k emails/mo
- **Pro:** $89.95/mo — 100k emails/mo

**Integration:**
```bash
npm install @sendgrid/mail
```

**Setup steps:**
1. Create SendGrid account
2. Get API key from Settings → API Keys
3. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=SG...
   ```
4. In API route:
   ```typescript
   import sgMail from '@sendgrid/mail'
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
   
   await sgMail.send({
     to: 'asta@youragency.lt',
     from: 'website@yourdomain.lt',
     subject: `New contact from ${name}`,
     html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
   })
   ```

**Environment variables needed:**
```
SENDGRID_API_KEY=SG...
```

**Best for:** If you need proven reliability or plan to send marketing emails later.

---

### 3.3 Nodemailer (SMTP)

**What it is:** Send emails via your own SMTP server or Gmail/Outlook SMTP.

**Pros:**
- Free (if using Gmail/Outlook)
- No external service signup
- Full control

**Cons:**
- SMTP can be slow
- Gmail has daily limits (500/day)
- Emails more likely to land in spam
- Less reliable than transactional services

**Pricing:**
- **Free** (if using Gmail/Outlook SMTP)

**Integration:**
```bash
npm install nodemailer
```

**Setup steps:**
1. Enable "App Passwords" in Gmail (if using Gmail)
2. Add to `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```
3. In API route:
   ```typescript
   import nodemailer from 'nodemailer'
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASSWORD,
     },
   })
   
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: 'asta@youragency.lt',
     subject: `New contact from ${name}`,
     html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
   })
   ```

**Best for:** MVP or low-volume contact forms; not recommended for production.

---

## 4. Hosting & Deployment

### 4.1 Vercel (⭐ Recommended)

**What it is:** Platform built for Next.js (by Next.js creators).

**Pros:**
- Free tier: Unlimited sites, 100GB bandwidth/mo, automatic SSL
- Zero-config Next.js deployment
- Edge network (fast worldwide)
- Preview deployments (every git push)
- Built-in analytics and speed insights

**Cons:**
- Free tier limits: 100GB bandwidth, 100 builds/day, 6,000 build minutes/mo
- Vendor lock-in (but easy to migrate)

**Pricing:**
- **Hobby (Free):** 100GB bandwidth, unlimited sites
- **Pro:** $20/user/mo — 1TB bandwidth, advanced features

**Setup steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Sign up at vercel.com and connect repo
3. Import project → Vercel auto-detects Next.js
4. Add environment variables in Vercel dashboard
5. Deploy (automatic on every git push to main)

**Domain:**
- Free `.vercel.app` subdomain
- Add custom domain (free SSL auto-configured)

**Best for:** Next.js projects; easiest and fastest deployment.

---

### 4.2 Netlify

**What it is:** Hosting platform for static sites and serverless functions.

**Pros:**
- Free tier: 100GB bandwidth/mo, 300 build minutes/mo
- Good for static sites and JAMstack
- Form handling built-in
- Split testing and branch deploys

**Cons:**
- Slightly slower Next.js builds than Vercel
- Serverless functions have cold start delays

**Pricing:**
- **Starter (Free):** 100GB bandwidth, 300 build minutes
- **Pro:** $19/user/mo — 1TB bandwidth, 1,000 build minutes

**Best for:** If you prefer Netlify ecosystem or use their form/identity features.

---

### 4.3 Self-Hosted (VPS, AWS, DigitalOcean)

**What it is:** Run Next.js on your own server (Docker, PM2, etc.).

**Pros:**
- Full control
- Lower cost at scale (VPS ~$5–20/mo)
- No vendor limits

**Cons:**
- DevOps work (updates, security, backups)
- No automatic preview deployments
- Slower to set up

**Pricing:**
- **DigitalOcean Droplet:** $6/mo (1GB RAM)
- **AWS Lightsail:** $5/mo (512MB RAM)

**Best for:** If you have DevOps skills or need special server config.

---

## 5. Analytics (Optional)

### 5.1 Vercel Web Analytics (⭐ Simple)

**What it is:** Privacy-friendly analytics built into Vercel.

**Pros:**
- Zero config (if on Vercel)
- No cookie banner needed (privacy-compliant)
- Shows page views, top pages, referrers
- Free on Pro plan, $10/mo on Hobby

**Cons:**
- Basic features (no events, funnels, etc.)
- Requires Vercel Pro ($20/mo) or pay $10/mo separately

**Pricing:**
- **Free** with Vercel Pro
- **$10/mo** on Hobby plan

**Best for:** Simple analytics, privacy-first approach.

---

### 5.2 Google Analytics 4 (Free)

**What it is:** Google's analytics platform.

**Pros:**
- Free and comprehensive
- Event tracking, funnels, goals
- Integration with Google Ads

**Cons:**
- Requires cookie banner (GDPR)
- Complex interface
- Privacy concerns

**Pricing:**
- **Free**

**Integration:**
```bash
npm install @next/third-parties
```

**Best for:** If you need detailed analytics and already use Google tools.

---

### 5.3 Plausible (Privacy-Focused)

**What it is:** Simple, privacy-friendly analytics (GDPR-compliant).

**Pros:**
- No cookies (no banner needed)
- Simple, beautiful dashboard
- Open-source (self-hostable)

**Cons:**
- Paid ($9/mo for 10k pageviews)
- Limited features vs Google Analytics

**Pricing:**
- **Growth:** $9/mo — 10k pageviews
- **Business:** $19/mo — 100k pageviews

**Best for:** Privacy-conscious teams who want simple, GDPR-compliant analytics.

---

## 6. Image Optimization & CDN (Optional)

### 6.1 Next.js Image Optimization (Built-in)

**What it is:** Next.js automatically optimizes images on-demand.

**Pros:**
- Built-in (no external service)
- Auto WebP/AVIF conversion
- Lazy loading
- Responsive sizes

**Cons:**
- Uses Vercel's image optimization (limited to 1,000 source images on free tier)
- Can be slow on first load (caching improves it)

**Pricing:**
- **Free:** 1,000 optimized images/mo on Vercel
- **Pro:** $40 per 1,000 additional images

**Best for:** Most projects; default choice.

---

### 6.2 Cloudinary (Advanced)

**What it is:** Image and video management platform with CDN.

**Pros:**
- Generous free tier (25 credits/mo = ~25GB bandwidth)
- On-the-fly transformations (resize, crop, format)
- Video support
- Global CDN

**Cons:**
- Overkill for simple image needs
- Paid tiers expensive ($89/mo+)

**Pricing:**
- **Free:** 25 credits/mo, 25GB storage, 25GB bandwidth
- **Plus:** $89/mo — 225 credits, 100GB storage

**Best for:** If you have many images, need video, or want advanced transformations.

---

## 7. Recommended Stack by Scenario

### ⭐ YOUR CHOSEN SETUP: Full CMS (Hostinger Domain + Vercel Hosting + Sanity)

| Need | Solution | Cost |
|------|----------|------|
| Content (ALL) | **Sanity CMS** | Free (3 users) |
| Jobs | Sanity CMS | Included |
| Homepage Content | Sanity CMS | Included |
| Statistics | Sanity CMS | Included |
| Services | Sanity CMS | Included |
| Client Logos | Sanity CMS | Included |
| Testimonials | Sanity CMS (Phase 4) | Included |
| FAQ | Sanity CMS (Phase 4) | Included |
| Database | None (Sanity is the DB) | Free |
| Email | Resend | Free (3k emails/mo) |
| Hosting | **Vercel** | Free |
| Domain | **Existing Hostinger domain** | Already paid |
| DNS | Point Hostinger DNS to Vercel | Free |
| Analytics | Google Analytics 4 | Free |
| **Total** | | **$0/mo** (+ existing Hostinger plan) |

**Benefits of this setup:**
- Keep your existing Hostinger plan and domain
- Use Hostinger for email hosting (e.g., `asta@youragency.lt`)
- Get Vercel's superior Next.js hosting (automatic deployments, edge network, preview URLs)
- Zero additional monthly cost
- Best of both worlds

---

### Scenario A: Small Agency, Dev-Only Content
**Goal:** Fast MVP, low cost, only developers add jobs.

| Need | Solution | Cost |
|------|----------|------|
| Content | Markdown/MDX | Free |
| Database | None | Free |
| Email | Resend | Free (3k emails/mo) |
| Hosting | Vercel | Free |
| Analytics | Vercel Analytics or none | Free or $10/mo |
| **Total** | | **$0–10/mo** |

---

### Scenario B: Agency with Non-Technical Staff
**Goal:** HR/marketing team can add jobs without code.

| Need | Solution | Cost |
|------|----------|------|
| Content | Sanity CMS | Free (3 users) |
| Database | None (Sanity is the DB) | Free |
| Email | Resend | Free (3k emails/mo) |
| Hosting | Vercel | Free |
| Analytics | Google Analytics 4 | Free |
| **Total** | | **$0/mo** |

---

### Scenario C: Full Platform with Applications & Tracking
**Goal:** Job board + candidate applications + analytics.

| Need | Solution | Cost |
|------|----------|------|
| Content | Database (Postgres) | — |
| Database | Vercel Postgres or Supabase | Free (Supabase) or $0.10/hr |
| Email | SendGrid or Resend | Free (3k emails/mo) |
| Hosting | Vercel | Free or Pro $20/mo |
| Analytics | Plausible or GA4 | $9/mo or Free |
| **Total** | | **$9–30/mo** |

---

## 8. Quick Start Checklist

**Before you code, sign up for:**

### Minimum (for MVP):
- [x] **GitHub account** (for version control)
- [x] **Vercel account** (for hosting) → vercel.com
- [x] **Resend account** (for contact form) → resend.com
- [ ] **Domain** (optional; can use `.vercel.app` for now)

### If using CMS:
- [x] **Sanity account** → sanity.io (or Contentful → contentful.com)

### If using database:
- [x] **Vercel Postgres** (via Vercel dashboard) or **Supabase account** → supabase.com

### Optional:
- [ ] **Google Analytics** → analytics.google.com
- [ ] **Plausible** → plausible.io

---

## 9. Environment Variables Summary

After signing up for services, you'll need these in `.env.local`:

```bash
# Required for all scenarios
NEXT_PUBLIC_SITE_URL=https://youragency.lt
CONTACT_EMAIL=asta@youragency.lt

# Email (choose one)
RESEND_API_KEY=re_...
# OR
SENDGRID_API_KEY=SG...
# OR
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# CMS (if using Sanity)
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# CMS (if using Contentful)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token

# Database (if using Postgres)
DATABASE_URL=postgresql://...
# OR Vercel Postgres
POSTGRES_URL=postgres://...

# Database (if using Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key

# Analytics (if using GA4)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 10. Cost Estimate Summary

| Component | Free Tier Limit | Paid Starting Price |
|-----------|-----------------|---------------------|
| **Sanity CMS** | 3 users, 10GB bandwidth | $99/mo (5 users) |
| **Contentful** | 1 user, 25k records | $300/mo |
| **Vercel Postgres** | 60 compute hrs/mo | ~$10/mo (typical use) |
| **Supabase** | 500MB DB, 50k MAU | $25/mo |
| **Resend** | 3,000 emails/mo | $20/mo (50k emails) |
| **SendGrid** | 100 emails/day | $19.95/mo |
| **Vercel Hosting** | 100GB bandwidth | $20/mo per user |
| **Google Analytics** | Unlimited | Free |
| **Plausible** | — | $9/mo (10k views) |

**Recommended starting stack (Scenario B): $0/mo**
- Sanity (free), Resend (free), Vercel (free), GA4 (free)

You can start completely free and scale as needed.

---

## 11. Next Steps (YOUR CHOSEN PATH)

**You've chosen: Option 3 — Hybrid (Hostinger domain + Vercel hosting)**

### Step-by-step setup:

1. **Sign up for external services:**
   - ✅ Hostinger (you already have this)
   - [ ] Vercel → vercel.com (connect with GitHub)
   - [ ] Resend → resend.com (get API key)
   - [ ] Sanity → sanity.io (create project)

2. **Connect your Hostinger domain to Vercel:**
   - See `HOSTING_SETUP.md` for detailed DNS configuration steps

3. **Get API keys and add to `.env.local`:**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://yourdomain.lt
   CONTACT_EMAIL=asta@youragency.lt
   RESEND_API_KEY=re_...
   SANITY_PROJECT_ID=your_project_id
   SANITY_DATASET=production
   ```

4. **Start Phase 1 of implementation** (see `IMPLEMENTATION_PLAN.md`)

5. **Deploy to Vercel:**
   - Push code to GitHub
   - Vercel auto-deploys on every commit

---

**Summary:** Your final setup uses **Vercel (hosting) + Hostinger (domain + email) + Resend (contact form) + Sanity (CMS)** — all free to start, $0/month additional cost beyond your existing Hostinger plan.
