# Image Placeholder Structure for Verdant Engineering Website

This directory contains all hero, section, and background images used throughout the website.

## Image Files Required

### Homepage & Global
- `home-hero-industrial-oman.jpg` - Hero image for homepage (1200x800px minimum)
- `about-engineering-team.jpg` - Team image for About section (800x600px)
- `about-office-oman.jpg` - Office image for About page (800x600px)

### Services Pages
- `service-process-engineering.jpg` - Process Engineering service card (600x400px)
- `service-technical-safety.jpg` - Technical Safety service card (600x400px)
- `service-instrumentation-control.jpg` - Control & Instrumentation service card (600x400px)
- `service-piping-plotplan.jpg` - Piping & Plot Planning service card (600x400px)
- `service-mechanical-static.jpg` - Mechanical Static Equipment service card (600x400px)
- `service-mechanical-rotating.jpg` - Mechanical Rotating Equipment service card (600x400px)
- `service-pipeline.jpg` - Pipeline Engineering service card (600x400px)
- `services-hero.jpg` - Hero image for Services page (1200x800px minimum)

### Sectors Pages
- `sectors-oil-gas.jpg` - Oil & Gas sector card (600x400px)
- `sectors-cryogenic.jpg` - Cryogenic sector card (600x400px)
- `sectors-refining.jpg` - Refining & Petrochemicals sector card (600x400px)
- `sectors-storage.jpg` - Storage & Infrastructure sector card (600x400px)
- `sectors-utilities.jpg` - Utilities sector card (600x400px)
- `sectors-hero.jpg` - Hero image for Sectors page (1200x800px minimum)

### Additional Assets
- `qhse-compliance.jpg` - Supporting policy/compliance image asset (1200x800px minimum)

### Contact & Miscellaneous
- `contact-oman-office.jpg` - Hero image for Contact page (1200x800px minimum)

## Image Specifications

**Hero Images (Full Width):**
- Width: 1200px minimum
- Height: 800px minimum
- Format: JPG/WebP
- Quality: High resolution for large displays
- Usage: Full-width section backgrounds with overlay

**Card Images (Uniform Grid):**
- Width: 600px
- Height: 400px
- Format: JPG/WebP
- Quality: High resolution, consistent aspect ratio
- Usage: Service cards, sector cards, case study images

**General Guidelines:**
- All images should be high-quality and professional
- Images should reflect engineering, industrial, and Gulf contexts
- Consistency in tone and aesthetic across the site
- Consider responsive scaling for mobile (auto width, fixed aspect ratio)
- Use descriptive, kebab-case filenames
- All images are referenced with `/images/` prefix in component code

## Placeholder Implementation

The website uses Next.js Image component with optimized loading. All image paths follow this pattern:
```
/images/[descriptive-name].jpg
```

No image files exist yet - add your production images to this directory following the naming convention above.

## Next Steps

1. Prepare high-quality images matching the specifications
2. Place images in this directory with exact filenames
3. Images will automatically optimize for different screen sizes
4. Website will display production images instead of placeholders
