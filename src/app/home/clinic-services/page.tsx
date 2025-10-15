import type { Metadata } from "next";
import ClinicServicesClient from "./ClinicServicesClient";

export const metadata: Metadata = {
  title: "Comprehensive Dental Services in Washington DC | Smile Experts Dental",
  description:
    "Expert dental care in Washington, D.C. offering general dentistry, cosmetic dentistry, root canals, teeth whitening, veneers, dentures, emergency dental care & more. Schedule your appointment today!",
  keywords: [
    "dental services Washington DC",
    "dentist Washington DC",
    "cosmetic dentistry DC",
    "general dentistry Washington",
    "teeth whitening Washington DC",
    "dental veneers DC",
    "root canal Washington DC",
    "affordable dentures DC",
    "emergency dentist Washington DC",
    "tooth colored fillings",
    "comprehensive dental care",
    "preventive dentistry DC",
    "dental fillings Washington DC"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/home/clinic-services/" },
  openGraph: {
    title: "Comprehensive Dental Services in Washington DC | Smile Experts Dental",
    description: "Complete dental care including cosmetic dentistry, root canals, teeth whitening, veneers, dentures & emergency services in Washington, D.C.",
    url: "https://www.smilexpertsdental.com/home/clinic-services/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental Services in Washington DC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Dental Services in Washington DC",
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
