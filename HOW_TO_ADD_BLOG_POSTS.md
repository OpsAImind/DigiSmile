# How to Add New Blog Posts

## Quick Guide

Adding new blog posts is simple - just add a new entry to the `blogPosts` array in `src/utils/blogData.ts`.

---

## Step-by-Step Instructions

### 1. Open the Blog Data File
Navigate to: `src/utils/blogData.ts`

### 2. Add Your Blog Post Object

Add a new object to the `blogPosts` array with the following structure:

```typescript
{
  slug: "your-blog-post-url-slug",
  title: "Your Blog Post Title",
  excerpt: "A short 1-2 sentence summary that appears on the blog index page.",
  content: `
    <h2>Section Heading</h2>
    <p>Your paragraph content goes here.</p>
    
    <h2>Another Section</h2>
    <p>More content...</p>
  `,
  image: your_imported_image,
  category: "Category Name",
  date: "Month Day, Year",
  author: "Dr. Smile Experts",
  metaTitle: "SEO-Optimized Title | Smile Experts Dental",
  metaDescription: "SEO meta description (150-160 characters)"
}
```

---

## Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| `slug` | URL-friendly identifier (lowercase, hyphens) | `"how-to-floss-properly"` |
| `title` | Main blog post title | `"How to Floss Properly: A Complete Guide"` |
| `excerpt` | Short summary (1-2 sentences) | `"Learn the correct flossing technique..."` |
| `content` | Full HTML content (use template below) | See content template |
| `image` | Imported image from assets | `teeth_whitening_service` |
| `category` | Post category | `"Dental Health"`, `"Cosmetic Dentistry"` |
| `date` | Publication date | `"October 15, 2025"` |
| `author` | Author name | `"Dr. Smile Experts"` |
| `metaTitle` | SEO title (50-60 chars) | `"How to Floss | Smile Experts Dental"` |
| `metaDescription` | SEO description (150-160 chars) | `"Discover the proper flossing technique..."` |

---

## Content Template

Use this HTML structure for your blog post content:

```html
<h2>Introduction Heading</h2>
<p>Opening paragraph that hooks the reader and introduces the topic.</p>

<h2>Main Point #1</h2>
<p>Detailed explanation of the first main point. Keep paragraphs concise and readable.</p>

<h2>Main Point #2</h2>
<p>Continue with your second point. Use clear, simple language.</p>

<h2>Main Point #3</h2>
<p>Third point with supporting details.</p>

<h2>Tips or Best Practices</h2>
<ul>
  <li>Tip number one</li>
  <li>Tip number two</li>
  <li>Tip number three</li>
</ul>

<h2>Conclusion</h2>
<p>Wrap up the post and include a call-to-action encouraging readers to contact Smile Experts Dental.</p>
```

---

## Using Images

### Option 1: Use Existing Images
Import from the existing image assets:

```typescript
import {
  teeth_whitening_service,
  root_canal_service,
  prevention,
  dental_venuer,
  denture_service
} from "@/assets/images";
```

### Option 2: Add New Images
1. Add your image to `src/assets/clinicServices/newImages/`
2. Import it in `src/assets/images.ts`:
   ```typescript
   import new_blog_image from "@/assets/clinicServices/newImages/your-image.jpeg";
   ```
3. Export it:
   ```typescript
   export {
     // ... existing exports
     new_blog_image
   };
   ```
4. Import in `blogData.ts`:
   ```typescript
   import { new_blog_image } from "@/assets/images";
   ```

---

## Example: Complete Blog Post

```typescript
{
  slug: "benefits-of-regular-dental-cleanings",
  title: "5 Benefits of Regular Dental Cleanings",
  excerpt: "Discover why professional dental cleanings are essential for maintaining optimal oral health and preventing serious dental issues.",
  content: `
    <h2>Why Regular Cleanings Matter</h2>
    <p>Professional dental cleanings are one of the most important preventive measures you can take for your oral health. Here are five key benefits you should know about.</p>
    
    <h2>1. Prevent Cavities</h2>
    <p>Plaque buildup is the leading cause of tooth decay. Regular cleanings remove plaque and tartar that brushing and flossing can't reach, preventing cavities before they start.</p>
    
    <h2>2. Stop Gum Disease</h2>
    <p>Gum disease begins with plaque buildup along the gum line. Professional cleanings remove this buildup and help prevent gingivitis and periodontitis.</p>
    
    <h2>3. Brighten Your Smile</h2>
    <p>Cleanings remove surface stains from coffee, tea, and wine, leaving your teeth looking brighter and cleaner.</p>
    
    <h2>4. Detect Problems Early</h2>
    <p>During your cleaning appointment, your dentist examines your teeth and gums for signs of decay, gum disease, oral cancer, and other issues. Early detection saves time, money, and discomfort.</p>
    
    <h2>5. Improve Overall Health</h2>
    <p>Research links gum disease to heart disease, diabetes, and other systemic conditions. Regular cleanings help protect not just your oral health, but your overall well-being.</p>
    
    <h2>How Often Should You Get Cleanings?</h2>
    <p>Most people should schedule cleanings every six months. Your dentist may recommend more frequent visits if you have gum disease or other oral health concerns.</p>
    
    <h2>Schedule Your Cleaning Today</h2>
    <p>Don't wait for problems to arise. Book your professional dental cleaning at Smile Experts Dental in Washington, D.C. and keep your smile healthy for life.</p>
  `,
  image: prevention,
  category: "Preventive Care",
  date: "October 15, 2025",
  author: "Dr. Smile Experts",
  metaTitle: "5 Benefits of Regular Dental Cleanings | Smile Experts Dental",
  metaDescription: "Discover why professional dental cleanings are essential for maintaining optimal oral health and preventing serious dental issues."
}
```

---

## SEO Best Practices

### Title Optimization
- Keep under 60 characters
- Include primary keyword
- Make it compelling and clickable
- Add location if relevant: "...in Washington, D.C."

### Meta Description
- 150-160 characters
- Include primary keyword naturally
- Write a compelling summary
- Include a call-to-action

### Content Structure
- Use H2 headings for main sections
- Keep paragraphs short (3-4 sentences)
- Use bullet points for lists
- Include relevant keywords naturally
- Aim for 800-1500 words for comprehensive posts

### Categories
Choose from:
- Dental Health
- Preventive Care
- Cosmetic Dentistry
- Restorative Dentistry
- Oral Hygiene
- Patient Education

---

## Publishing Checklist

Before adding your blog post, ensure:

- [ ] Slug is unique and URL-friendly
- [ ] Title is compelling and under 60 characters
- [ ] Excerpt is concise (1-2 sentences)
- [ ] Content is well-structured with H2 headings
- [ ] Image is imported and assigned
- [ ] Category is appropriate
- [ ] Date is current
- [ ] Meta title is optimized (50-60 chars)
- [ ] Meta description is compelling (150-160 chars)
- [ ] Content includes a call-to-action
- [ ] No spelling or grammar errors

---

## After Adding a Post

1. **Save the file**: `src/utils/blogData.ts`
2. **Test locally**: 
   ```bash
   npm run dev
   ```
3. **Visit blog**: Navigate to `/blog/` and click your new post
4. **Check formatting**: Ensure headings, paragraphs, and images display correctly
5. **Test mobile**: View on mobile devices
6. **Build & deploy**:
   ```bash
   npm run build
   npm run postbuild
   ```

---

## Tips for Great Blog Content

1. **Answer real questions**: Address common patient concerns
2. **Be educational**: Provide value, not just promotion
3. **Use simple language**: Avoid excessive dental jargon
4. **Include actionable tips**: Give readers something they can do
5. **End with a CTA**: Encourage readers to book an appointment
6. **Update regularly**: Aim for 1-2 posts per month

---

## Need Help?

If you encounter issues:
1. Check the existing blog posts in `blogData.ts` for reference
2. Ensure all imports are correct
3. Verify HTML syntax in content field
4. Test the page in development mode first

---

**Last Updated**: October 12, 2025
