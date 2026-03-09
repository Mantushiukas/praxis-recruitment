# Praxis Recruitment — Branding Guide

**Company Name:** Praxis Recruitment  
**Project:** HR Agency Website  
**Date:** February 16, 2026

---

## Brand Identity

### Company Name
**Praxis Recruitment**

### Tagline
**"RECRUITMENT BY PRACTITIONERS"**

This tagline emphasizes expertise and hands-on experience in recruitment.

### Specializations
- Technology
- Digital Marketing
- HR

---

## Logo Specifications

### Logo Files

**Current logo file:**
- `public/images/logo.png` — ✅ Added (1024x600px PNG)

**Additional formats to create (optional):**
```
public/
└── images/
    ├── logo.png              # ✅ Current (primary logo)
    ├── logo.svg              # ⭕ SVG version (for better scaling)
    ├── logo-light.png        # ⭕ Light version (if needed for dark backgrounds)
    ├── logo-icon.png         # ⭕ Icon only (for favicon, mobile)
    └── favicon.ico           # ⭕ Browser favicon (16x16, 32x32)
```

**Logo specifications:**
- **Orientation:** Horizontal
- **Aspect ratio:** ~1.7:1 (width:height)
- **Style:** Bold "PRAXIS" text with purple checkmark accent replacing the X
- **Tagline:** "RECRUITMENT BY PRACTITIONERS" below main text
- **Best on:** White or light backgrounds

### Logo Usage Guidelines

**Header (Desktop):**
- Size: Height ~40-48px
- Format: SVG (preferred) or PNG
- Position: Top-left corner
- Link: Home page (/)

**Header (Mobile):**
- Size: Height ~32-36px
- Format: Same as desktop
- Collapsed to icon if space tight

**Footer:**
- Size: Height ~32px (smaller than header)
- Format: Same as desktop
- Optional: can use text-only version

**Favicon:**
- Size: 16×16, 32×32, 180×180 (multiple sizes)
- Format: .ico or .png
- Generated from logo icon/mark

---

## Implementation in Code

### Logo Component (`components/Logo.tsx`)

```typescript
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'header' | 'footer'
  className?: string
}

export const Logo = ({ variant = 'header', className = '' }: LogoProps) => {
  const height = variant === 'header' ? 40 : 32
  
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Praxis Recruitment - Recruitment by Practitioners"
        width={height * 1.7} // Logo aspect ratio ~1.7:1
        height={height}
        priority={variant === 'header'}
        className="h-auto w-auto"
      />
    </Link>
  )
}
```

### Fallback (Before Logo is Ready)

If logo files aren't ready yet, use text-based logo:

```typescript
export const Logo = ({ variant = 'header', className = '' }: LogoProps) => {
  const textSize = variant === 'header' ? 'text-xl' : 'text-lg'
  
  return (
    <Link href="/" className={`flex items-center font-bold ${textSize} ${className}`}>
      <span className="text-primary">Praxis</span>
      <span className="text-secondary ml-1">Recruitment</span>
    </Link>
  )
}
```

---

## Color Palette

### Primary Colors (Extracted from Logo)

**Brand colors:**
- **Primary (Dark Gray):** #404040 / rgb(64, 64, 64) — Main text and logo
- **Accent (Purple):** #9B8FD9 / rgb(155, 143, 217) — Checkmark accent, highlights
- **Accent Light (Lavender):** #A89FDD / rgb(168, 159, 221) — Gradient end, hover states
- **Background:** #FFFFFF (White)
- **Text Primary:** #1F2937 (Near black for body text)
- **Text Secondary:** #6B7280 (Gray for secondary text)

### Tailwind Configuration

Update `tailwind.config.ts` with Praxis Recruitment brand colors:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#404040',    // Dark gray (logo text)
        accent: '#9B8FD9',     // Purple (checkmark)
        'accent-light': '#A89FDD', // Lavender (gradient)
      },
      primary: {
        DEFAULT: '#404040',
        50: '#F7F7F7',
        100: '#E8E8E8',
        200: '#D1D1D1',
        300: '#B9B9B9',
        400: '#A2A2A2',
        500: '#404040',
        600: '#363636',
        700: '#2D2D2D',
        800: '#242424',
        900: '#1A1A1A',
      },
      accent: {
        DEFAULT: '#9B8FD9',
        50: '#F5F4FC',
        100: '#EBE9F9',
        200: '#D7D3F3',
        300: '#C3BDED',
        400: '#AFA6E7',
        500: '#9B8FD9',
        600: '#8477C5',
        700: '#6C5FAF',
        800: '#554792',
        900: '#3E2F76',
      },
    },
  },
}
```

---

## Typography

### Fonts

**Recommended Google Fonts:**
- **Headings:** Inter, Poppins, or Montserrat (modern, professional)
- **Body:** Inter or Open Sans (readable, clean)

**Implementation with `next/font`:**

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

---

## Contact Information

### Company Details
- **Name:** Praxis Recruitment
- **Registration Number:** *(To be added)*
- **Contact Email:** *(e.g., info@praxisrecruitment.lt)*
- **Phone:** *(Optional)*
- **LinkedIn:** *(Optional)*
- **Address:** *(Optional for footer)*

---

## Favicon & Meta Images

### Files Needed

```
public/
├── favicon.ico              # 16×16, 32×32
├── apple-touch-icon.png     # 180×180 (for iOS)
├── favicon-16x16.png
├── favicon-32x32.png
└── og-image.png             # 1200×630 (Open Graph for social sharing)
```

### Favicon Implementation

Add to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Praxis Recruitment | Talent Acquisition Specialists',
  description: 'Strategic recruitment services for Technology, Digital Marketing, and HR roles.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    images: ['/og-image.png'],
  },
}
```

---

## Logo Preparation Checklist

Before adding logo to the site:

- [ ] Logo file in SVG format (scalable, small file size)
- [ ] Transparent background (for placement on any color)
- [ ] Horizontal orientation suitable for header
- [ ] Icon/mark version for favicon and mobile
- [ ] Test logo visibility on both light and dark backgrounds
- [ ] Optimize SVG (remove unnecessary code with SVGO)
- [ ] Generate favicon files (use realfavicongenerator.net)
- [ ] Create Open Graph image (1200×630px) with logo + tagline

---

## Quick Logo Addition Guide

**When you have the logo file:**

1. **Add logo to project:**
   ```bash
   # Place file in public/images/
   public/images/logo.svg
   ```

2. **Update Logo component:**
   ```typescript
   // components/Logo.tsx
   // Change src="/images/logo.svg" to match your filename
   ```

3. **Adjust dimensions:**
   - Measure actual logo width/height ratio
   - Update `width={height * ratio}` in Logo component

4. **Test:**
   - Check logo displays correctly in header
   - Test on mobile (logo should resize)
   - Verify link to home page works

---

## Brand Voice & Messaging

### Tone
- **Professional** but approachable
- **Clear** and direct communication
- **Expert** without being intimidating
- **Lithuanian-friendly** (support local language where appropriate)

### Key Messages
- Strategic recruitment partnership
- Focus on quality over quantity
- Fast, efficient process
- Transparent pricing (10–16% of annual salary)
- Specialized in Technology, Digital Marketing, HR

---

**Next Steps:**
1. Finalize logo design
2. Export in required formats (SVG, PNG, ICO)
3. Add to `public/images/` folder
4. Logo will automatically appear in header and footer

This structure ensures easy logo integration without code changes later!
