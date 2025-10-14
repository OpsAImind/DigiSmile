import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Dental Health Blog | Smile Experts Dental Washington, D.C.",
  description:
    "Expert dental health tips, advice, and insights from Smile Experts Dental. Learn about teeth whitening, root canals, preventive care, cosmetic dentistry, and more.",
  keywords: [
    "dental blog",
    "dental health tips",
    "teeth whitening advice",
    "oral care",
    "dental hygiene",
    "cosmetic dentistry tips",
    "Washington DC dentist blog"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/blog/" },
  openGraph: {
    title: "Dental Health Blog | Smile Experts Dental",
    description: "Expert dental health tips and insights from Washington, D.C.'s premier dental practice.",
    url: "https://www.smilexpertsdental.com/blog/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Health Blog | Smile Experts Dental",
    description: "Expert dental health tips and insights.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
