import { StaticImageData } from "next/image";
import {
  teeth_whitening_service,
  root_canal_service,
  prevention
} from "@/assets/images";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
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
      "Learn the warning signs that indicate you may need a root canal and why early treatment is crucial for saving your natural tooth and preventing complications.",
    content: `
      <h2 class="text-2xl font-semibold mb-4">Understanding Root Canal Treatment</h2>
      <p>Root canal treatment is a routine dental procedure designed to save an infected or damaged tooth. Contrary to popular belief, it’s not painful—it’s the treatment that <strong>eliminates pain</strong>. Recognizing the signs early can help preserve your tooth and avoid costly restorations later.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">1. Severe, Persistent Tooth Pain</h2>
      <p>If you’re experiencing intense tooth pain that lingers even after brushing or rinsing, it could be a sign that the pulp inside your tooth is infected. Pain may radiate to your jaw, ear, or other teeth.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">2. Sensitivity That Won’t Go Away</h2>
      <p>Teeth that remain sensitive to hot or cold drinks—even after the temperature returns to normal—could signal nerve damage. This type of lingering sensitivity usually indicates that the pulp is inflamed or infected.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">3. Tooth Discoloration</h2>
      <p>A tooth turning dark or grayish can indicate that the internal tissue has died due to infection or trauma. This symptom is often overlooked but is a clear indicator for endodontic treatment.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">4. Swelling or Tenderness Around the Gums</h2>
      <p>Inflamed or swollen gums near the affected tooth, or a small pimple-like bump (fistula), are signs of infection spreading beyond the tooth root. Ignoring it can lead to an abscess or bone loss.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">5. Cracked or Chipped Tooth</h2>
      <p>Even a minor crack can allow bacteria to enter the inner layers of your tooth. Over time, this leads to pulp infection and severe pain—making a root canal the best way to save your tooth.</p>

      <h3 class="text-xl font-semibold mt-8">When to See Your Dentist</h3>
      <p>Don’t wait for the pain to become unbearable. At <strong>Smile Experts Dental in Washington, D.C.</strong>, we use advanced diagnostic tools and modern root canal techniques to ensure a comfortable, pain-free experience. Early treatment can mean the difference between saving and losing your tooth.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    category: "Dental Health",
    date: "October 10, 2025",
    author: "Smile Experts",
    metaTitle:
      "5 Signs You Need Root Canal Treatment | Smile Experts Dental Blog",
    metaDescription:
      "Recognize the 5 key warning signs that indicate you may need root canal treatment. Learn how early care at Smile Experts Dental, Washington, D.C. can save your tooth.",
    tags: ["Root Canal", "Dental Pain", "Tooth Infection", "Emergency Dentistry"],
    readTime: "5 min read"
  },
  {
    slug: "how-to-maintain-white-teeth-after-whitening",
    title: "How to Maintain White Teeth After Whitening",
    excerpt:
      "Discover dentist-approved strategies to keep your teeth brilliantly white long after professional whitening treatment.",
    content: `
      <h2 class="text-2xl font-semibold mb-4">Enjoying Your Brighter Smile</h2>
      <p>After investing in professional whitening, you want your results to last. The key is adopting daily habits that prevent stains and maintain brightness naturally.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">1. Watch What You Eat and Drink</h2>
      <p>Dark beverages like <strong>coffee, tea, red wine, and cola</strong> can dull your smile. Try using a straw and rinsing with water afterward. Also, limit deeply pigmented foods such as blueberries, soy sauce, and tomato-based sauces.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">2. Maintain Excellent Oral Hygiene</h2>
      <p>Brush twice a day using a soft-bristled brush and whitening toothpaste. Floss daily to remove plaque that causes discoloration. Consistency keeps your teeth glossy and fresh.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">3. Use a Whitening Toothpaste Wisely</h2>
      <p>Whitening toothpaste can help remove surface stains. Use it two to three times a week to avoid enamel wear while maintaining your white smile.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">4. Avoid Tobacco</h2>
      <p>Tobacco products are notorious for yellowing teeth and causing stubborn stains. Quitting not only benefits your appearance but also greatly improves your oral and overall health.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">5. Schedule Professional Cleanings</h2>
      <p>Even with good hygiene, plaque can accumulate in hard-to-reach areas. Professional cleanings every six months keep your smile healthy and luminous.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">6. Plan Whitening Touch-Ups</h2>
      <p>Your lifestyle and diet determine how long results last. A quick touch-up treatment every 6–12 months at <strong>Smile Experts Dental</strong> ensures your smile stays radiant year-round.</p>

      <h3 class="text-xl font-semibold mt-8">Keep Smiling with Confidence</h3>
      <p>With proper care and professional guidance, your whitened teeth can shine for years. Visit <strong>Smile Experts Dental, Washington, D.C.</strong> to maintain a lasting, confident smile.</p>
    `,
    image:
      "https://plus.unsplash.com/premium_photo-1674998806375-58edc35ddf3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    category: "Cosmetic Dentistry",
    date: "October 8, 2025",
    author: "Smile Experts",
    metaTitle:
      "How to Maintain White Teeth After Whitening | Smile Experts Dental",
    metaDescription:
      "Get expert tips to maintain your white smile after teeth whitening. Learn how to prevent stains and keep your teeth bright and healthy long-term.",
    tags: ["Teeth Whitening", "Oral Care", "Cosmetic Dentistry", "Dental Tips"],
    readTime: "6 min read"
  },
  {
    slug: "importance-of-regular-dental-checkups",
    title: "The Importance of Regular Dental Checkups",
    excerpt:
      "Understand why biannual dental visits are essential for preventing cavities, gum disease, and maintaining overall health.",
    content: `
      <h2 class="text-2xl font-semibold mb-4">Why Regular Checkups Matter</h2>
      <p>Many people only see a dentist when something hurts—but preventive visits are what keep those problems from developing. Routine checkups ensure your teeth, gums, and oral tissues remain healthy and disease-free.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">1. Detect Problems Early</h2>
      <p>Small cavities, gum inflammation, or cracked fillings are often painless in the early stages. Regular dental exams allow your dentist to spot and treat these issues before they become major problems.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">2. Professional Cleanings You Can’t Do at Home</h2>
      <p>No matter how well you brush, plaque and tartar can accumulate in tight spaces. Professional cleanings remove buildup, polish your teeth, and leave your mouth feeling refreshed.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">3. Prevent Tooth Loss and Gum Disease</h2>
      <p>Gum disease starts silently but can lead to tooth loss if untreated. Regular checkups help detect it early, preventing bone loss and keeping your smile intact.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">4. Save Money and Avoid Pain</h2>
      <p>Preventive care costs far less than restorative treatments. By investing in two visits a year, you can avoid root canals, extractions, and expensive implants later on.</p>

      <h2 class="text-2xl font-semibold mt-6 mb-3">5. Maintain Overall Health</h2>
      <p>Research shows strong links between oral health and conditions like heart disease, diabetes, and stroke. Regular dental visits protect not just your smile, but your body’s wellbeing too.</p>

      <h3 class="text-xl font-semibold mt-8">Make Your Smile a Priority</h3>
      <p>At <strong>Smile Experts Dental in Washington, D.C.</strong>, we offer comprehensive checkups, gentle cleanings, and personalized care to keep your teeth healthy for life. Schedule your next visit today and invest in your lifelong oral health.</p>
    `,
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOHe5OlI3J5HFXb0Y9Z8iyayW5Y8zZVV2cAwSt9=s680-w680-h510-rw",
    category: "Preventive Care",
    date: "October 5, 2025",
    author: "Smile Experts",
    metaTitle:
      "The Importance of Regular Dental Checkups | Smile Experts Dental",
    metaDescription:
      "Learn why regular dental checkups are essential for preventing cavities, gum disease, and maintaining overall health. Visit Smile Experts Dental in D.C. today.",
    tags: ["Preventive Care", "Dental Checkup", "Oral Health", "Gum Disease"],
    readTime: "7 min read"
  }
];

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach(post => post.tags?.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
