import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Dental Appointment in Washington, D.C. | DigiSmile Experts",
  description:
    "Schedule your next dental check-up, cleaning, or cosmetic consultation at DigiSmile Experts in Washington, D.C. Choose a convenient time online today.",
  keywords: [
    "dentist appointment Washington DC",
    "book dental cleaning DC",
    "emergency dentist Washington",
    "DigiSmile Experts dental clinic",
    "tooth repair appointment DC"
  ],
  openGraph: {
    title: "Book Your Appointment | DigiSmile Experts Dental Clinic",
    description:
      "Easily book your dental appointment online at DigiSmile Experts in Washington, D.C. Flexible timings, experienced dentists, and affordable care.",
    url: "https://www.digismileexperts.com/appointment",
    siteName: "DigiSmile Experts",
    images: [
      {
        url: "/og/appointment.jpg",
        width: 1200,
        height: 630,
        alt: "Book Appointment at DigiSmile Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Dental Appointment | DigiSmile Experts",
    description:
      "Book a dental cleaning, exam, or consultation in Washington, D.C. with DigiSmile Experts today.",
    images: ["/og/appointment.jpg"],
  },
};
