# Verdant Engineering Website

Premium engineering consultancy website built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- VS Code (recommended)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will automatically reload as you make changes.

## Project Structure

```
verdant-engineering/
├── app/
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Engineering Services page
│   ├── sectors/
│   │   └── page.tsx         # Industry Sectors page
│   ├── compliance/
│   │   └── page.tsx         # QHSE & Compliance page
│   ├── portfolio/
│   │   └── page.tsx         # Projects/Portfolio page
│   └── contact/
│       └── page.tsx         # Contact & Enquiry page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with links
│   ├── Hero.tsx             # Hero section component
│   ├── SectionIntro.tsx     # Section introduction blocks
│   ├── ServiceCard.tsx      # Service discipline cards
│   ├── SectorCard.tsx       # Industry sector cards
│   ├── CTABanner.tsx        # Call-to-action banners
│   └── ContactForm.tsx      # Contact form with validation
├── lib/
│   ├── constants.ts         # Navigation, services, sectors, case studies
│   └── types.ts             # TypeScript interfaces
├── public/
│   └── images/              # Hero images, cards, backgrounds
├── package.json
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── README.md                # This file
```

## Key Features

### Pages (7 Total)
- **Home** - Brand overview and capability showcase
- **About** - Company story, team, values, timeline
- **Services** - Seven engineering disciplines with integration methodology
- **Sectors** - Five core industry verticals with expertise details
- **Compliance** - QHSE framework and environmental commitment
- **Portfolio** - Case studies and project experience
- **Contact** - Enquiry form and contact information

### Components
- Responsive Header with mobile hamburger menu
- Fixed navigation with sticky positioning
- Footer with 5-column link structure
- Hero sections with image overlays
- Service and sector cards with hover states
- Contact form with 13 fields and validation
- CTA banners throughout
- Responsive grid layouts (1-col, 2-col, 3-col, 4-col)

### Design System
- **Colours**: Navy, Graphite, Charcoal, Light Steel, Warm Sand, Teal
- **Typography**: Montserrat (headers), Inter (body)
- **Spacing**: 8px baseline grid system
- **Border Radius**: 4px for subtle industrial feel
- **Animations**: Smooth transitions, hover states

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 1024px (lg)
- Hamburger menu on mobile, full nav on desktop
- Optimized image sizing for all screens
- Touch-friendly interactive elements

## Content Management

### Services (7 Disciplines)
Located in `lib/constants.ts`:
- Process Engineering
- Technical Safety
- Control & Instrumentation
- Piping & Plot Planning
- Mechanical Static Equipment
- Mechanical Rotating Equipment
- Pipeline Engineering

### Sectors (5 Verticals)
Located in `lib/constants.ts`:
- Oil & Gas Processing
- Cryogenic (LNG/LPG/NGL)
- Refining & Petrochemicals
- Storage & Infrastructure
- Utilities

### Case Studies
Located in `lib/constants.ts`:
- LNG Production System Optimization
- Offshore Platform Safety System Upgrade
- Refinery Debottlenecking Project

All content is stored in TypeScript constants for easy editing.

## Images

All images are referenced from `/public/images/` directory with descriptive names:

**Hero Images:**
- `home-hero-industrial-oman.jpg`
- `about-engineering-team.jpg`
- `services-hero.jpg`
- `sectors-hero.jpg`
- `qhse-compliance.jpg`
- `projects-capabilities.jpg`
- `contact-oman-office.jpg`

**Service Cards (7 total):**
- `service-process-engineering.jpg`
- `service-technical-safety.jpg`
- `service-instrumentation-control.jpg`
- `service-piping-plotplan.jpg`
- `service-mechanical-static.jpg`
- `service-mechanical-rotating.jpg`
- `service-pipeline.jpg`

**Sector Cards (5 total):**
- `sectors-oil-gas.jpg`
- `sectors-cryogenic.jpg`
- `sectors-refining.jpg`
- `sectors-storage.jpg`
- `sectors-utilities.jpg`

**Case Study Images:**
- `case-lng-optimization.jpg`
- `case-offshore-safety.jpg`
- `case-refinery-debot.jpg`

See `public/images/README.md` for full specifications.

## Styling

Tailwind CSS with custom configuration:
- Extended colour palette with engineering-focused hues
- Custom spacing scale (8px baseline)
- Custom typography scale
- Box shadow utilities
- Border radius 4px for subtle industrial aesthetic

Edit `tailwind.config.ts` to customize colours, spacing, or fonts.

## Forms & CTA

### Contact Form (13 fields)
1. Name (required)
2. Organization (required)
3. Email (required)
4. Phone (required)
5. Project Type (dropdown, required)
6. Primary Sector (dropdown, required)
7. Service Disciplines (checkboxes, optional)
8. Project Timeline (dropdown, optional)
9. Project Budget Range (dropdown, optional)
10. Message (textarea, required)
11. Preferred Contact Method (radio buttons)
12. Privacy Consent (checkbox, required)
13. Submit button

Form validation and success message included.

## CTA Navigation

- **Homepage Hero**: "Explore Our Services" → /services
- **Service Cards**: "Discuss This Discipline" → /contact
- **Sector Cards**: "Discuss Your Project" → /contact
- **Portfolio**: "Discuss a Similar Project" → /contact
- **General CTAs**: "Get in Touch" → /contact

## SEO & Metadata

Each page includes:
- Unique title and description
- Meta tags for search engines
- Open Graph ready structure
- Structured heading hierarchy
- Alt text for all images

## Build & Deployment

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Next.js Image optimization for automatic sizing
- Server-side rendering (SSR) by default
- Lazy loading for below-fold content
- Minimal JavaScript on frontend
- CSS-in-JS compiled at build time

## Customization

### Add New Service
Edit `lib/constants.ts` and add to `SERVICES` array:
```typescript
{
  id: 'discipline-id',
  title: 'Discipline Name',
  value: 'Category',
  description: '...',
  items: [],
  impact: '...',
  image: '/images/service-name.jpg',
}
```

### Add New Sector
Edit `lib/constants.ts` and add to `SECTORS` array:
```typescript
{
  id: 'sector-id',
  name: 'Sector Name',
  context: '...',
  projects: [],
  expertise: '...',
  why: '...',
  image: '/images/sectors-name.jpg',
}
```

### Change Colours
Edit `tailwind.config.ts` theme.extend.colors object.

### Update Copy
All page copy is in component files (app/*.tsx). Edit directly and save.

## License

© 2024 Verdant Engineering. All rights reserved.

## Support

For development questions or technical issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
