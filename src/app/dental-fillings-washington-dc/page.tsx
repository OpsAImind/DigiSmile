import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Dental Fillings Washington D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic offers dental fillings in Washington D.C to treat cavities using durable, natural-looking materials for long-lasting comfort.",
  keywords: [
    "dental filling in Washington D.C",
    "what is a dental filling",
    "do dental filling hurt",
    "composite dental filling",
    "what does a dental filling look like",
    "how long do dental fillings take"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/dental-fillings-washington-dc/" },
  openGraph: {
    title: "Dental Fillings Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers dental fillings in Washington D.C to treat cavities using durable, natural-looking materials for long-lasting comfort.",
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
    title: "Dental Fillings Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers dental fillings in Washington D.C to treat cavities using durable, natural-looking materials for long-lasting comfort.",
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
        intro="Protect your teeth and restore comfort with professional cavity care. Our dental filling in Washington D.C helps repair decay while keeping your bite strong and your smile natural in appearance."
        heroImageSrc="/dental-fillings-washington-dc.jpg"
        heroImageAlt="Dental Fillings in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Are Dental Fillings?",
          content:
            "Understanding what is a dental filling helps patients see how damaged teeth are restored. Fillings replace areas affected by decay, bringing back strength and shape while allowing you to chew and speak comfortably.",
        }}
        benefits={[
          { title: "Comfortable Treatment", description: "Many patients ask do dental filling hurt, and modern anesthesia keeps the procedure smooth and pain-controlled." },
          { title: "Durable Materials", description: "Options such as composite dental filling provide reliable strength for everyday use." },
          { title: "Natural Look", description: "Tooth-colored materials blend in with your smile." },
          { title: "Prevents Spread", description: "Treating cavities stops decay from reaching nearby teeth." },
          { title: "Quick Visits", description: "Most fillings are completed efficiently, often in one visit." },
          { title: "Personalized Care", description: "We explain your options and recommend what fits your needs best." },
        ]}
        faqs={[
          {
            question: "How long do dental fillings last?",
            answer: "With good oral hygiene, fillings can last many years before needing replacement.",
          },
          {
            question: "What does a dental filling look like?",
            answer: "Many people wonder what does a dental filling look like, and tooth-colored fillings are designed to match natural enamel.",
          },
          {
            question: "How long do dental fillings take?",
            answer: "Most procedures are completed in under an hour, depending on the size of the cavity.",
          },
        ]}
        ctaSection={{
          title: "Repair Cavities Comfortably",
          description: "Schedule your filling appointment at Smile Experts Dental Clinic today and receive trusted, gentle care for a healthy smile in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
