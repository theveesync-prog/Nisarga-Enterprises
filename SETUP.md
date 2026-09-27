# Nisarga Events - Setup Guide

## Initial Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://events.nisargaenterprises.com
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## Project Structure Overview

### Key Directories
- **app/**: Next.js app directory with layouts and pages
- **components/**: Reusable React components
  - `Navbar.tsx`: Navigation with dropdowns
  - `Footer.tsx`: Footer with links and contact info
  - `EventGrid.tsx`: Event types showcase
  - **sections/**: Page sections (Hero, Features, FAQ, Contact)
- **lib/**: Utilities and constants
  - `constants.ts`: Site configuration
  - `utils.ts`: Helper functions
- **public/**: Static assets (to add: images, logos, favicon)

### Component Hierarchy
```
Root Layout
├── Navbar (fixed header)
├── Page Content
│   ├── Hero Section
│   ├── Event Grid
│   ├── Features Section
│   ├── FAQ Section
│   └── Contact Section
└── Footer
```

## Customization Guide

### 1. Update Site Config (lib/constants.ts)
```typescript
export const SITE_NAME = "Your Company";
export const CONTACT_EMAIL = "your@email.com";
export const CONTACT_PHONE = "+91-XXXXXXXXXX";
export const CONTACT_WHATSAPP = "https://wa.me/...";
```

### 2. Add Your Logo
Place your logo in `/public/logo/` and update Navbar.tsx:
```typescript
<Image
  src="/logo/your-logo.png"
  alt="Your Company"
  width={150}
  height={40}
/>
```

### 3. Update Colors
Edit `app/globals.css` - change the `@theme` block colors:
```css
--color-brand-primary: #your-color;
--color-brand-accent: #your-accent;
```

### 4. Update Navigation Links
Edit `components/Navbar.tsx` - update `navLinks` and `eventLinks` arrays.

### 5. Update Event Types
Edit `components/EventGrid.tsx` - modify the `eventTypes` array with your event categories.

### 6. Update FAQ Items
Edit `components/sections/FAQ.tsx` - update the `faqs` array with your questions and answers.

## Development Workflow

### Adding a New Component
1. Create file in `components/` or `components/sections/`
2. Export as default component
3. Import and use in `app/page.tsx` or other components

### Adding a New Page
1. Create directory under `app/` (e.g., `app/events/`)
2. Add `page.tsx` in that directory
3. Next.js automatically creates the route

### Styling
- Use Tailwind CSS utility classes
- Custom classes defined in `app/globals.css`
- Use `cn()` utility for conditional classes

## Building for Production

```bash
npm run build
npm start
```

## Next Phase: CMS Integration (Phase 3)

When ready, integrate Payload CMS:
1. Install Payload CMS packages
2. Create collections for events, testimonials, blog posts
3. Update pages to fetch from CMS
4. Add admin interface

## Deployment Options

### Vercel (Recommended)
- Connect GitHub repository
- Auto-deploys on push
- Free tier available

### Other Options
- Netlify
- AWS Amplify
- Self-hosted Node.js server

## Performance Tips

1. **Images**: Optimize with Next.js Image component
2. **Fonts**: Already preconnected in layout.tsx
3. **Code Splitting**: Automatic via Next.js
4. **Caching**: Configure in next.config.ts

## Security Checklist

- [ ] Content Security Policy headers (configured)
- [ ] Environment variables not committed
- [ ] HTTPS enabled in production
- [ ] Rate limiting for forms (to implement)
- [ ] Input validation (to implement)

## Common Tasks

### Change Color Scheme
1. Update `app/globals.css` theme variables
2. All components use CSS variables - instant updates

### Add Contact Form Handling
Edit `components/sections/Contact.tsx` - add backend API call in `handleSubmit()`

### Add Testimonials
Create `components/sections/Testimonials.tsx` and add to page.

### Add Blog Section
1. Create `app/blog/` directory
2. Create dynamic route `[slug]/page.tsx`
3. Create blog listing page

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### CSS not loading
- Clear `.next/` folder
- Restart dev server

### Components not updating
- Check import paths
- Ensure component is exported as default

## Support Files to Update

1. `public/images/og-image.jpg` - OG image for social sharing
2. `lib/constants.ts` - All contact info and URLs
3. Navigation in `Navbar.tsx`
4. Event types in `EventGrid.tsx`
5. FAQs in `FAQ.tsx`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
