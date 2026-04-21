# Getting Started with Verdant Engineering Website

## Installation (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

This installs all required packages including Next.js, React, TypeScript, and Tailwind CSS.

### Step 2: Start Development Server
```bash
npm run dev
```

The website will start at [http://localhost:3000](http://localhost:3000)

### Step 3: Open in Browser
Visit `http://localhost:3000` in your browser. You should see the homepage with full navigation.

## What You Get

✓ 7 complete pages (Home, About, Services, Sectors, Compliance, Portfolio, Contact)
✓ Fully responsive design (mobile, tablet, desktop)
✓ Professional component library
✓ Contact form with 13 fields
✓ Optimized images with placeholder structure
✓ TypeScript for type safety
✓ Tailwind CSS for styling
✓ SEO metadata on every page

## Next Steps

### 1. Add Images (Required for Production)
1. Prepare high-quality images matching specifications in `public/images/README.md`
2. Place images in `public/images/` directory with exact filenames
3. Images will automatically display instead of placeholders

### 2. Update Contact Information
Edit these files to add real contact details:
- `components/Footer.tsx` - Phone and email
- `app/contact/page.tsx` - Full contact info

Current placeholder: `info@verdant-eng.com` and `+968 90 000 000`

### 3. Customize Content
All content is in two locations:
- **Service/Sector Data**: `lib/constants.ts` (services, sectors, case studies)
- **Page Copy**: Individual page files in `app/` directory

Simply edit the text and save - changes appear instantly.

### 4. Update Styling (Optional)
Edit `tailwind.config.ts` to:
- Change colour palette
- Adjust spacing
- Modify typography
- Add custom utilities

Current palette:
- Navy: #1a2d4a
- Teal (accent): #1e7b7c
- Graphite: #3d3d3d

### 5. Setup Form Submission (For Production)
The contact form currently shows a success message but doesn't send data. To enable form submission:

**Option A: Email Service (Recommended)**
- Integrate with SendGrid, Mailgun, or similar
- Update `components/ContactForm.tsx` handleSubmit function

**Option B: Backend API**
- Create backend endpoint to handle form data
- Update form action URL and method

**Option C: Third-party Form Service**
- Use Formspree, Basin, or similar
- Update form component to submit to external service

## File Organization

### Pages (in `app/`)
- `page.tsx` - Homepage
- `about/page.tsx` - About page
- `services/page.tsx` - Services page
- `sectors/page.tsx` - Sectors page
- `compliance/page.tsx` - QHSE & Compliance page
- `portfolio/page.tsx` - Portfolio/Case studies page
- `contact/page.tsx` - Contact page

### Components (in `components/`)
- `Header.tsx` - Navigation header with mobile menu
- `Footer.tsx` - Footer with 5-column layout
- `Hero.tsx` - Full-width hero sections
- `SectionIntro.tsx` - Section title/description blocks
- `ServiceCard.tsx` - Service discipline cards
- `SectorCard.tsx` - Industry sector cards
- `CTABanner.tsx` - Call-to-action sections
- `ContactForm.tsx` - Contact form component

### Data (in `lib/`)
- `constants.ts` - All static data (services, sectors, case studies, etc.)
- `types.ts` - TypeScript interfaces
- `index.ts` - Exports

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Mobile Testing

Test responsive design at breakpoints:
- Mobile: 320px - 640px (sm)
- Tablet: 641px - 1023px (md)
- Desktop: 1024px+ (lg)

The hamburger menu appears on mobile. Full navigation shows on desktop.

## Customization Examples

### Add a New Service
Edit `lib/constants.ts`:
```typescript
SERVICES.push({
  id: 'new-service',
  title: 'New Service Name',
  value: 'Category',
  description: 'Description...',
  items: ['Item 1', 'Item 2'],
  impact: 'Impact statement...',
  image: '/images/service-name.jpg',
})
```

### Change Main Colours
Edit `tailwind.config.ts`:
```typescript
colors: {
  navy: '#your-color-code',
  teal: '#your-accent-color',
  // ... etc
}
```

### Update Homepage Copy
Edit `app/page.tsx` and modify text directly in components.

### Add a New Navigation Link
Edit `lib/constants.ts` NAVIGATION array:
```typescript
{ label: 'New Page', href: '/new-page' }
```

Then create `app/new-page/page.tsx` following existing page structure.

## Performance Tips

1. **Image Optimization**
   - Use `next/image` for all images
   - Provide responsive sizes
   - Images auto-optimize for different screens

2. **CSS**
   - Tailwind CSS is tree-shaken at build time
   - Only includes used classes
   - ~10KB gzipped (typical)

3. **JavaScript**
   - Most pages are server-rendered (zero JS)
   - Only header/footer/form need client-side JS
   - Minimal bundle size

## Deployment

### Vercel (Recommended for Next.js)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Run `npm run build`
2. Deploy `out/` directory
3. Configure server to serve next.config.js

## Troubleshooting

**Images not showing?**
- Check image exists in `public/images/` directory
- Verify filename matches exactly (case-sensitive)
- Check browser console for 404 errors

**Form not working?**
- Open browser console (F12)
- Check for JavaScript errors
- Verify all required fields have values

**Styling looks wrong?**
- Clear `.next` cache: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check Tailwind classes are spelled correctly

**Responsive issues?**
- Test in Chrome DevTools (F12)
- Check breakpoints: sm=640px, lg=1024px
- Verify mobile viewport meta tag

## Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## Security Notes

- All form submissions should use HTTPS in production
- Store API keys in environment variables (not in code)
- Sanitize user input on backend
- Keep dependencies updated: `npm update`

## License

© 2024 Verdant Engineering. All rights reserved.

---

**Ready to get started?** Run `npm install && npm run dev` and open http://localhost:3000
