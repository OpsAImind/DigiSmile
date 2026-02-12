import type { Metadata } from "next";
import NewPatientsClient from "./NewPatientsClient";

export const metadata: Metadata = {
  title: "New Patients Dentist in Washington, D.C. | Smile Experts Dental",
  description:
    "Smile Experts Dental welcomes new patients with comfortable care, affordable pricing, flexible scheduling, and insurance-friendly dental services in Washington, D.C",
  keywords: [
    "dental checkup",
    "dental checkup and exam",
    "dental services",
    "Smile Experts Dental"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/new-patients/" },
  openGraph: {
    title: "New Patients Dentist in Washington, D.C. | Smile Experts Dental",
    description: "Smile Experts Dental welcomes new patients with comfortable care, affordable pricing, flexible scheduling, and insurance-friendly dental services in Washington, D.C",
    url: "https://www.smilexpertsdental.com/new-patients/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental New Patients",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Patients Dentist in Washington, D.C. | Smile Experts Dental",
    description: "Smile Experts Dental welcomes new patients with comfortable care, affordable pricing, flexible scheduling, and insurance-friendly dental services in Washington, D.C",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewPatientsPage() {
  return <NewPatientsClient />;
}
