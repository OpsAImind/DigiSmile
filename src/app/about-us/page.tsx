import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Smile Experts Dental | Trusted Dental Care DC",
  description:
    "Learn about Smile Experts Dental, our compassionate team, guiding principles, and commitment to comfortable, transparent, high-quality dental care.",
  keywords: [
    "experienced dentists",
    "Experts Dental Clinic",
    "dental professionals"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/about-us/" },
  openGraph: {
    title: "About Us | Smile Experts Dental",
    description: "Meet our team and learn about our commitment to exceptional dental care.",
    url: "https://www.smilexpertsdental.com/about-us/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Smile Experts Dental",
    description: "Meet our team and learn about our commitment to exceptional dental care.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
  
