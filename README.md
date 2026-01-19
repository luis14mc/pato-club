# PATO CLUB — Premium Streetwear

> E-commerce platform for exclusive streetwear collection with luxury design and exceptional quality.

![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)

---

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Product Catalog](#product-catalog)
- [Roadmap](#roadmap)
- [License](#license)

---

## Description

**Pato Club** is a premium e-commerce platform specializing in luxury streetwear. Built with modern web technologies, the platform delivers an exceptional user experience with optimized performance, clean design, and seamless WhatsApp integration for direct sales.

### Key Features

- Product catalog with 11 items across 6 categories
- Interactive product modal with size and color selection
- Direct WhatsApp purchase integration
- Fully responsive design (mobile, tablet, desktop)
- Custom 404 page with brand identity
- Performance optimized with Next.js 16 + Turbopack
- Strict TypeScript implementation
- Accessibility compliant (WCAG 2.1 AA)

---

## Tech Stack

### Core Technologies

- **Next.js 16.1.2** - React Framework with App Router and Turbopack
- **TypeScript 5.0+** - Static type checking and enhanced IDE support
- **React 19** - Modern UI library with latest features
- **Tailwind CSS 4.1** - Utility-first CSS framework with custom theme

### Additional Libraries

- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit
- **Google Fonts** - Bricolage Grotesque (headings) + Work Sans (body)

### Development Tools

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS transformations with @tailwindcss/postcss
- **Git** - Version control

---

## Installation

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Setup

```bash
# Clone repository
git clone https://github.com/luis14mc/pato-club.git
cd pato-club

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

### Available Scripts

```bash
npm run dev        # Development server (localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # Code linting
```

---

## Project Structure

```
pato-club/
├── app/
│   ├── globals.css           # Global styles + Tailwind theme
│   ├── layout.tsx            # Root layout with fonts configuration
│   ├── page.tsx              # Homepage with state management
│   └── not-found.tsx         # Custom 404 page
│
├── components/
│   ├── Footer.tsx            # Three-column footer
│   ├── Hero.tsx              # Hero section
│   ├── Isotipo.tsx           # Brand isotipo component
│   ├── Logo.tsx              # Brand logo component
│   ├── Navbar.tsx            # Responsive navigation bar
│   ├── ProductCard.tsx       # Product card with hover effects
│   ├── ProductModal.tsx      # Interactive product modal
│   ├── ValentineBanner.tsx   # Special edition banner
│   └── WhatsAppButton.tsx    # Floating support button
│
├── data/
│   └── products.ts           # Product catalog (11 items)
│
├── types/
│   └── product.ts            # TypeScript Product interface
│
├── public/
│   ├── products/             # Product images (11 JPG files)
│   ├── isotipo.png           # Brand isotipo
│   ├── Pato black.png        # Black logo variant
│   └── Pato white.png        # White logo variant
│
├── docs/                     # Technical documentation
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

---

## Design System

### Color Palette

**Primary Colors**

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#ECE0C8` | Main background, mobile menu |
| Black | `#000000` | Primary text, buttons |
| White | `#FFFFFF` | Modal backgrounds, cards |

**Secondary Colors**

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#014B28` | Primary action buttons (COMPRAR, WhatsApp) |
| Bronze | `#A27852` | Accents, hover states |
| Gold | `#D09306` | Active links, special badges |

### Typography

- **Headings:** Bricolage Grotesque (Bold, 700)
- **Body:** Work Sans (Regular 400 / Semibold 600)
- **Special:** `tracking-wider` for uppercase labels

### Brand Assets

- **Primary Logo:** `Pato black.png` / `Pato white.png`
- **Isotipo:** `isotipo.png` (brand icon)
- **Location:** `/public/` directory

---

## Product Catalog

### Overview

- **Total Products:** 11
- **Categories:** 6 (Special Edition, Basics, Hoodies, Sweaters, Jackets, Pants, Accessories)
- **Price Range:** L. 395 - L. 1,245
- **Average Price:** L. 721.82

### Categories

| Category | Products | Example |
|----------|----------|---------|
| Special Edition | 2 | Love is Red (L. 945) |
| Basics | 2 | Essential Tee White (L. 545) |
| Hoodies | 2 | Hoodie Black Premium (L. 945) |
| Sweaters | 1 | Crewneck Grey (L. 795) |
| Jackets | 1 | Varsity Jacket Olive (L. 1,245) |
| Pants | 1 | Wide Legs Pants (L. 845) |
| Accessories | 2 | Cap Navy (L. 395) |

Full catalog details available in: `CATALOG_SUMMARY.md`

---

## Roadmap

### Version 1.0 (Current - Production Ready)

- [x] Complete product catalog with 11 items
- [x] Interactive product modal
- [x] WhatsApp integration for direct sales
- [x] Responsive design (mobile, tablet, desktop)
- [x] Custom 404 page
- [x] Complete technical documentation
- [x] Production build optimization

### Version 1.1 (Q1 2026)

- [ ] Advanced category filtering
- [ ] Product search functionality
- [ ] Wishlist/Favorites system
- [ ] Newsletter subscription
- [ ] Blog/Magazine section

### Version 2.0 (Q2 2026)

- [ ] Real inventory management system
- [ ] Multiple product variants (colors, sizes)
- [ ] Full shopping cart functionality
- [ ] Integrated checkout process
- [ ] Admin dashboard
- [ ] Analytics integration

---

## Performance

### Build Statistics

```
Compilation Time: 3.2s
TypeScript Errors: 0
Build Status: SUCCESS
```

### Target Metrics

| Metric | Target | Tool |
|--------|--------|------|
| Performance | > 90 | Lighthouse |
| Accessibility | > 95 | Lighthouse |
| Best Practices | > 90 | Lighthouse |
| SEO | > 90 | Lighthouse |

---

## Deployment

### Vercel (Recommended)

```bash
# Connect repository to Vercel
# Framework: Next.js (auto-detected)
# Build Command: npm run build
# Output Directory: .next
# Deploy: Automatic on push to master
```

Deploy URL: `https://pato-club.vercel.app`

### Alternative Platforms

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

---

## Configuration

### Environment Variables (Optional)

Create `.env.local` file:

```env
# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=504XXXXXXXX

# Social Media
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/patoclub
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@patoclub
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/patoclub

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Documentation

### Technical Documents

- `AUDIT_REPORT.md` - Complete QA report
- `PRODUCTION_CHECKLIST.md` - Deployment checklist
- `CATALOG_SUMMARY.md` - Product catalog overview
- `BRAND_IDENTITY.md` - Visual identity guidelines
- `IDENTITY_IMPLEMENTATION.md` - Technical implementation guide

---

## License

Copyright (c) 2026 Pato Club. All rights reserved.

This project is proprietary software developed for Pato Club.

---

## Developer

**Ing. Luis Martínez**  
Software Developer

**Company:** Pato Club  
**Project:** Premium Streetwear E-commerce Platform  
**Year:** 2026

---

## Contact

**Pato Club**

- Website: patoclub.com
- Instagram: @patoclub
- TikTok: @patoclub
- Email: info@patoclub.com
