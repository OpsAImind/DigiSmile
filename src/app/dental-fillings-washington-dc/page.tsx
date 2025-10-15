import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Dental Fillings in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Dental fillings in Smile Experts Dental Clinic to repair cavities and restore tooth strength and comfort. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/dental-fillings-washington-dc/" },
  openGraph: {
    title: "Dental Fillings in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Restore decayed teeth with comfortable, long-lasting fillings.",
    url: "https://www.smilexpertsdental.com/dental-fillings-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Dental Fillings Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Fillings in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Comfortable fillings in Smile Experts Dental Clinic",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/dental-fillings-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Dental Fillings"
        description="Repair cavities and restore comfort and function with durable fillings."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Dental Fillings Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Dental Fillings"
        location="Smile Experts Dental Clinic"
        intro="We remove decay and place durable fillings designed for comfort, function, and appearance."
        heroImageSrc="/dental-fillings-washington-dc.jpg"
        heroImageAlt="Dental Fillings in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What are Dental Fillings?",
          content:
            "Fillings restore tooth structure lost to decay. We prioritize conservative techniques and materials tailored to your needs.",
        }}
        benefits={[
          { title: "Comfortable Treatment", description: "Modern anesthetics and techniques for a smooth visit." },
          { title: "Durable Materials", description: "Long-lasting restorations for daily function." },
          { title: "Natural Look", description: "Tooth-colored options to blend with your smile." },
          { title: "Prevents Spread", description: "Stops decay and protects neighboring teeth." },
          { title: "Quick Visits", description: "Many fillings are completed in under an hour." },
          { title: "Personalized Care", description: "We discuss options and recommend the best approach for you." },
        ]}
        faqs={[
          {
            question: "Will I feel pain?",
            answer: "You’ll be numb and should feel only pressure; post-op sensitivity is temporary.",
          },
          {
            question: "How long will it last?",
            answer: "Longevity varies by size, location, and care—often many years.",
          },
          {
            question: "Composite or amalgam?",
            answer: "We’ll recommend based on clinical factors and your preferences.",
          },
        ]}
        ctaSection={{
          title: "Repair Cavities Comfortably",
          description: "Schedule a filling appointment in Smile Experts Dental Clinic",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
