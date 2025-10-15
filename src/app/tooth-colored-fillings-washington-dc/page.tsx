import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Tooth-Colored Fillings in Washington, D.C. | Smile Experts Dental",
  description:
    "Natural-looking, mercury-free tooth-colored fillings in Washington, D.C. Restore strength and appearance. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/" },
  openGraph: {
    title: "Tooth-Colored Fillings in Washington, D.C. | Smile Experts Dental",
    description: "Composite fillings restore decayed or chipped teeth with a seamless look.",
    url: "https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Tooth-Colored Fillings Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tooth-Colored Fillings in Washington, D.C. | Smile Experts Dental",
    description: "Aesthetic composite fillings in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Tooth-Colored Fillings"
        description="Aesthetic, durable composite fillings that blend with your natural tooth color."
        url={url}
        areaServed="Washington, D.C."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Tooth-Colored Fillings Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Tooth-Colored Fillings"
        location="Washington, D.C."
        intro="Repair cavities and small chips with composite fillings that match your tooth color for a seamless finish."
        heroImageSrc="/tooth-colored-fillings-washington-dc.jpg"
        heroImageAlt="Tooth-Colored Fillings in Washington, D.C."
        whatIsSection={{
          title: "What are Tooth-Colored Fillings?",
          content:
            "Composite resin bonds to enamel to restore strength and appearance while requiring conservative preparation.",
        }}
        benefits={[
          { title: "Seamless Appearance", description: "Blend with your natural tooth shade." },
          { title: "Mercury-Free", description: "Composite resin material without metal." },
          { title: "Strong Bond", description: "Adhesive technique helps support tooth structure." },
          { title: "Versatile", description: "Great for small chips and cosmetic reshaping." },
          { title: "Conservative", description: "Often requires less removal of natural tooth." },
          { title: "Same-Day Repair", description: "Most fillings are completed in a single visit." },
        ]}
        faqs={[
          { question: "How long do composites last?", answer: "With good care, many last 5–10 years or more." },
          { question: "Are they safe?", answer: "Yes—composite resins are widely used and well-studied." },
          { question: "Will it match my tooth?", answer: "We custom shade-match for natural results." },
        ]}
        ctaSection={{
          title: "Seamless, Durable Restorations",
          description: "Book a filling appointment in Washington, D.C. today.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
