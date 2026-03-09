# Sanity CMS Setup Guide — Praxis Recruitment

**Project:** Praxis Recruitment Full CMS Implementation  
**CMS:** Sanity.io (Free tier)  
**Approach:** All content editable via Sanity Studio

---

## Overview

This guide covers setting up Sanity CMS to manage **all** content on the Praxis Recruitment website:
- Job postings
- Homepage statistics
- Services sections
- Specializations
- Client logos
- Site settings (hero text, contact)
- Testimonials (Phase 4)
- FAQ (Phase 4)

---

## Step 1: Create Sanity Account

### 1.1 Sign Up

1. Go to [sanity.io](https://sanity.io)
2. Click **"Get Started"**
3. Sign up with:
   - Google account (recommended)
   - GitHub account
   - Email

### 1.2 Create Project

1. After signup, you'll see "Create new project"
2. **Project name:** `praxis-recruitment`
3. **Dataset:** `production`
4. **Region:** Choose closest to your location (EU for Europe)

### 1.3 Get Project ID

- After creation, you'll see your **Project ID** (looks like: `abc12def`)
- **Save this!** You'll need it for environment variables

---

## Step 2: Sanity Schemas to Create

You'll create **8 content types** (called "schemas") in Sanity Studio.

### 2.1 Job Schema

**Purpose:** Job postings

**Fields:**
```javascript
{
  name: 'job',
  title: 'Job Posting',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'Vilnius, Lithuania'
    },
    {
      name: 'workType',
      title: 'Work Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Temporary', value: 'temporary' }
        ]
      }
    },
    {
      name: 'salaryMin',
      title: 'Minimum Salary',
      type: 'number'
    },
    {
      name: 'salaryMax',
      title: 'Maximum Salary',
      type: 'number'
    },
    {
      name: 'salaryCurrency',
      title: 'Currency',
      type: 'string',
      options: {
        list: ['EUR', 'USD', 'GBP']
      }
    },
    {
      name: 'salaryNote',
      title: 'Salary Note',
      type: 'string',
      placeholder: 'e.g., "before tax", "gross monthly"'
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },
    {
      name: 'applyUrl',
      title: 'Apply URL',
      type: 'url'
    },
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }
  ]
}
```

---

### 2.2 Statistic Schema

**Purpose:** Homepage statistics (85% clients return, etc.)

**Fields:**
```javascript
{
  name: 'statistic',
  title: 'Statistic',
  type: 'document',
  fields: [
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      placeholder: '85%',
      validation: Rule => Rule.required()
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      placeholder: 'Clients Return',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ]
}
```

---

### 2.3 Service Schema

**Purpose:** Service sections (Recruitment & Sourcing, Process & Interviews)

**Fields:**
```javascript
{
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2
    },
    {
      name: 'items',
      title: 'Service Items',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ]
}
```

---

### 2.4 Specialization Schema

**Purpose:** Industry specializations (Technology, Digital Marketing, HR)

**Fields:**
```javascript
{
  name: 'specialization',
  title: 'Specialization',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      placeholder: '💻'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ]
}
```

---

### 2.5 Client Logo Schema

**Purpose:** Client company logos for "Trusted by" section

**Fields:**
```javascript
{
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ]
}
```

---

### 2.6 Site Settings Schema (Singleton)

**Purpose:** Global site settings (hero text, contact email, etc.)

**Fields:**
```javascript
{
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline on homepage'
    },
    {
      name: 'heroSubline',
      title: 'Hero Subline',
      type: 'text',
      rows: 3,
      description: 'Subheadline below main headline'
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },
    {
      name: 'companyRegistrationNumber',
      title: 'Company Registration Number',
      type: 'string'
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url'
    }
  ]
}
```

**Important:** Mark this as a singleton (only one document allowed) in schema config.

---

### 2.7 Testimonial Schema (Phase 4)

**Purpose:** Client testimonials

**Fields:**
```javascript
{
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorRole',
      title: 'Author Role/Company',
      type: 'string',
      placeholder: 'CEO, Company Name'
    },
    {
      name: 'authorAvatar',
      title: 'Author Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ]
}
```

---

### 2.8 FAQ Schema (Phase 4)

**Purpose:** FAQ questions and answers

**Fields:**
```javascript
{
  name: 'faq',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ]
}
```

---

## Step 3: Initial Content to Add

After schemas are created, add this initial content:

### 3.1 Site Settings
- Hero Headline: "Recruitment by Practitioners"
- Hero Subline: "Strategic talent acquisition for Technology, Digital Marketing, and HR roles. Powered by experienced recruitment professionals who understand your needs."
- Contact Email: info@praxisrecruitment.lt

### 3.2 Statistics (Create 3)
1. Value: "85%", Label: "Clients Return", Order: 1
2. Value: "70%", Label: "Roles Filled in < 2 Weeks", Order: 2
3. Value: "500+", Label: "Successful Placements", Order: 3

### 3.3 Services (Create 2)
**Service 1:**
- Title: "Recruitment & Sourcing"
- Description: "End-to-end talent acquisition services tailored to your needs."
- Items: 
  - Job ad drafting and strategy
  - Multi-channel posting and promotion
  - Proactive candidate outreach
  - Candidate sourcing and screening
  - Skills assessment and evaluation
- Order: 1

**Service 2:**
- Title: "Process & Interviews"
- Description: "Streamlined interview process management and support."
- Items:
  - Interview coordination and scheduling
  - First-round interview execution
  - Panel interview support
  - Candidate feedback and communication
  - Offer negotiation and shaping
- Order: 2

### 3.4 Specializations (Create 3)
1. Name: "Technology", Icon: "💻", Description: "Software engineers, developers, IT specialists", Order: 1
2. Name: "Digital Marketing", Icon: "📱", Description: "Marketing strategists, content creators, analysts", Order: 2
3. Name: "Human Resources", Icon: "👥", Description: "HR professionals, talent acquisition, people ops", Order: 3

### 3.5 Jobs (Create 2-3 sample)
- Create a few sample job postings to test

---

## Step 4: Sanity Studio URL

After deployment, you'll get a Studio URL like:
```
https://praxis-recruitment.sanity.studio
```

This is where your HR team will log in to manage content.

---

## Step 5: Environment Variables Needed

Add to `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token (optional, for mutations)
```

---

## Step 6: Access Control

**Who can edit:**
- Anyone you invite to the Sanity project
- Free tier allows 3 users (perfect for your team)

**To add users:**
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to "Members"
4. Click "Invite member"
5. Enter their email

---

## Schema Organization in Studio

Your team will see:

```
📋 Content
   ├── Job Postings (add/edit jobs)
   ├── Statistics (homepage stats)
   ├── Services (service sections)
   ├── Specializations (industries)
   ├── Client Logos (trusted by)
   ├── Testimonials (client quotes)
   └── FAQ Items (questions/answers)

⚙️ Settings
   └── Site Settings (hero, contact)
```

---

## Benefits of This Setup

✅ **Full Content Control:** Everything editable without code  
✅ **No Deployments:** Changes appear immediately (with ISR)  
✅ **Image Uploads:** Drag & drop images directly  
✅ **Rich Text:** WYSIWYG editor for job descriptions  
✅ **Drag & Drop Ordering:** Reorder items easily  
✅ **Preview:** See how it looks before publishing  
✅ **Version History:** Undo any changes  
✅ **Multi-User:** 3 people can edit simultaneously  

---

## Next Steps

1. ✅ Sign up for Sanity
2. ✅ Get your Project ID
3. ✅ I'll set up all schemas in code
4. ✅ I'll integrate with Next.js
5. ✅ You add initial content via Studio
6. ✅ Site updates automatically!

---

**Ready to start?** Let me know when you've created your Sanity account and have your Project ID! 🚀
