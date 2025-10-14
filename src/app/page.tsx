import type { Metadata } from "next";
import RootPageClient from "./RootPageClient";

export const metadata: Metadata = {
  title: "Smile Experts Dental | Top Dentist in Washington, D.C.",
  description:
    "Premier dental care in Washington, D.C. Offering cosmetic dentistry, general dentistry, teeth whitening, veneers, root canals, and more. Book your appointment today!",
  keywords: [
    "dentist Washington DC",
    "dental care DC",
    "cosmetic dentistry",
    "teeth whitening",
    "dental veneers",
    "root canal",
    "family dentist",
    "emergency dentist DC"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/" },
  openGraph: {
    title: "Smile Experts Dental | Top Dentist in Washington, D.C.",
    description: "Premier dental care in Washington, D.C. Expert cosmetic and general dentistry services.",
    url: "https://www.smilexpertsdental.com/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental Washington DC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Experts Dental | Top Dentist in Washington, D.C.",
    description: "Premier dental care in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootPage() {
  return <RootPageClient />;
}
