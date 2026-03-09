# Translation Guide for Praxis Recruitment

**Languages:** Lithuanian (LT) - default, English (EN)  
**Approach:** Sanity CMS + localStorage  
**Target:** All content bilingual

---

## How Translation Works

### For Your Team (Non-Technical)

**In Sanity Studio, every text field has two tabs:**

```
┌─────────────────────────────────────────┐
│ Job Title                               │
│ ┌───────────────────────────────────┐   │
│ │  🇱🇹 LT  │  🇬🇧 EN               │   │
│ ├──────────┼────────────────────────┤   │
│ │ Vyresnysis React programuotojas   │   │
│ │                                   │   │
│ │ Senior React Developer            │   │
│ └───────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Workflow:**
1. Fill in Lithuanian content
2. Click English tab
3. Add English translation
4. Publish
5. Users can switch between languages on site

---

## What Gets Translated

### Jobs (All Fields)
- ✅ Title
- ✅ Description
- ✅ Requirements
- ✅ Benefits
- ⚠️ Company name (optional - often stays same)
- ⚠️ Salary (numbers stay same, just currency note)

### Homepage
- ✅ Hero headline
- ✅ Hero subline
- ✅ Statistics labels ("Clients Return" / "Klientai grįžta")
- ✅ Service titles
- ✅ Service descriptions
- ✅ Service bullet points
- ✅ Specialization names
- ✅ Specialization descriptions
- ✅ Section headings

### Navigation & UI
- ✅ Menu items (Services, For Candidates, About, Contact)
- ✅ Button text ("Get in Touch" / "Susisiekite")
- ✅ Footer links
- ⚠️ Numbers and stats (85%, 500+) - stay same

### Phase 4 Content
- ✅ Testimonial quotes
- ✅ FAQ questions and answers

---

## Lithuanian Translations (Reference)

### Common Terms

| English | Lithuanian |
|---------|------------|
| Services | Paslaugos |
| For Candidates (header nav) | Kandidatams |
| Jobs (buttons, sections) | Darbo skelbimai |
| About | Apie mus |
| Contact | Kontaktai |
| Get in Touch | Susisiekite |
| Browse Jobs | Darbo skelbimai |
| View All Jobs | Visi skelbimai |
| Apply | Kreiptis |
| Learn More | Sužinoti daugiau |
| Recruitment | Atranka |
| Practitioners | Praktikai |
| Talent Acquisition | Talentų pritraukimas |
| Full-time | Pilną darbo dieną |
| Part-time | Ne visą darbo dieną |
| Contract | Sutartis |
| Location | Vieta |
| Salary | Atlyginimas |
| Requirements | Reikalavimai |
| Benefits | Privalumai |
| Company | Įmonė |
| Description | Aprašymas |

### Section Headings

| English | Lithuanian |
|---------|------------|
| What We Do | Ką mes darome |
| Our Specializations | Mūsų specializacijos |
| Recent Job Openings | Naujausi skelbimai |
| About Praxis Recruitment | Apie Praxis Recruitment |
| Trusted by Leading Companies | Mūsų klientai |

---

## Adding Content Strategy

### Initial Launch (Phase 3)
1. **Add Lithuanian content first** (your native language)
   - All jobs in Lithuanian
   - All homepage sections in Lithuanian
   - Site launches in Lithuanian

2. **English translations added later** (at your pace)
   - Go back to Sanity Studio
   - Click each content item
   - Fill in English tab
   - Publish

### No Rush
- Site works perfectly with just Lithuanian
- English tab can be empty initially
- Fallback: Shows Lithuanian if English missing
- Add translations as time permits

---

## User Experience

### First Visit (No saved preference)
1. User lands on site
2. Sees **Lithuanian content** (default)
3. Language switcher shows: **LT** | EN
4. User can click EN to switch

### After Switching to English
1. User clicks EN
2. All content switches to English
3. Language switcher shows: LT | **EN**
4. Preference saved in browser
5. Next visit automatically shows English

### Incomplete Translations
- If English translation missing, shows Lithuanian
- Graceful fallback (no errors or blank spaces)
- Encourages completion but doesn't break site

---

## Translation Priorities

### Must Translate (High Priority)
1. Job titles and descriptions
2. Hero headline and subline
3. Service titles and descriptions
4. Navigation menu items
5. Button text

### Should Translate (Medium Priority)
6. Statistics labels
7. Specialization descriptions
8. About section
9. FAQ items
10. Testimonials

### Nice to Have (Low Priority)
11. Footer links text
12. Meta descriptions
13. Error messages

---

## Quality Guidelines

### Writing Style
**Lithuanian:**
- Professional but approachable
- Use "Mes" (we) not "Aš" (I)
- Avoid overly formal language
- Match English tone

**English:**
- Clear and concise
- Professional
- Active voice
- No jargon

### Consistency
- Use same terminology throughout
- "Atranka" always for "Recruitment"
- "Darbo skelbimai" for "Job listings"
- Keep brand name "Praxis Recruitment" in both languages

---

## Sanity Studio Workflow

### To Add Bilingual Job:

1. **Click:** Jobs → Create
2. **Fill Lithuanian fields:**
   ```
   Title (LT): Vyresnysis React programuotojas
   Description (LT): [Lithuanian description]
   Requirements (LT): [Lithuanian requirements]
   ```
3. **Fill English fields:**
   ```
   Title (EN): Senior React Developer
   Description (EN): [English description]
   Requirements (EN): [English requirements]
   ```
4. **Common fields** (no translation):
   - Company name
   - Location
   - Salary (numbers)
   - Work type (stored as code, displayed translated)
5. **Publish**

### To Update Translation Later:

1. Open existing content item
2. Click English (EN) tab
3. Add/edit English text
4. Save
5. Changes appear immediately on site

---

## Technical Notes

### LocalStorage Key
```
praxis-recruitment-locale: 'lt' | 'en'
```

### Type Definition
```typescript
type Locale = 'lt' | 'en';

interface LocalizedString {
  lt: string;
  en: string;
}

interface LocalizedText {
  lt: any[]; // Portable Text blocks
  en: any[];
}
```

### Helper Function
```typescript
function getLocalized(field: LocalizedString, locale: Locale): string {
  return field[locale] || field.lt || field.en || '';
}
```

---

## SEO Impact

### Benefits of This Approach:
✅ Both languages indexed by Google  
✅ Users land in appropriate language (via hreflang)  
✅ Meta tags in user's language  
✅ Job postings visible in both language searches  

### Meta Tags:
```html
<html lang="lt"> <!-- or "en" based on active language -->
<meta name="description" content="[Localized description]">
<link rel="alternate" hreflang="lt" href="/" />
<link rel="alternate" hreflang="en" href="/" />
```

---

## Testing Checklist

### After Phase 3:
- [ ] Default loads in Lithuanian
- [ ] Click EN → all content switches
- [ ] Click LT → switches back
- [ ] Refresh page → preference remembered
- [ ] All jobs display in active language
- [ ] All homepage sections in active language
- [ ] Navigation in active language
- [ ] Buttons in active language
- [ ] Footer in active language
- [ ] Missing English shows Lithuanian fallback

---

## Long-Term Workflow

### Weekly:
- Add new jobs in Lithuanian
- Translate to English when time permits

### Monthly:
- Review incomplete translations
- Add English versions for key content

### As Needed:
- Update homepage sections (both languages)
- Add testimonials (both languages)
- Update FAQ (both languages)

---

## Translation Resources

### For English → Lithuanian:
- Google Translate (quick reference)
- [vertimas.lt](https://www.vertimas.lt/) (Lithuanian translator)
- Professional translator (for important content)

### Common Mistakes to Avoid:
- ❌ Direct word-for-word translation
- ❌ Using formal "Jūs" everywhere (mix formal/informal appropriately)
- ✅ Adapt to Lithuanian business culture
- ✅ Keep same friendly tone as English

---

**Ready for Phase 3!** 

This comprehensive bilingual setup will make your site accessible to both Lithuanian and international clients. 🌍 🇱🇹 🇬🇧
