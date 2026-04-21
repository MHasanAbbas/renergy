# Deployment & Launch Checklist

Use this checklist when preparing to deploy to production.

## Pre-Launch (Before Going Live)

### Content Review
- [ ] All copy reviewed and approved
- [ ] Contact information is correct (phone, email)
- [ ] Company details accurate
- [ ] Service descriptions verified
- [ ] Sector information reviewed
- [ ] Case studies are accurate and relevan
- [ ] Team information is current
- [ ] No placeholder or test text remains

### Images
- [ ] All hero images added (8 total)
- [ ] All service card images added (7 total)
- [ ] All sector card images added (5 total)
- [ ] All case study images added (3 total)
- [ ] Images are high quality and professional
- [ ] Images are properly optimized
- [ ] Image filenames match exactly

### Functionality
- [ ] Contact form submits successfully
- [ ] Form validation works correctly
- [ ] Thank you message displays after submission
- [ ] All navigation links work
- [ ] Mobile menu opens and closes
- [ ] All CTAs route to correct pages
- [ ] Footer links are active
- [ ] No console errors in browser

### Responsive Design
- [ ] Mobile layout looks good (320px)
- [ ] Tablet layout looks good (768px)
- [ ] Desktop layout looks good (1024px+)
- [ ] Images scale appropriately
- [ ] Text is readable on all devices
- [ ] Navigation menu responsive
- [ ] Forms are usable on mobile

### Performance
- [ ] Build completes successfully: `npm run build`
- [ ] No build warnings or errors
- [ ] Page load time is acceptable
- [ ] Images optimize without errors
- [ ] No unused CSS or JavaScript
- [ ] SEO metadata present and correct

### SEO
- [ ] Meta titles are unique on each page
- [ ] Meta descriptions are present
- [ ] Headings follow proper hierarchy (H1 > H2 > H3)
- [ ] Alt text on all images
- [ ] No duplicate content
- [ ] Mobile viewport meta tag present
- [ ] Structured data ready

### Accessibility
- [ ] Form labels are associated with inputs
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] No accessibility violations in browser console
- [ ] Screen reader friendly

### Security
- [ ] No API keys in code
- [ ] Environment variables configured
- [ ] Forms use HTTPS
- [ ] No sensitive information hardcoded
- [ ] Dependencies are up to date

---

## Deployment to Vercel (Recommended)

### Setup
- [ ] Code pushed to GitHub repository
- [ ] GitHub account connected to Vercel
- [ ] Environment variables configured in Vercel dashboard
- [ ] Custom domain configured (optional)
- [ ] SSL certificate enabled

### Deploy
- [ ] Run `npm run build` locally to verify
- [ ] Push to main branch
- [ ] Verify Vercel deployment completes
- [ ] Test live production site
- [ ] Verify all pages load correctly
- [ ] Verify images display
- [ ] Verify forms work

### Post-Deploy
- [ ] Add Google Analytics
- [ ] Setup error monitoring (e.g., Sentry)
- [ ] Configure email forwarding for contact form
- [ ] Setup automated backups
- [ ] Monitor performance metrics

---

## Alternative Deployment Platforms

### Netlify
- [ ] Connect GitHub repository
- [ ] Configure build command: `npm run build`
- [ ] Configure publish directory: `.next`
- [ ] Set environment variables
- [ ] Deploy

### Self-Hosted (AWS, DigitalOcean, etc.)
- [ ] Build locally: `npm run build`
- [ ] Copy `.next` directory to server
- [ ] Configure Node.js on server
- [ ] Setup PM2 or similar process manager
- [ ] Configure reverse proxy (nginx)
- [ ] Setup SSL/HTTPS
- [ ] Configure monitoring and backups

---

## Post-Launch

### Immediate (First Day)
- [ ] Monitor for errors in production
- [ ] Verify all functionality works
- [ ] Test contact form submissions
- [ ] Check email notifications work
- [ ] Monitor page performance

### First Week
- [ ] Submit sitemap to Google Search Console
- [ ] Add to Bing Webmaster Tools
- [ ] Setup Google Analytics
- [ ] Monitor traffic and behavior
- [ ] Verify all content appears correctly
- [ ] Test across different browsers

### Ongoing
- [ ] Monitor page performance
- [ ] Review error logs weekly
- [ ] Update content as needed
- [ ] Maintain security (update dependencies)
- [ ] Review analytics monthly
- [ ] Backup database regularly

---

## Contact Form Setup (Important)

Choose one integration method:

### Option A: Email Service (SendGrid, Mailgun)
```typescript
// In components/ContactForm.tsx handleSubmit()
const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
  body: JSON.stringify(emailData)
})
```

### Option B: Formspree (No Code Required)
1. Go to [formspree.io](https://formspree.io)
2. Create new form
3. Update form action URL
4. Form submissions sent to your email

### Option C: Backend API
1. Create backend endpoint
2. Update form action URL
3. Process submissions on backend
4. Send confirmation email

---

## Monitoring & Maintenance

### Weekly Checklist
- [ ] Review error logs
- [ ] Check form submissions are being received
- [ ] Monitor performance metrics
- [ ] Verify all links still work

### Monthly Checklist
- [ ] Review analytics
- [ ] Check for broken links
- [ ] Update content if needed
- [ ] Review security logs
- [ ] Backup data

### Quarterly Checklist
- [ ] Update dependencies: `npm update`
- [ ] Security audit
- [ ] Performance analysis
- [ ] Content review
- [ ] Backup verification

---

## Emergency Contacts

- **Website Provider**: Vercel, Netlify, or hosting provider support
- **Domain Registrar**: Contact for DNS issues
- **Email Service**: Contact for form submission issues
- **Developer**: Have backup developer contact info

---

## Rollback Plan

If issues occur post-launch:

1. **Revert to Previous Version**
   ```bash
   git revert [commit-hash]
   git push origin main
   ```

2. **Redeploy**
   - Vercel automatically redeploys on push
   - Or manually trigger deployment in dashboard

3. **Contact Support**
   - Platform support (Vercel, Netlify, etc.)
   - Domain registrar for DNS issues
   - Email service for form issues

---

## DNS & Domain Configuration

### For Vercel (if using custom domain)
1. Go to Vercel project settings
2. Add your domain
3. Follow DNS configuration instructions
4. Update domain registrar DNS settings
5. Wait for DNS propagation (can take 24-48 hours)

### Typical DNS Records
- **A Record**: Points to Vercel IP (provided by Vercel)
- **CNAME**: www subdomain to vercel.com

---

## Performance Targets

- **Page Load**: < 3 seconds (all pages)
- **First Contentful Paint**: < 1.5 seconds
- **Core Web Vitals**: All green
- **Mobile Score**: > 90 (Google PageSpeed)
- **Desktop Score**: > 95 (Google PageSpeed)

Monitor in Google PageSpeed Insights or Chrome DevTools.

---

## Success Criteria

Launch is successful when:

✅ All pages load without errors
✅ Contact form submissions work
✅ Mobile design displays correctly
✅ Images load properly
✅ Navigation works throughout
✅ Performance is acceptable
✅ No console errors
✅ SEO metadata is present
✅ Website appears on Google

---

Last Updated: April 2026
