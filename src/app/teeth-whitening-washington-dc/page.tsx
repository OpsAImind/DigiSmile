import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Teeth Whitening in Washington, D.C. | Smile Experts Dental",
  description:
    "Professional teeth whitening in Washington, D.C. Brighten your smile safely and effectively. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/" },
  openGraph: {
    title: "Teeth Whitening in Washington, D.C. | Smile Experts Dental",
    description: "Noticeably brighter smiles with in-office and take-home options.",
    url: "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Teeth Whitening Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teeth Whitening in Washington, D.C. | Smile Experts Dental",
    description: "Safe, effective whitening in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Teeth Whitening"
        description="Professional teeth whitening options for fast, predictable results."
        url={url}
        areaServed="Washington, D.C."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Teeth Whitening Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Teeth Whitening"
        location="Washington, D.C."
        intro="Lift deep stains and brighten your smile with professional-grade whitening designed for your comfort."
        heroImageSrc="/teeth-whitening-washington-dc.jpg"
        heroImageAlt="Teeth Whitening in Washington, D.C."
        whatIsSection={{
          title: "What is Professional Whitening?",
          content:
            "Dentist-supervised whitening uses safe, effective gels and custom protocols to quickly brighten your smile with minimal sensitivity.",
        }}
        benefits={[
          { title: "Fast Results", description: "In-office whitening can brighten multiple shades in a single visit." },
          { title: "Customized", description: "Take-home trays and strengths tailored to your enamel." },
          { title: "Safe & Monitored", description: "We prioritize your comfort and enamel health." },
          { title: "Event-Ready", description: "Ideal before weddings, interviews, or photos." },
          { title: "Maintainable", description: "Touch-ups keep your smile bright long-term." },
          { title: "Even Whitening", description: "Professional methods reduce blotchiness and streaking." },
        ]}
        faqs={[
          {
            question: "Will my teeth be sensitive?",
            answer: "Some temporary sensitivity is common; we tailor strength and provide desensitizing protocols.",
          },
          {
            question: "How long does it last?",
            answer: "Lifestyle and diet matter; periodic touch-ups maintain brightness.",
          },
          { question: "Is it safe?", answer: "Yes—when supervised by a dentist and customized to your needs." },
        ]}
        ctaSection={{
          title: "Smile Brighter, Sooner",
          description: "Book professional whitening in Washington, D.C. and see immediate results.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
