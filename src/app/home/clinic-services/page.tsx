import type { Metadata } from "next";
import ClinicServicesClient from "./ClinicServicesClient";

export const metadata: Metadata = {
  title: "Dental Services | Smile Experts Dental Washington, D.C.",
  description:
    "Comprehensive dental services in Washington, D.C. including cosmetic dentistry, general dentistry, preventive care, restorative treatments, and emergency dental services.",
  keywords: [
    "dental services Washington DC",
    "cosmetic dentistry",
    "general dentistry",
    "preventive dental care",
    "restorative dentistry",
    "emergency dentist",
    "dental implants",
    "teeth cleaning"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/home/clinic-services/" },
  openGraph: {
    title: "Dental Services | Smile Experts Dental",
    description: "Comprehensive dental services in Washington, D.C. for all your oral health needs.",
    url: "https://www.smilexpertsdental.com/home/clinic-services/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services | Smile Experts Dental",
    description: "Comprehensive dental services in Washington, D.C.",
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
