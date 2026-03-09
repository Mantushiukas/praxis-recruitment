# Internationalization (i18n) Implementation Plan

**Languages:** Lithuanian (default) + English  
**Approach:** Sanity localization + localStorage  
**Default:** Lithuanian (LT)  
**Storage:** Browser (same URL for both languages)

---

## Overview

All content on the Praxis Recruitment website will be bilingual:
- Homepage (hero, stats, services, specializations)
- Job listings (all fields)
- Navigation and UI elements
- Footer content
- About, Contact, Privacy pages

Users can switch between LT and EN via a language switcher in the header. Their preference is saved in the browser.

---

## User Decision Summary

1. ✅ **Default language:** Lithuanian
2. ✅ **URL structure:** Same URL (e.g., `/`, `/jobs`) - language saved in localStorage
3. ✅ **Translation workflow:** Add Lithuanian first, English translations later via Sanity
4. ✅ **Scope:** All content bilingual (comprehensive)

---

## Language Switcher UI

### Location
Header (top-right, before "Get in Touch" button):

```
Logo    Services  For Candidates  About  Contact  [LT | EN]  Get in Touch
                                               ↑ Language switcher
```

### Design
- Minimal toggle: `LT | EN`
- Active language highlighted (purple accent)
- Inactive language gray
- Clean, Apple-style design

---

## Technical Implementation

### 1. Language Context

**Create:** `contexts/LanguageContext.tsx`

**Features:**
- Current locale state (lt or en)
- Switch language function
- Persist to localStorage
- Load on mount

**Usage throughout app:**
```typescript
const { locale, setLocale } = useLanguage();
```

---

### 2. Sanity Schema Localization

All text fields become objects with `lt` and `en` properties.

**Before:**
```typescript
{
  name: 'title',
  type: 'string'
}
```

**After:**
```typescript
{
  name: 'title',
  type: 'object',
  fields: [
    { name: 'lt', type: 'string', title: 'Lithuanian' },
    { name: 'en', type: 'string', title: 'English' }
  ]
}
```

**In Sanity Studio, editors see:**
```
Job Title
  🇱🇹 Lithuanian: Vyresnysis React programuotojas
  🇬🇧 English: Senior React Developer
```

---

### 3. Content Types with Localization

All these will be bilingual:

#### 3.1 Jobs
- title (lt/en)
- company (lt/en) - optional if company name same
- location (lt/en)
- description (lt/en) - rich text
- requirements (lt/en) - rich text
- benefits (lt/en) - rich text

#### 3.2 Site Settings
- heroHeadline (lt/en)
- heroSubline (lt/en)

#### 3.3 Statistics
- label (lt/en) - e.g., "Clients Return" / "Klientai grįžta"
- value (same for both) - e.g., "85%"

#### 3.4 Services
- title (lt/en)
- description (lt/en)
- items (lt/en) - array with both languages

#### 3.5 Specializations
- name (lt/en)
- description (lt/en)
- icon (same for both)

#### 3.6 Testimonials (Phase 4)
- quote (lt/en)
- authorName (same)
- authorRole (lt/en)

#### 3.7 FAQ (Phase 4)
- question (lt/en)
- answer (lt/en)

#### 3.8 UI Elements (Translation Dictionary)
- Navigation: Services, **For Candidates** (EN) / **Kandidatams** (LT), About, Contact
- Buttons: "Get in Touch" / "Susisiekite"
- Labels: "Browse Jobs" / "Darbo skelbimai"

---

## Data Fetching Pattern

### In Components:
```typescript
const { locale } = useLanguage();

// Fetch data from Sanity
const jobs = await getJobs(locale);

// Access localized field
<h1>{job.title[locale]}</h1>
```

### Helper Function:
```typescript
export const getLocalizedField = (field: LocalizedString, locale: string) => {
  return field[locale] || field.lt || field.en || '';
};
```

---

## File Structure (After i18n)

```
c:\HR\
├── contexts/
│   └── LanguageContext.tsx      ✅ NEW (language state)
├── lib/
│   ├── sanity.ts
│   └── i18n.ts                  ✅ NEW (helpers, translations)
├── dictionaries/
│   ├── lt.json                  ✅ NEW (UI text - Lithuanian)
│   └── en.json                  ✅ NEW (UI text - English)
├── components/
│   ├── LanguageSwitcher.tsx     ✅ NEW (LT/EN toggle)
│   ├── Header.tsx               ✅ UPDATED (add switcher)
│   ├── Hero.tsx                 ✅ UPDATED (localized)
│   ├── TrustStrip.tsx           ✅ UPDATED (localized)
│   ├── Services.tsx             ✅ UPDATED (localized)
│   ├── Specializations.tsx      ✅ UPDATED (localized)
│   ├── RecentJobs.tsx           ✅ UPDATED (localized)
│   └── Footer.tsx               ✅ UPDATED (localized)
└── sanity/
    └── schemas/                 ✅ UPDATED (all with lt/en)
```

---

## UI Translation Dictionary

### Lithuanian (lt.json)
```json
{
  "nav": {
    "services": "Paslaugos",
    "forCandidates": "Kandidatams",
    "about": "Apie mus",
    "contact": "Kontaktai"
  },
  "buttons": {
    "getInTouch": "Susisiekite",
    "browseJobs": "Darbo skelbimai",
    "viewAllJobs": "Visi skelbimai",
    "apply": "Kreiptis"
  },
  "sections": {
    "whatWeDo": "Ką mes darome",
    "specializations": "Mūsų specializacijos",
    "recentJobs": "Naujausi skelbimai",
    "aboutUs": "Apie Praxis Recruitment",
    "trustedBy": "Pasitikėjimo turinčios įmonės"
  },
  "footer": {
    "company": "Įmonė",
    "forCandidates": "Kandidatams",
    "getInTouch": "Susisiekite",
    "copyright": "Visos teisės saugomos"
  }
}
```

### English (en.json)
```json
{
  "nav": {
    "services": "Services",
    "forCandidates": "For Candidates",
    "about": "About",
    "contact": "Contact"
  },
  "buttons": {
    "getInTouch": "Get in Touch",
    "browseJobs": "Browse Jobs",
    "viewAllJobs": "View All Jobs",
    "apply": "Apply"
  },
  "sections": {
    "whatWeDo": "What We Do",
    "specializations": "Our Specializations",
    "recentJobs": "Recent Job Openings",
    "aboutUs": "About Praxis Recruitment",
    "trustedBy": "Trusted by Leading Companies"
  },
  "footer": {
    "company": "Company",
    "forCandidates": "For Candidates",
    "getInTouch": "Get in Touch",
    "copyright": "All rights reserved"
  }
}
```

---

## Language Switcher Design

### Desktop:
```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo]    Services  For Candidates  About  Contact  LT│EN  [Button] │
│                                                           ↑          │
│                                                        switcher      │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile:
```
┌──────────────────────────────────┐
│ [Logo]              LT│EN  [☰]   │
└──────────────────────────────────┘
```

**Styling:**
- Active: Purple accent color, font-medium
- Inactive: Gray-400, font-normal
- Separator: `|` in gray-300
- Hover: Smooth color transition

---

## Sanity Studio Experience

**For each content type, editors see:**

```
┌─────────────────────────────────────┐
│ Job Title                           │
│ ┌─────────────────────────────────┐ │
│ │ 🇱🇹 LT  │ 🇬🇧 EN                │ │
│ ├─────────┼───────────────────────┤ │
│ │ Vyresnysis React programuotojas │ │
│ │                                 │ │
│ │ Senior React Developer          │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

Side-by-side editing makes translation easy!

---

## User Experience Flow

### First Visit:
1. User lands on site
2. Sees Lithuanian content (default)
3. Clicks `EN` in header
4. All content switches to English
5. Preference saved in browser
6. Next visit remembers English

### Returning Visit:
1. Browser loads saved preference
2. Content displays in saved language
3. Can switch anytime

---

## SEO Considerations

**With same-URL approach:**
- Use `<html lang="lt">` or `<html lang="en">` dynamically
- Add alternate language hints in meta
- Sitemap includes language variants
- hreflang tags for search engines

---

## Phase 3 Integration

Phase 3 will now include:

**Part A: Sanity Setup (1 hour)**
- All schemas with lt/en fields
- Localized content types
- Studio configuration

**Part B: i18n Implementation (45 minutes)**
- Language context
- Switcher component
- localStorage handling
- Translation dictionaries

**Part C: Component Updates (1 hour)**
- Update all components to use locale
- Fetch localized content from Sanity
- Dynamic text rendering

**Part D: Initial Content (30 minutes - your task)**
- Add Lithuanian content for all sections
- English translations can be added later

**New Phase 3 Total: ~3.5-4 hours** (was 2.5-3 hours)

---

## Migration Path

**Phase 3 Implementation Order:**

1. ✅ Set up language context
2. ✅ Create language switcher
3. ✅ Add translation dictionaries (UI text)
4. ✅ Update Sanity schemas with localization
5. ✅ Update components to use locale
6. ✅ Test both languages
7. ✅ You add Lithuanian content in Sanity
8. ✅ English translations added later (by you in Sanity)

---

## Content Entry Workflow (After Setup)

### To Add New Job in Both Languages:

1. Open Sanity Studio
2. Create new Job
3. Fill in Lithuanian tab:
   - Title: "Vyresnysis React programuotojas"
   - Description: Lithuanian text...
4. Fill in English tab:
   - Title: "Senior React Developer"
   - Description: English text...
5. Publish
6. Job appears on site in both languages

**OR add Lithuanian first, come back later for English!**

---

## Benefits

✅ **Professional multilingual site**  
✅ **Easy translation workflow** (all in Sanity)  
✅ **No code changes** for translations  
✅ **User preference remembered**  
✅ **SEO-optimized** for both languages  
✅ **Future-proof** (can add more languages)  

---

## Next Steps

1. I'll update implementation docs with i18n
2. Phase 3 will include language support
3. You create Sanity account
4. I'll set up schemas with lt/en fields
5. You add Lithuanian content
6. English translations added whenever ready

---

**Ready to proceed with bilingual Phase 3?** 

Say "yes" and I'll:
1. Update all documentation with i18n approach
2. Create detailed setup guide
3. Wait for your Sanity Project ID
4. Then implement full bilingual CMS!

🌍 🇱🇹 🇬🇧
