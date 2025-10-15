import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Dental Veneers in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Porcelain and composite veneers in Smile Experts Dental Clinic Correct chips, gaps, and discoloration with natural-looking results.",
  alternates: { canonical: "https://www.smilexpertsdental.com/dental-veneers-washington-dc/" },
  openGraph: {
    title: "Dental Veneers in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Transform your smile with custom veneers designed to look natural.",
    url: "https://www.smilexpertsdental.com/dental-veneers-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Dental Veneers Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Veneers in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Natural-looking veneers in Smile Experts Dental Clinic",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/dental-veneers-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Dental Veneers"
        description="Custom porcelain and composite veneers in Smile Experts Dental Clinic"
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Dental Veneers Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Dental Veneers"
        location="Smile Experts Dental Clinic"
        intro="Achieve a brighter, more balanced smile with custom veneers that enhance shape, shade, and symmetry."
        heroImageSrc="/dental-veneers-washington-dc.jpg"
        heroImageAlt="Dental Veneers in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What are Dental Veneers?",
          content:
            "Veneers are thin, custom shells that bond to the front of teeth to improve color, shape, and alignment. They’re crafted for lifelike translucency and durability.",
        }}
        benefits={[
          { title: "Natural Aesthetics", description: "Custom shade and shape for seamless results." },
          { title: "Conservative", description: "Minimal tooth preparation in many cases." },
          { title: "Stain Resistant", description: "Porcelain resists discoloration from daily life." },
          { title: "Immediate Impact", description: "Transform your smile in a few visits." },
          { title: "Durable", description: "With care, veneers can last many years." },
          { title: "Confidence", description: "Feel great in photos, events, and everyday life." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Planning",
            description: "We align options with your goals and take records.",
          },
          {
            step: 2,
            title: "Preparation & Temporaries",
            description: "Teeth are prepared if needed and temporaries placed.",
          },
          { step: 3, title: "Try-in & Bonding", description: "We refine details and bond your custom veneers." },
          { step: 4, title: "Follow-Up", description: "We check comfort and provide care guidance." },
        ]}
        faqs={[
          {
            question: "Do veneers look fake?",
            answer: "No—modern materials and customization create naturally beautiful results.",
          },
          { question: "Are veneers permanent?", answer: "They’re a long-term option; some prep may be irreversible." },
          {
            question: "Porcelain vs composite?",
            answer:
              "Porcelain offers superior longevity and stain resistance; composite can be a budget-friendly option.",
          },
        ]}
        ctaSection={{
          title: "Discover Your Best Smile",
          description: "Schedule a veneers consultation in Smile Experts Dental Clinic to explore your options.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
