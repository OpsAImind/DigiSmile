// src/app/thank-you/page.tsx
import { Metadata } from "next";
import ThankYou from "@/features/ThankYou";

export const metadata: Metadata = {
  title: "Thank You | Smile Experts Dental",
  description: "Your appointment request has been received. Our team will contact you shortly to confirm.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYou />;
}
