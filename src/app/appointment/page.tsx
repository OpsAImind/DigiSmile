// src/app/appointment/page.tsx
import { Metadata } from "next";
import AppointmentForm from "@/components/common/AppointmentForm";

export const metadata: Metadata = {
  title: "Book Dental Appointment in Washington, D.C. | DigiSmile Experts",
  description:
    "Book your dental cleaning, exam, or consultation at DigiSmile Experts in Washington, D.C. Choose a convenient time today.",
  openGraph: {
    title: "Book Dental Appointment | DigiSmile Experts",
    description:
      "Book an appointment at DigiSmile Experts Dental Clinic in Washington, D.C. – expert dentists, flexible timings, and modern facilities.",
    url: "https://www.digismileexperts.com/appointment",
    siteName: "DigiSmile Experts",
    images: [
      {
        url: "/og/appointment.jpg",
        width: 1200,
        height: 630,
        alt: "Book Appointment at DigiSmile Experts"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Dental Appointment | DigiSmile Experts",
    description:
      "Book your next dental check-up or cleaning at DigiSmile Experts in Washington, D.C.",
    images: ["/og/appointment.jpg"]
  }
};

export default function BookAppointmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "DigiSmile Experts Dental Clinic",
    image: "https://www.digismileexperts.com/og/appointment.jpg",
    "@id": "https://www.digismileexperts.com",
    url: "https://www.digismileexperts.com/appointment",
    telephone: "+1-202-555-0170",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 Smile Street NW",
      addressLocality: "Washington",
      addressRegion: "DC",
      postalCode: "20001",
      addressCountry: "US"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
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
    <main>
      <section aria-label="Book Dental Appointment Form" className="appointment-section">
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Book a Dental Appointment
        </h1>
        <AppointmentForm />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  );
}
