import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Smile Experts Dental Washington, D.C.",
  description:
    "Read Smile Experts Dental's privacy policy and terms of service. Learn how we protect your personal information and handle SMS communications.",
  alternates: { canonical: "https://www.smilexpertsdental.com/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | Smile Experts Dental",
    description: "Read Smile Experts Dental's privacy policy and terms of service.",
    url: "https://www.smilexpertsdental.com/privacy-policy/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Smile Experts Dental",
    description: "Read Smile Experts Dental's privacy policy and terms of service.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
