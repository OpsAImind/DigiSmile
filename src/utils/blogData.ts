import { StaticImageData } from "next/image";
import {
  teeth_whitening_service,
  root_canal_service,
  prevention,
  dental_venuer,
  denture_service
} from "@/assets/images";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: StaticImageData;
  category: string;
  date: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  tags?: string[];
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-you-need-root-canal-treatment",
    title: "5 Signs You Need Root Canal Treatment",
    excerpt:
      "Learn the warning signs that indicate you may need a root canal and why early treatment is crucial for saving your tooth.",
    content: `
      <h2>Understanding Root Canal Treatment</h2>
      <p>Root canal treatment is often misunderstood and feared, but it's actually a procedure designed to save your natural tooth and relieve pain. Knowing the warning signs can help you seek treatment early and avoid more serious complications.</p>
      
      <h2>Sign #1: Severe Tooth Pain</h2>
      <p>Persistent, severe tooth pain that doesn't go away is one of the most common signs you need a root canal. The pain may worsen when you bite down or apply pressure to the tooth.</p>
      
      <h2>Sign #2: Prolonged Sensitivity</h2>
      <p>If your tooth remains sensitive to hot or cold temperatures long after the stimulus is removed, it could indicate nerve damage requiring root canal treatment.</p>
      
      <h2>Sign #3: Tooth Discoloration</h2>
      <p>A tooth that becomes darker or grayish may have internal damage or infection affecting the pulp and nerves inside.</p>
      
      <h2>Sign #4: Swollen or Tender Gums</h2>
      <p>Swelling, tenderness, or a pimple-like bump on your gums near the affected tooth can indicate an abscess or infection.</p>
      
      <h2>Sign #5: Cracked or Chipped Tooth</h2>
      <p>A crack or chip that exposes the inner tooth can allow bacteria to enter and infect the pulp, necessitating root canal therapy.</p>
      
      <h2>Don't Wait—Seek Treatment</h2>
      <p>If you experience any of these symptoms, contact Smile Experts Dental in Washington, D.C. immediately. Early treatment can save your tooth and prevent more extensive dental work.</p>
    `,
    image: root_canal_service,
    category: "Dental Health",
    date: "October 10, 2025",
    author: "Dr. Smile Experts",
    metaTitle:
      "5 Signs You Need Root Canal Treatment | Smile Experts Dental Blog",
    metaDescription:
      "Discover the 5 warning signs that indicate you may need root canal treatment and why early intervention is crucial for saving your tooth.",
    tags: ["Root Canal", "Dental Pain", "Tooth Infection", "Emergency Dentistry"],
    readTime: "5 min read"
  },
  {
    slug: "how-to-maintain-white-teeth-after-whitening",
    title: "How to Maintain White Teeth After Whitening",
    excerpt:
      "Discover expert tips to keep your teeth bright and white long after your professional whitening treatment.",
    content: `
      <h2>Congratulations on Your Whiter Smile!</h2>
      <p>You've invested in professional teeth whitening and achieved a brighter smile. Now, how do you keep it that way? Follow these expert tips to maintain your results.</p>
      
      <h2>1. Avoid Staining Foods and Drinks</h2>
      <p>Coffee, tea, red wine, berries, and dark sauces can stain your teeth. If you consume them, rinse your mouth with water afterward or use a straw for beverages.</p>
      
      <h2>2. Brush and Floss Daily</h2>
      <p>Good oral hygiene is essential. Brush twice a day with whitening toothpaste and floss daily to remove plaque and prevent stains.</p>
      
      <h2>3. Use a Whitening Toothpaste</h2>
      <p>Whitening toothpaste helps remove surface stains and maintain your bright smile. Use it a few times a week as recommended by your dentist.</p>
      
      <h2>4. Quit Smoking</h2>
      <p>Tobacco products cause severe staining and discoloration. Quitting smoking is one of the best things you can do for your oral health and smile.</p>
      
      <h2>5. Schedule Regular Dental Cleanings</h2>
      <p>Professional cleanings remove plaque and tartar buildup that can dull your smile. Visit your dentist every six months for optimal results.</p>
      
      <h2>6. Consider Touch-Up Treatments</h2>
      <p>Depending on your lifestyle, you may benefit from touch-up whitening treatments every 6-12 months to maintain your bright smile.</p>
      
      <h2>Keep Your Smile Bright</h2>
      <p>With proper care and maintenance, your whitening results can last for years. Contact Smile Experts Dental in Washington, D.C. for personalized advice and touch-up treatments.</p>
    `,
    image: teeth_whitening_service,
    category: "Cosmetic Dentistry",
    date: "October 8, 2025",
    author: "Dr. Smile Experts",
    metaTitle:
      "How to Maintain White Teeth After Whitening | Smile Experts Dental",
    metaDescription:
      "Learn expert tips to keep your teeth bright and white long after your professional whitening treatment.",
    tags: ["Teeth Whitening", "Oral Care", "Cosmetic Dentistry", "Dental Tips"],
    readTime: "6 min read"
  },
  {
    slug: "importance-of-regular-dental-checkups",
    title: "The Importance of Regular Dental Checkups",
    excerpt:
      "Why routine dental visits are essential for maintaining oral health and preventing serious dental problems.",
    content: `
      <h2>Why Regular Checkups Matter</h2>
      <p>Many people only visit the dentist when they have a problem, but regular checkups are crucial for preventing issues before they start. Here's why you should never skip your dental appointments.</p>
      
      <h2>Early Detection of Problems</h2>
      <p>Regular exams allow your dentist to detect cavities, gum disease, oral cancer, and other issues early when they're easier and less expensive to treat.</p>
      
      <h2>Professional Cleaning</h2>
      <p>Even with excellent brushing and flossing, plaque and tartar can build up in hard-to-reach areas. Professional cleanings remove this buildup and prevent gum disease.</p>
      
      <h2>Prevent Tooth Loss</h2>
      <p>Gum disease is a leading cause of tooth loss in adults. Regular checkups help detect and treat gum disease before it progresses.</p>
      
      <h2>Save Money in the Long Run</h2>
      <p>Preventive care is far less expensive than treating advanced dental problems. Regular checkups can save you thousands of dollars in future dental work.</p>
      
      <h2>Maintain Overall Health</h2>
      <p>Oral health is linked to overall health. Gum disease has been associated with heart disease, diabetes, and other systemic conditions. Regular dental visits help protect your entire body.</p>
      
      <h2>How Often Should You Visit?</h2>
      <p>Most people should visit the dentist every six months. Your dentist may recommend more frequent visits if you have specific oral health concerns.</p>
      
      <h2>Schedule Your Checkup Today</h2>
      <p>Don't wait for a problem to arise. Schedule your routine dental checkup at Smile Experts Dental in Washington, D.C. and keep your smile healthy for life.</p>
    `,
    image: prevention,
    category: "Preventive Care",
    date: "October 5, 2025",
    author: "Dr. Smile Experts",
    metaTitle:
      "The Importance of Regular Dental Checkups | Smile Experts Dental",
    metaDescription:
      "Discover why routine dental visits are essential for maintaining oral health and preventing serious dental problems.",
    tags: ["Preventive Care", "Dental Checkup", "Oral Health", "Gum Disease"],
    readTime: "7 min read"
  }
];

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
