import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Smile Experts Dental Washington, D.C.",
  description:
    "Meet the team at Smile Experts Dental. Learn about our mission, values, and commitment to providing exceptional dental care in Washington, D.C.",
  keywords: [
    "about smile experts dental",
    "dentist Washington DC",
    "dental team",
    "Dr. Mahmood",
    "dental practice DC",
    "our mission"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/home/about-us/" },
  openGraph: {
    title: "About Us | Smile Experts Dental",
    description: "Meet our team and learn about our commitment to exceptional dental care.",
    url: "https://www.smilexpertsdental.com/home/about-us/",
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
  
