import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Affordable Dentures in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Affordable dentures and partials in Smile Experts Dental Clinic Restore comfort, function, and confidence. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/affordable-dentures-washington-dc/" },
  openGraph: {
    title: "Affordable Dentures in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Comfortable, natural-looking dentures and partials tailored to you.",
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
    title: "Affordable Dentures in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Dentures and partials in Smile Experts Dental Clinic",
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
        intro="Restore your smile’s function and appearance with dentures designed for comfort, fit, and confidence."
        heroImageSrc="/affordable-dentures-washington-dc.jpg"
        heroImageAlt="Affordable Dentures in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What are Dentures?",
          content:
            "Dentures replace missing teeth to restore your ability to eat, speak, and smile confidently. We offer full, partial, and implant-supported options.",
        }}
        benefits={[
          { title: "Improved Function", description: "Eat more comfortably with a stable, customized fit." },
          { title: "Enhanced Appearance", description: "Support lips and cheeks for a more youthful look." },
          {
            title: "Budget-Friendly Options",
            description: "Multiple materials and approaches fit a range of budgets.",
          },
          { title: "Custom Fit", description: "Careful measurements and adjustments for comfort." },
          { title: "Removable or Implant-Supported", description: "Choose what matches your goals and lifestyle." },
          { title: "Maintainable", description: "Clear guidance to keep your dentures in great shape." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Impressions",
            description: "We review options and take detailed measurements.",
          },
          { step: 2, title: "Try-In", description: "A wax try-in checks fit, speech, and esthetics." },
          { step: 3, title: "Delivery & Adjustments", description: "We place your dentures and fine-tune comfort." },
          { step: 4, title: "Follow-Up", description: "We monitor fit as you adapt and make any needed adjustments." },
        ]}
        faqs={[
          { question: "Will dentures look natural?", answer: "Yes—shade and shape are customized to your preference." },
          {
            question: "How long do they last?",
            answer: "With care, many last 5–10 years; periodic relines may be needed.",
          },
          { question: "Are implants required?", answer: "No, but implant support can improve stability and function." },
        ]}
        ctaSection={{
          title: "Restore Comfort and Confidence",
          description: "Schedule a denture consultation in Smile Experts Dental Clinic",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
