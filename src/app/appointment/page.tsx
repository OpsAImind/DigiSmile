// src/app/appointment/page.tsx
import { Metadata } from "next";
import AppointmentLandingPage from "@/features/LandingPage/AppointmentLandingPage";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Book a Dental Appointment | Washington DC & Burke VA | Smile Experts Dental",
  description:
    "Book your dental appointment with Smile Experts Dental. Choose your location — Washington, DC or Burke, VA — pick a date, and our team will confirm your visit.",
  alternates: { canonical: "https://www.smilexpertsdental.com/appointment/" },
  openGraph: {
    title: "Book Your Appointment | Smile Experts Dental",
    description:
      "Request an appointment at Smile Experts Dental in Washington, DC or Burke, VA — experienced dentists, flexible timings, and modern facilities.",
    url: "https://www.digismileexperts.com/appointment",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "/og/appointment.jpg",
        width: 1200,
        height: 630,
        alt: "Book Appointment at Smile Experts Dental"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Dental Appointment | Smile Experts Dental",
    description:
      "Book your next dental visit at Smile Experts Dental in Washington, DC or Burke, VA.",
    images: ["/og/appointment.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BookAppointmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Smile Experts Dental",
    image: "https://www.digismileexperts.com/og/appointment.jpg",
    "@id": "https://www.digismileexperts.com",
    url: "https://www.digismileexperts.com/appointment",
    telephone: "+1-202-545-6336",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1747 Pennsylvania Avenue NW Suite 100",
      addressLocality: "Washington",
      addressRegion: "DC",
      postalCode: "20006",
      addressCountry: "US"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Friday"],
        opens: "10:00",
        closes: "17:00"
      }
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Dental Appointment Booking",
        description:
          "Book an appointment for dental exams, cleanings, whitening, crowns, fillings, and more."
      }
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.digismileexperts.com/appointment",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      result: {
        "@type": "Reservation",
        name: "Book Dental Appointment"
      }
    }
  };

  return (
    <>
      <AppointmentLandingPage />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
