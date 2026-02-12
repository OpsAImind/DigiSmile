import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Tooth Colored Fillings D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic offers tooth colored fillings in Washington D.C using safe composite materials to repair cavities and keep your smile natural and strong.",
  keywords: [
    "tooth colored fillings in Washington D.C",
    "tooth-colored fillings",
    "tooth filling color",
    "tooth colored composite filling",
    "tooth colored composite resin fillings",
    "what color are tooth fillings"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/" },
  openGraph: {
    title: "Tooth Colored Fillings D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers tooth colored fillings in Washington D.C using safe composite materials to repair cavities and keep your smile natural and strong.",
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
    title: "Tooth Colored Fillings D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers tooth colored fillings in Washington D.C using safe composite materials to repair cavities and keep your smile natural and strong.",
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
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Tooth-Colored Fillings Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Tooth-Colored Fillings"
        location="Smile Experts Dental Clinic"
        intro="Repair cavities and small chips with composite restorations that blend naturally with your smile. Our tooth colored fillings in Washington D.C help restore damaged teeth while keeping a smooth, natural appearance and strong bite."
        heroImageSrc="/tooth-colored-fillings-washington-dc.jpg"
        heroImageAlt="Tooth-Colored Fillings in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Are Tooth-Colored Fillings?",
          content:
            "Tooth-colored fillings use composite resin that bonds directly to enamel to restore both strength and appearance. This modern material allows dentists to repair cavities and minor damage while keeping the tooth looking natural and healthy.",
        }}
        benefits={[
          { title: "Seamless Appearance", description: "Fillings are matched to your natural tooth filling color for a smooth, even look." },
          { title: "Mercury-Free", description: "Composite materials are metal-free and safe for long-term dental use." },
          { title: "Strong Bond", description: "Tooth colored composite filling techniques help support the remaining tooth structure." },
          { title: "Versatile", description: "These fillings work well for cavities, minor chips, and cosmetic reshaping." },
          { title: "Conservative", description: "Tooth colored composite resin fillings often require less removal of healthy tooth material." },
          { title: "Same-Day Repair", description: "Most treatments are completed in a single visit for quick results." },
        ]}
        faqs={[
          { question: "How long do tooth-colored fillings last?", answer: "With proper care, tooth colored fillings can last many years while maintaining their appearance." },
          { question: "Are tooth-colored fillings safe?", answer: "Yes, composite materials are safe, durable, and widely used in modern dentistry." },
          { question: "Will the filling match my tooth?", answer: "Many patients ask what color are tooth fillings, and composite shades are chosen to match your natural enamel as closely as possible." },
        ]}
        ctaSection={{
          title: "Seamless, Durable Restorations",
          description: "Book your filling appointment at Smile Experts Dental Clinic today and enjoy comfortable, natural-looking results with trusted dental care in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
