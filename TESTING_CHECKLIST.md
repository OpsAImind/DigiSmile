# SEO Implementation Testing Checklist

## Pre-Deployment Testing

### Build & Compile
```bash
# 1. Install dependencies (if needed)
npm install

# 2. Build the project
npm run build

# 3. Generate sitemap
npm run postbuild

# 4. Start production server
npm start
```

---

## Service Pages Testing

Test each of the 9 service pages:

### URLs to Test
- [ ] `/root-canal-washington-dc/`
- [ ] `/general-dentistry-washington-dc/`
- [ ] `/comprehensive-dental-care-washington-dc/`
- [ ] `/cosmetic-dentistry-washington-dc/`
- [ ] `/dental-veneers-washington-dc/`
- [ ] `/teeth-whitening-washington-dc/`
- [ ] `/affordable-dentures-washington-dc/`
- [ ] `/tooth-colored-fillings-washington-dc/`
- [ ] `/dental-fillings-washington-dc/`

### For Each Service Page, Verify:
- [ ] Page loads without errors
- [ ] Hero image displays correctly
- [ ] H1 heading is visible and correct
- [ ] All sections render (What Is, Benefits, Procedure, FAQ, CTA)
- [ ] Images load properly
- [ ] "Book Appointment" button works
- [ ] Phone number is clickable (tel: link)
- [ ] Mobile responsive layout works
- [ ] No console errors in browser DevTools

---

## Blog Testing

### Blog Index (`/blog/`)
- [ ] Page loads successfully
- [ ] All 3 blog posts display
- [ ] Post images load
- [ ] Post cards are clickable
- [ ] "Read More" buttons work
- [ ] Mobile layout is responsive

### Blog Post Detail (`/blog/[slug]/`)
Test each post:
- [ ] `/blog/5-signs-you-need-root-canal-treatment/`
- [ ] `/blog/how-to-maintain-white-teeth-after-whitening/`
- [ ] `/blog/importance-of-regular-dental-checkups/`

For each post, verify:
- [ ] Post loads correctly
- [ ] Hero image displays
- [ ] Content renders with proper formatting
- [ ] H2 headings are styled correctly
- [ ] CTA section appears at bottom
- [ ] "Book Appointment" button works
- [ ] "Back to Blog" link works
- [ ] Mobile responsive

---

## Navigation Testing

### Desktop Navbar
- [ ] Logo is visible and clickable
- [ ] "SERVICES" dropdown opens on click
- [ ] All 10 service links appear in dropdown
  - [ ] "All Services" link
  - [ ] 9 Washington D.C. service links
- [ ] Service links navigate correctly
- [ ] "BLOG" button appears
- [ ] "BLOG" button navigates to `/blog/`
- [ ] All other nav items work (ABOUT, LOCATIONS, etc.)

### Mobile Navbar
- [ ] Hamburger menu opens
- [ ] "ALL SERVICES" link appears
- [ ] "BLOG" link appears
- [ ] All links navigate correctly
- [ ] Menu closes after clicking a link

---

## Footer Testing

- [ ] Footer renders on all pages
- [ ] "Quick Links" column displays
  - [ ] About Us
  - [ ] All Services
  - [ ] Blog
  - [ ] Privacy Policy
- [ ] "Washington D.C. Services" column displays
  - [ ] Root Canal Therapy
  - [ ] General Dentistry
  - [ ] Cosmetic Dentistry
  - [ ] Dental Veneers
  - [ ] Teeth Whitening
- [ ] "More Services" column displays
  - [ ] Affordable Dentures
  - [ ] Tooth-Colored Fillings
  - [ ] Dental Fillings
  - [ ] Comprehensive Care
- [ ] All footer links navigate correctly
- [ ] Hover effects work on links
- [ ] Mobile layout stacks properly

---

## SEO Validation

### Meta Tags (Check in browser DevTools > Elements > <head>)
For each service page, verify:
- [ ] `<title>` tag is present and correct
- [ ] `<meta name="description">` is present
- [ ] `<meta name="keywords">` is present
- [ ] `<link rel="canonical">` is present
- [ ] OpenGraph tags are present (og:title, og:description, og:url, og:image)
- [ ] Twitter card tags are present

### JSON-LD Schema
Use **Google Rich Results Test**: https://search.google.com/test/rich-results

For each service page:
- [ ] Enter page URL
- [ ] Verify "Service" schema is detected
- [ ] Verify "BreadcrumbList" schema is detected
- [ ] No errors or warnings

For blog posts:
- [ ] Verify "Article" schema is detected
- [ ] Verify "BreadcrumbList" schema is detected

### Sitemap
- [ ] Visit `/sitemap.xml`
- [ ] Verify all 9 service pages are listed
- [ ] Verify blog index is listed
- [ ] Verify blog posts are listed
- [ ] Verify priority values are correct:
  - Homepage: 1.0
  - Service pages: 0.9
  - Blog pages: 0.8

### Robots.txt
- [ ] Visit `/robots.txt`
- [ ] Verify it allows crawling
- [ ] Verify sitemap URL is listed

---

## Performance Testing

### Lighthouse Audit (Chrome DevTools)
Run for 2-3 sample pages (e.g., homepage, one service page, one blog post):

- [ ] Performance score: Target 80+
- [ ] Accessibility score: Target 90+
- [ ] Best Practices score: Target 90+
- [ ] **SEO score: Target 95+**

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

### Mobile Testing
Test on actual devices or use Chrome DevTools Device Mode:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)

---

## Functionality Testing

### Appointment Booking Flow
From each service page:
- [ ] Click "Book Appointment" button
- [ ] Verify redirect to appointment page
- [ ] Verify clinic parameter is passed (e.g., `?clinic=dc`)
- [ ] Test both logged-in and logged-out states

### Phone Links
- [ ] Click phone number on service pages
- [ ] Verify tel: link opens phone dialer (on mobile)
- [ ] Verify correct number: (202) 545-6336

### Internal Linking
- [ ] Navbar links work
- [ ] Footer links work
- [ ] Blog "Back to Blog" link works
- [ ] Breadcrumb links work (if visible)

---

## Cross-Browser Testing

Test on multiple browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## Content Review

### Service Pages
For each page, verify:
- [ ] Content is unique (not duplicated from other pages)
- [ ] No spelling or grammar errors
- [ ] All sections are complete
- [ ] FAQs are relevant to the service
- [ ] CTAs are compelling

### Blog Posts
- [ ] Content is well-formatted
- [ ] No broken HTML
- [ ] Images are relevant
- [ ] CTAs encourage booking

---

## Post-Deployment Checklist

### Google Search Console
- [ ] Submit sitemap: `https://www.smilexpertsdental.com/sitemap.xml`
- [ ] Request indexing for new pages
- [ ] Monitor coverage report for errors

### Google Analytics
- [ ] Verify tracking code is active
- [ ] Check real-time users
- [ ] Set up goals for appointment bookings

### Monitoring
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Monitor 404 errors
- [ ] Track page load times

---

## Known Issues & Notes

### TypeScript Warnings
- `blogData.ts` import warning in `blog/page.tsx` will resolve after build
- This is a development-time warning only

### Image Optimization
- All images use Next.js Image component for automatic optimization
- Ensure images are properly sized before adding to assets

### Sitemap Generation
- Sitemap is generated during `npm run postbuild`
- Must run after every build for production

---

## Quick Test Commands

```bash
# Development mode
npm run dev

# Production build
npm run build
npm run postbuild
npm start

# Lint check
npm run lint

# Format code
npm run format:all
```

---

## Success Criteria

✅ All service pages load without errors  
✅ All blog pages load without errors  
✅ Navigation works on desktop and mobile  
✅ SEO meta tags are present on all pages  
✅ JSON-LD schema validates in Rich Results Test  
✅ Sitemap includes all new pages  
✅ Lighthouse SEO score is 95+  
✅ Mobile responsive on all devices  
✅ Appointment booking flow works  
✅ No console errors in browser  

---

**Testing Date**: _______________  
**Tested By**: _______________  
**Status**: ⬜ Pass | ⬜ Fail | ⬜ Needs Review
