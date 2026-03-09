# Phase 3 Ready: Bilingual CMS Implementation

**Date:** February 16, 2026  
**Status:** ✅ Documentation updated, ready to implement  
**Languages:** Lithuanian (default) + English

---

## ✅ What's Been Updated

All documentation has been updated to reflect the bilingual approach:

### 1. New Documentation Files

| File | Purpose |
|------|---------|
| **I18N_IMPLEMENTATION.md** | Complete i18n technical guide |
| **TRANSLATION_GUIDE.md** | Translation workflow for your team |
| **UPDATED_STACK.md** | Complete tech stack with i18n |
| **dictionaries/lt.json** | Lithuanian UI translations (ready) |
| **dictionaries/en.json** | English UI translations (ready) |

### 2. Updated Existing Files

| File | Changes |
|------|---------|
| **IMPLEMENTATION_PLAN.md** | Phase 3 updated with bilingual approach |
| **PHASE_3_PLAN.md** | Timeline updated (3.5-4 hours) |
| **REQUIREMENTS.md** | Added language requirements, moved i18n from Phase 5 to Phase 3 |

---

## 🌍 Your Bilingual Setup

### Language Configuration

```
Default Language: Lithuanian (LT)
Secondary Language: English (EN)
URL Structure: Same URL (e.g., /, /jobs)
Storage: Browser localStorage
Fallback: Lithuanian → English → Empty
```

### User Experience

**First Visit:**
1. User lands on site → sees Lithuanian
2. Language switcher shows: **LT** | EN
3. User clicks EN → all content switches to English
4. Preference saved in browser

**Return Visit:**
1. Browser remembers preference
2. Site loads in saved language (LT or EN)

### Language Switcher Design

```
┌──────────────────────────────────────────────────────┐
│ [Logo]  Services  For Candidates  About  Contact  LT│EN  [CTA] │
│                                            ↑          │
│                                        Switcher      │
└──────────────────────────────────────────────────────┘
```

**Styling:**
- Active: Purple accent (#9B8FD9), font-medium
- Inactive: Gray-400, font-normal
- Separator: `|` in gray-300
- Hover: Smooth transition

---

## 📝 Content Strategy

### What Gets Translated

**All of These (Bilingual):**
- ✅ Hero headline and subline
- ✅ Job titles and descriptions
- ✅ Service titles and descriptions
- ✅ Specialization names
- ✅ Statistics labels ("Clients Return" / "Klientai grįžta")
- ✅ Navigation menu
- ✅ Button text
- ✅ Footer content
- ✅ FAQ (Phase 4)
- ✅ Testimonials (Phase 4)

**Stays Same (No Translation):**
- ⚠️ Company name "Praxis Recruitment"
- ⚠️ Numbers (85%, 500+)
- ⚠️ Logo
- ⚠️ Client company names (usually)
- ⚠️ Salary numbers (just currency note translated)

### Your Workflow

**Initial Launch (Phase 3):**
1. Add Lithuanian content first (in Sanity Studio)
2. Site launches in Lithuanian
3. English fields can be empty initially

**Add English Later (Your Pace):**
1. Log into Sanity Studio
2. Click content item
3. Fill in English (EN) tab
4. Publish → appears on site immediately

**No Rush!**
- Site works perfectly with just Lithuanian
- English translations added whenever ready
- Graceful fallback (shows LT if EN missing)

---

## 🛠 Technical Implementation

### File Structure (Phase 3)

```
c:\HR\
├── contexts/
│   └── LanguageContext.tsx          ← NEW (language state)
├── lib/
│   ├── sanity.ts                    ← NEW (Sanity client)
│   └── i18n.ts                      ← NEW (i18n helpers)
├── dictionaries/
│   ├── lt.json                      ✅ READY
│   └── en.json                      ✅ READY
├── components/
│   ├── LanguageSwitcher.tsx         ← NEW
│   ├── Header.tsx                   ← UPDATE (add switcher)
│   ├── Hero.tsx                     ← UPDATE (localized)
│   ├── TrustStrip.tsx               ← UPDATE (localized)
│   ├── Services.tsx                 ← UPDATE (localized)
│   ├── Specializations.tsx          ← UPDATE (localized)
│   ├── RecentJobs.tsx               ← UPDATE (localized)
│   └── Footer.tsx                   ← UPDATE (localized)
└── sanity/
    ├── schemas/                     ← NEW (all bilingual schemas)
    │   ├── job.ts
    │   ├── statistic.ts
    │   ├── service.ts
    │   ├── specialization.ts
    │   ├── clientLogo.ts
    │   ├── siteSettings.ts
    │   ├── testimonial.ts
    │   └── faq.ts
    └── sanity.config.ts             ← NEW
```

### Sanity Schema Example

All text fields become objects with `lt` and `en`:

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

**In Sanity Studio:**
```
Job Title
  🇱🇹 LT: Vyresnysis React programuotojas
  🇬🇧 EN: Senior React Developer
```

---

## 📋 Implementation Timeline

### Phase 3: Full CMS + Internationalization (3.5-4 hours)

**Part A: i18n Setup (35 minutes)**
- [ ] Language context
- [ ] Translation dictionaries (already created!)
- [ ] Language switcher component
- [ ] Add switcher to header

**Part B: Sanity Setup (30 minutes)**
- [ ] Create Sanity account (you)
- [ ] Initialize Sanity project
- [ ] Define all schemas with lt/en fields
- [ ] Deploy Sanity Studio

**Part C: Next.js Integration (90 minutes)**
- [ ] Sanity client setup
- [ ] Update all components to use locale
- [ ] Fetch localized content from Sanity
- [ ] Job pages (dynamic + bilingual)
- [ ] Fallback logic

**Part D: Initial Content (30 minutes - you)**
- [ ] Add Lithuanian content in Sanity
- [ ] Test both languages
- [ ] English translations (later, your pace)

---

## ✨ What You'll Be Able to Do

### In Sanity Studio (After Phase 3)

**Add New Job:**
1. Click "Jobs" → "Create"
2. Fill Lithuanian tab:
   - Title: "Vyresnysis React programuotojas"
   - Description: [Lithuanian text]
3. Fill English tab (now or later):
   - Title: "Senior React Developer"
   - Description: [English text]
4. Publish

**Update Homepage Sections:**
1. Click "Site Settings"
2. Edit Hero headline (LT/EN tabs)
3. Edit Hero subline (LT/EN tabs)
4. Publish → changes appear immediately

**Add Service:**
1. Click "Services" → "Create"
2. Title (LT): "Paieška ir atranka"
3. Title (EN): "Recruitment & Sourcing"
4. Description and bullets (both languages)
5. Publish

**Add Statistics:**
1. Click "Statistics" → "Create"
2. Value: "85%"
3. Label (LT): "Klientai grįžta"
4. Label (EN): "Clients Return"
5. Publish → appears in Trust Strip

---

## 🎯 Benefits

### For Your Business
✅ Reach Lithuanian market (native language)  
✅ Attract international clients (English)  
✅ Professional bilingual presence  
✅ Easy to manage (all in Sanity)  
✅ No developer needed for translations  

### For Your Team
✅ Side-by-side translation in Sanity  
✅ Add Lithuanian first, English later  
✅ See both languages while editing  
✅ No technical knowledge required  

### For Users
✅ Choose preferred language  
✅ Preference remembered  
✅ All content in chosen language  
✅ Smooth language switching  

### For SEO
✅ Both languages indexed by Google  
✅ hreflang tags for proper targeting  
✅ Meta tags in user's language  
✅ Better reach (LT + EN markets)  

---

## 🚀 Next Steps

### 1. You Create Sanity Account

**Instructions:**
1. Go to [sanity.io](https://sanity.io)
2. Click "Sign up"
3. Sign up with Google/GitHub (recommended)
4. Verify email
5. Create new project:
   - Project name: "Praxis Recruitment"
   - Plan: Free (3 users, unlimited documents)
6. Copy Project ID (looks like: `abc12def`)

### 2. Provide Sanity Project ID

Once you have the Project ID, send it to me:
```
My Sanity Project ID: abc12def
```

### 3. I'll Implement Phase 3

Once I have your Project ID, I'll:
- Set up language context and switcher
- Configure Sanity client
- Create all bilingual schemas
- Update all components
- Deploy Sanity Studio
- Test both languages

**Estimated time: 3.5-4 hours**

### 4. You Add Content

After implementation:
1. I'll give you Sanity Studio URL
2. You log in and add Lithuanian content
3. Site launches in Lithuanian
4. English translations added later (your pace)

---

## 📚 Reference Docs

### For Implementation
- **I18N_IMPLEMENTATION.md** — Technical i18n guide
- **SANITY_SETUP.md** — Schema definitions
- **PHASE_3_PLAN.md** — Detailed plan

### For Your Team
- **TRANSLATION_GUIDE.md** — How to translate content
- **BRANDING.md** — Logo, colors, fonts
- **COLORS.md** — Color system

### For Overview
- **IMPLEMENTATION_PLAN.md** — All phases
- **REQUIREMENTS.md** — Complete requirements
- **UPDATED_STACK.md** — Tech stack

---

## ❓ FAQ

### Q: Can I add Lithuanian first and English later?
**A:** Yes! That's the recommended workflow. Site works perfectly with just Lithuanian. Add English translations at your own pace.

### Q: What happens if English translation is missing?
**A:** The site shows Lithuanian content as fallback. No errors or blank spaces.

### Q: Can I add more languages later (e.g., Polish, Russian)?
**A:** Yes! The structure is expandable. Add new language codes to schemas and dictionaries.

### Q: How do users switch languages?
**A:** Clean toggle in header: `LT | EN`. One click switches all content.

### Q: Will the URL change when switching languages?
**A:** No! Same URL for both languages (e.g., `/`, `/jobs`). Preference saved in browser.

### Q: Does it affect SEO?
**A:** It improves SEO! Both languages indexed, hreflang tags added, better reach.

### Q: Can I translate job salary or location?
**A:** Location yes (if different in each language). Salary numbers stay same, just currency note translated.

### Q: How long does translation take?
**A:** Depends on content volume. For initial homepage: ~1-2 hours for all sections. Jobs: ~5-10 minutes each.

---

## ✅ Ready to Start!

**All documentation updated**  
**Translation dictionaries created**  
**Implementation plan finalized**

**Say "yes" and create your Sanity account, then provide the Project ID!** 

I'll implement the full bilingual CMS and have it ready for your content. 🚀 🇱🇹 🇬🇧
