import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Affordable Dentures Washington D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic provides affordable dentures in Washington D.C including partial, full & implant-supported options for comfortable, natural smiles.",
  keywords: [
    "affordable dentures in Washington D.C",
    "what are dentures",
    "partial dentures in Washington D.C",
    "dentures and implants in Washington D.C",
    "how much do dentures cost"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/affordable-dentures-washington-dc/" },
  openGraph: {
    title: "Affordable Dentures Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic provides affordable dentures in Washington D.C including partial, full & implant-supported options for comfortable, natural smiles.",
    url: "https://www.smilexpertsdental.com/affordable-dentures-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Affordable Dentures Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Dentures Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic provides affordable dentures in Washington D.C including partial, full & implant-supported options for comfortable, natural smiles.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/affordable-dentures-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Affordable Dentures"
        description="Comfortable, natural-looking full and partial dentures in Smile Experts Dental Clinic"
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Affordable Dentures Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Affordable Dentures"
        location="Smile Experts Dental Clinic"
        intro="Restore your smile's comfort and confidence with custom dentures made to fit your lifestyle. Our affordable dentures in Washington D.C help replace missing teeth while supporting clear speech, comfortable chewing, and a natural-looking smile."
        heroImageSrc="/affordable-dentures-washington-dc.jpg"
        heroImageAlt="Affordable Dentures in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Are Dentures?",
          content:
            "Understanding what are dentures are helps patients know how missing teeth can be replaced with removable or fixed dental appliances. Dentures restore the ability to eat, speak, and smile while supporting facial structure and oral balance.",
        }}
        benefits={[
          { title: "Improved Function", description: "Custom partial dentures in Washington D.C help restore chewing and everyday comfort." },
          { title: "Enhanced Appearance", description: "Dentures support lips and cheeks to create a more youthful look." },
          {
            title: "Budget-Friendly Options",
            description: "Treatment choices are available to fit different needs and budgets.",
          },
          { title: "Custom Fit", description: "Careful measurements and adjustments help provide a secure, comfortable fit." },
          { title: "Removable or Implant-Supported", description: "Options like dentures and implants in Washington D.C allow patients to choose the level of stability they prefer." },
          { title: "Maintainable", description: "We provide guidance for daily cleaning and long-term care." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Impressions",
            description: "We discuss goals and take detailed measurements.",
          },
          { step: 2, title: "Try-In", description: "A wax model allows you to test fit, comfort, and appearance." },
          { step: 3, title: "Delivery & Adjustments", description: "Your dentures are placed and adjusted for comfort." },
          { step: 4, title: "Follow-Up", description: "We monitor fit as you adapt and make refinements as needed." },
        ]}
        faqs={[
          { question: "Will dentures look natural?", answer: "Modern materials are designed to match natural teeth and gum tones." },
          {
            question: "How long do dentures last?",
            answer: "With proper care, dentures can last many years before needing replacement.",
          },
          { question: "How much do dentures cost?", answer: "Many patients ask how much do dentures cost, and pricing depends on materials, type, and whether implants are used." },
        ]}
        ctaSection={{
          title: "Restore Comfort and Confidence",
          description: "Schedule your denture consultation at Smile Experts Dental Clinic today and enjoy a comfortable, natural-looking smile with trusted dental care in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
