import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Dental Veneers Washington D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic offers dental veneers in Washington D.C to improve tooth color, shape, and symmetry with natural-looking, long-lasting results.",
  keywords: [
    "dental veneer in Washington D.C",
    "what is veneer in dental",
    "dental veneer colors",
    "dental veneer preparation in Washington D.C",
    "dental veneer process in Washington D.C",
    "what does a dental veneer look like",
    "dental veneer price"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/dental-veneers-washington-dc/" },
  openGraph: {
    title: "Dental Veneers Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers dental veneers in Washington D.C to improve tooth color, shape, and symmetry with natural-looking, long-lasting results.",
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
    title: "Dental Veneers Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers dental veneers in Washington D.C to improve tooth color, shape, and symmetry with natural-looking, long-lasting results.",
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
        intro="Create a brighter, more balanced smile with custom porcelain veneers designed for comfort and beauty. Our dental veneer in Washington D.C treatments improve tooth shape, shade, and symmetry while keeping results natural and long-lasting."
        heroImageSrc="/dental-veneers-washington-dc.jpg"
        heroImageAlt="Dental Veneers in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Are Dental Veneers?",
          content:
            "Understanding what is veneer in dental care helps patients see how thin shells are used to improve the look of teeth. Veneers bond to the front surface of teeth to correct discoloration, chips, gaps, and minor misalignment while maintaining a realistic appearance.",
        }}
        benefits={[
          { title: "Natural Aesthetics", description: "Custom dental veneer colors are selected to match your smile for a smooth, lifelike finish." },
          { title: "Conservative Care", description: "Many cases require minimal dental veneer preparation in Washington D.C, helping preserve natural tooth structure." },
          { title: "Stain Resistant", description: "Porcelain veneers resist discoloration from daily foods and drinks." },
          { title: "Immediate Impact", description: "The dental veneer process in Washington D.C can create a noticeable improvement in just a few visits." },
          { title: "Durable Results", description: "With proper care, veneers can last for many years." },
          { title: "Confidence", description: "A refreshed smile helps you feel comfortable in photos, social settings, and daily life." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Planning",
            description: "We review your goals and assess your teeth to determine the best veneer options.",
          },
          {
            step: 2,
            title: "Preparation & Temporaries",
            description: "If needed, teeth are prepared and temporary veneers are placed.",
          },
          { step: 3, title: "Try-In & Bonding", description: "Your custom veneers are adjusted and bonded for the right fit and look." },
          { step: 4, title: "Follow-Up", description: "We confirm comfort and provide guidance for long-term care." },
        ]}
        faqs={[
          {
            question: "Do veneers look fake?",
            answer: "Many patients ask what does a dental veneer look like, and modern veneers are crafted to look natural and blend seamlessly with surrounding teeth.",
          },
          { question: "Are veneers permanent?", answer: "Veneers are considered a long-term solution, though they may need replacement over time." },
          {
            question: "How much do veneers cost?",
            answer:
              "The dental veneer price depends on materials, the number of veneers, and your treatment plan.",
          },
        ]}
        ctaSection={{
          title: "Discover Your Best Smile",
          description: "Schedule your veneer consultation at Smile Experts Dental Clinic today and take the next step toward a confident, polished smile with expert care in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
