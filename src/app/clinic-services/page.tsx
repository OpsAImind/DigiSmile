import type { Metadata } from "next";
import ClinicServicesClient from "./ClinicServicesClient";

export const metadata: Metadata = {
  title: "Comprehensive Dental Care in Washington, D.C. | Smile Expert",
  description:
    "Smile Expert Dental provides trusted general, cosmetic, preventive, and emergency dental care in Washington, D.C., focused on comfort and long-term oral health.",
  keywords: [
    "comprehensive dental care Washington DC",
    "general dentistry DC",
    "cosmetic dentistry Washington DC",
    "preventive dental care",
    "emergency dentist DC",
    "dental services Washington DC"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/home/clinic-services/" },
  openGraph: {
    title: "Comprehensive Dental Care in Washington, D.C. | Smile Expert",
    description: "Smile Expert Dental provides trusted general, cosmetic, preventive, and emergency dental care in Washington, D.C., focused on comfort and long-term oral health.",
    url: "https://www.smilexpertsdental.com/home/clinic-services/",
    siteName: "DigiSmile Experts",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "DigiSmile Experts Dental Services in DigiSmile Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Dental Care in Washington, D.C. | Smile Expert",
    description: "Smile Expert Dental provides trusted general, cosmetic, preventive, and emergency dental care in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClinicServicesPage() {
  return <ClinicServicesClient />;
}
