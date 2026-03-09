# Design Update — Apple-Inspired Typography

**Date:** February 16, 2026  
**Update:** Lighter, cleaner typography similar to Apple's design language

---

## Changes Made

### 1. Font Family
**Before:** Inter (Google Font)  
**After:** System font stack (Apple-style)

```
-apple-system
BlinkMacSystemFont
SF Pro Display
Segoe UI
Helvetica Neue
Arial
sans-serif
```

**Benefits:**
- Native to macOS/iOS (SF Pro Display)
- Faster loading (no external font)
- Matches Apple's aesthetic
- Better performance

---

### 2. Font Weights

**Before:**
- Headings: `font-bold` (700)
- Body: Default (400)
- Buttons: `font-semibold` (600)

**After:**
- H1: `font-semibold` (600) - Main hero only gets 700
- H2-H6: `font-semibold` (600)
- Body: `font-normal` (400)
- Buttons: `font-medium` (500)

**Result:** Lighter, more refined feel

---

### 3. Text Colors

**Before:**
- Body text: `text-gray-900` (very dark)
- Secondary: `text-gray-600`

**After:**
- Body text: `text-gray-700` (softer)
- Secondary: `text-gray-500` (lighter)

**Result:** Less harsh, more elegant

---

### 4. Letter Spacing

**Added:** Tighter letter spacing for headings
- `tracking-tight` (-0.02em) on all headings
- Creates more premium, Apple-like feel

---

### 5. Button Styles

**Before:**
- Heavy shadows (`shadow-lg`)
- Bold borders (`border-2`)
- Font weight 600

**After:**
- Subtle shadows (`shadow-sm`)
- Lighter borders (`border`)
- Font weight 500
- More rounded (`rounded-xl` instead of `rounded-lg`)

**Result:** Cleaner, more modern buttons

---

### 6. Font Smoothing

**Added:**
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

**Result:** Smoother text rendering on all platforms

---

## Visual Comparison

### Headings
```
Before: Bold (700) + Gray-900
After:  Semibold (600) + Gray-700 + Tight tracking
```

### Body Text
```
Before: Regular (400) + Gray-600
After:  Normal (400) + Gray-500
```

### Buttons
```
Before: Semibold (600) + Heavy shadow + Sharp corners
After:  Medium (500) + Light shadow + Rounded corners
```

---

## Files Updated

- ✅ `app/layout.tsx` — Removed Inter, added system fonts
- ✅ `app/globals.css` — Updated base styles, font smoothing
- ✅ `tailwind.config.ts` — Added Apple font stack
- ✅ `components/Hero.tsx` — Lighter weights, tighter tracking
- ✅ `components/Header.tsx` — Updated button weight
- ✅ `components/Services.tsx` — Lighter headings & text
- ✅ `components/Specializations.tsx` — Refined typography
- ✅ `components/RecentJobs.tsx` — Cleaner job cards
- ✅ `components/AboutPreview.tsx` — Softer text
- ✅ `components/TrustStrip.tsx` — Lighter stats

---

## Apple Design Principles Applied

✅ **System fonts** — Use native fonts for best performance  
✅ **Lighter weights** — Semibold (600) instead of bold (700)  
✅ **Generous spacing** — More breathing room  
✅ **Subtle shadows** — Less dramatic, more refined  
✅ **Tight tracking** — Premium letter spacing on headlines  
✅ **Softer colors** — Gray-500 instead of Gray-600  
✅ **Rounded corners** — More modern (rounded-xl)  

---

## Result

The website now has:
- **Lighter, airier feel** — Less "heavy" typography
- **More elegant** — Refined font weights
- **Better readability** — Softer text colors
- **Modern aesthetic** — Apple-inspired design language
- **Faster loading** — No external fonts to download

---

**Refresh http://localhost:3000 to see the updated design!** ✨
