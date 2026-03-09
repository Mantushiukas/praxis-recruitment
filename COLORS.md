# Praxis Recruitment — Color System

**Brand Colors Extracted from Logo**

---

## Primary Palette

### Dark Gray (Primary)
**Usage:** Logo text, headings, primary buttons, footer background

```
HEX:  #404040
RGB:  64, 64, 64
HSL:  0, 0%, 25%
```

**Tailwind:** `text-primary` or `bg-primary`

---

### Purple (Accent)
**Usage:** Checkmark in logo, CTAs, links, highlights, active states

```
HEX:  #9B8FD9
RGB:  155, 143, 217
HSL:  249, 50%, 71%
```

**Tailwind:** `text-accent` or `bg-accent`

---

### Lavender (Accent Light)
**Usage:** Hover states, gradients, subtle highlights

```
HEX:  #A89FDD
RGB:  168, 159, 221
HSL:  249, 49%, 75%
```

**Tailwind:** `text-accent-light` or `bg-accent-light`

---

## Supporting Colors

### White (Background)
```
HEX:  #FFFFFF
RGB:  255, 255, 255
```

### Near Black (Text Primary)
```
HEX:  #1F2937
RGB:  31, 41, 55
```

### Gray (Text Secondary)
```
HEX:  #6B7280
RGB:  107, 114, 128
```

---

## Usage Guidelines

### Backgrounds
- **Main:** White (#FFFFFF)
- **Dark sections:** Primary (#404040)
- **Accent sections:** Accent light (#A89FDD) at 10-20% opacity

### Text
- **Headings:** Primary (#404040)
- **Body:** Near black (#1F2937)
- **Secondary/captions:** Gray (#6B7280)

### Interactive Elements
- **Primary CTA:** Accent (#9B8FD9) background, white text
- **Secondary CTA:** White background, accent border, accent text
- **Links:** Accent (#9B8FD9), darker on hover
- **Hover states:** Accent light (#A89FDD)

### Borders
- **Light borders:** Gray-200 (#E5E7EB)
- **Medium borders:** Gray-300 (#D1D5DB)
- **Accent borders:** Accent (#9B8FD9)

---

## Color Combinations

### High Contrast (WCAG AAA)
- White text on Primary (#404040) ✅
- White text on Accent (#9B8FD9) ✅
- Primary text on White ✅

### Medium Contrast (WCAG AA)
- Accent (#9B8FD9) text on White ✅
- Near black (#1F2937) on White ✅

### Avoid
- Accent light (#A89FDD) text on White (low contrast)
- Gray (#6B7280) on Accent backgrounds

---

## Gradient Options

### Purple Gradient (for backgrounds, accents)
```css
background: linear-gradient(135deg, #9B8FD9 0%, #A89FDD 100%);
```

### Dark to Accent (for hero sections)
```css
background: linear-gradient(180deg, #404040 0%, #9B8FD9 100%);
```

---

## Tailwind Classes Quick Reference

### Text Colors
- `text-primary` → #404040 (dark gray)
- `text-accent` → #9B8FD9 (purple)
- `text-accent-light` → #A89FDD (lavender)

### Background Colors
- `bg-primary` → #404040
- `bg-accent` → #9B8FD9
- `bg-accent-light` → #A89FDD

### Border Colors
- `border-accent` → #9B8FD9
- `border-accent-light` → #A89FDD

### Hover States
- `hover:bg-accent-light`
- `hover:text-accent`

---

## CSS Variables (for globals.css)

```css
:root {
  /* Brand colors */
  --color-primary: #404040;
  --color-accent: #9B8FD9;
  --color-accent-light: #A89FDD;
  
  /* Text colors */
  --color-text-primary: #1F2937;
  --color-text-secondary: #6B7280;
  
  /* Backgrounds */
  --color-bg-primary: #FFFFFF;
  --color-bg-dark: #404040;
  
  /* Borders */
  --color-border-light: #E5E7EB;
  --color-border-medium: #D1D5DB;
}
```

---

## Example Components

### Primary Button
```tsx
<button className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors">
  Contact Us
</button>
```

### Secondary Button
```tsx
<button className="bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">
  Learn More
</button>
```

### Heading
```tsx
<h1 className="text-primary text-4xl font-bold">
  Praxis Recruitment
</h1>
```

### Link
```tsx
<a href="#" className="text-accent hover:text-accent-light underline">
  Read more
</a>
```

---

**Color system ready for implementation!** 🎨
