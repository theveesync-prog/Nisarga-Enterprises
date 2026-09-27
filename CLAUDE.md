# Nisarga Events - Development Guide

## Project Overview

A modern event management platform built on Next.js. Extracted and adapted UI/UX structure from chetanas-beauty-lounge repository, customized for event management industry.

## Tech Stack
- **Framework**: Next.js 16.3.6 with TypeScript
- **Styling**: Tailwind CSS 4 + PostCSS
- **Icons**: Lucide React
- **Target**: Event management industry

## Directory Structure

```
/
├── app/
│   ├── globals.css          # Theme & global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── EventGrid.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── FAQ.tsx
│       └── Contact.tsx
├── lib/
│   ├── constants.ts         # Site config
│   └── utils.ts             # Helpers
└── public/                  # Static assets
```

## Key Files

### Configuration
- `package.json` - Dependencies & scripts
- `tsconfig.json` - TypeScript config
- `next.config.ts` - Next.js config with CSP & security headers
- `tailwind.config.ts` - Tailwind CSS config
- `components.json` - Component library config

### Constants & Configuration
- `lib/constants.ts` - Update for deployment
  - SITE_URL
  - CONTACT_EMAIL, CONTACT_PHONE
  - BUSINESS_ADDRESS
  - SOCIAL_LINKS
  - CONTACT_WHATSAPP

### Theme
- `app/globals.css` - CSS variables, color palette, utilities
  - Color palette: #6366f1 (primary), #ec4899 (accent)
  - Fonts: Plus Jakarta Sans (display), DM Sans (body)

## Component Patterns

### Section Components
Located in `components/sections/`:
- Hero: Landing section with CTA
- Features: Feature grid with icons
- FAQ: Accordion-style Q&A
- Contact: Contact form with info

### Reusable Components
- Navbar: Fixed header with dropdowns & mobile menu
- Footer: Multi-column footer with links
- EventGrid: Event types showcase

## Development Workflow

### Adding a New Section
1. Create component in `components/sections/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to component list
4. Style using Tailwind & CSS variables

### Updating Navigation
Edit `components/Navbar.tsx`:
- `navLinks`: Main navigation items
- `eventLinks`: Dropdown items

### Updating Event Types
Edit `components/EventGrid.tsx`:
- `eventTypes` array: Event categories

### Updating FAQ
Edit `components/sections/FAQ.tsx`:
- `faqs` array: Questions and answers

## Customization Checklist

- [ ] Update constants in `lib/constants.ts`
- [ ] Add logo to `public/logo/`
- [ ] Update navigation in `Navbar.tsx`
- [ ] Customize event types in `EventGrid.tsx`
- [ ] Update FAQ questions in `FAQ.tsx`
- [ ] Add contact form handling logic
- [ ] Replace og-image in `public/`
- [ ] Update color scheme if needed

## Design System

### Colors (CSS variables in globals.css)
- Primary: #6366f1
- Accent: #ec4899
- Dark: #1f2937
- Light: #f9fafb

### Typography
- Display: Plus Jakarta Sans
- Body: DM Sans
- System fallback available

### Spacing
- Uses Tailwind's default spacing scale
- Container max-width: 6rem = 1440px

### Utilities
- `.btn-primary`: Primary gradient button
- `.btn-accent`: Accent gradient button
- `.text-gradient`: Gradient text effect
- `.card-hover`: Card hover animations
- `.glass-effect`: Glassmorphic styling

## Performance Considerations

- Fonts preconnected in layout.tsx
- Images should use Next.js Image component
- Components use React 19 with automatic memoization
- CSS optimized with Tailwind v4

## Security Headers

Configured in `next.config.ts`:
- Content-Security-Policy
- X-Content-Type-Options
- X-Frame-Options
- Strict-Transport-Security
- Permissions-Policy

## Responsive Design

Mobile-first approach:
- Mobile: Full-width sections
- Tablet (md): 2-column grids
- Desktop (lg): Full layouts with cards
- Navbar: Mobile menu, desktop dropdown

## Next Steps / Phase 3

Tasks for future enhancement:
- Payload CMS integration
- Event booking system
- Payment processing
- Event detail pages (dynamic routes)
- Blog section
- User authentication
- Admin dashboard
- Email notifications
- Image optimization

## Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production
npm run lint     # Run ESLint
```

## Git Workflow

- Branch: `claude/eager-pasteur-y4lnhw`
- Commit with descriptive messages
- Push to designated branch
- Update constants before production

## Notes

- No external CMS integrated yet (Phase 1 & 2 complete)
- Static content - ready for dynamic data integration
- All components fully responsive
- SEO-optimized with structured data
- Production-ready base, awaiting CMS & backend
