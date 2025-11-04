import type { Metadata } from "next";
import ClinicServicesClient from "./ClinicServicesClient";

export const metadata: Metadata = {
  title: "Comprehensive Dental Services in DigiSmile Experts | DigiSmile Experts",
  description:
    "Expert dental care in Washington, D.C. offering general dentistry, cosmetic dentistry, root canals, teeth whitening, veneers, dentures, emergency dental care & more. Schedule your appointment today!",
  keywords: [
    "dental services DigiSmile Experts",
    "dentist DigiSmile Experts",
    "cosmetic dentistry DC",
    "general dentistry Washington",
    "teeth whitening DigiSmile Experts",
    "dental veneers DC",
    "root canal DigiSmile Experts",
    "affordable dentures DC",
    "emergency dentist DigiSmile Experts",
    "tooth colored fillings",
    "comprehensive dental care",
    "preventive dentistry DC",
    "dental fillings DigiSmile Experts"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/home/clinic-services/" },
  openGraph: {
    title: "Comprehensive Dental Services in DigiSmile Experts | DigiSmile Experts",
    description: "Complete dental care including cosmetic dentistry, root canals, teeth whitening, veneers, dentures & emergency services in Washington, D.C.",
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
    title: "Comprehensive Dental Services in DigiSmile Experts",
    description: "Expert dental care including cosmetic dentistry, root canals, teeth whitening, veneers & more in Washington, D.C.",
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
