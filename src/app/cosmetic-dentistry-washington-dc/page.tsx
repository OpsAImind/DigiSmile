import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Cosmetic Dentistry in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Cosmetic dentistry in Smile Experts Dental Clinic including veneers, whitening, bonding, and more. Call (202) 545-6336.",
  alternates: {
    canonical: "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/",
  },
  openGraph: {
    title: "Cosmetic Dentistry in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Personalized cosmetic dentistry—veneers, whitening, and bonding to enhance your smile.",
    url: "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Cosmetic Dentistry Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic Dentistry in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Cosmetic smile enhancements in Smile Experts Dental Clinic",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Cosmetic Dentistry"
        description="Smile enhancements including veneers, whitening, and bonding in Smile Experts Dental Clinic"
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Cosmetic Dentistry Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Cosmetic Dentistry"
        location="Smile Experts Dental Clinic"
        intro="Refine tooth shape, shade, and symmetry with personalized cosmetic treatments designed for your unique smile."
        heroImageSrc="/cosmetic-dentistry-washington-dc.jpg"
        heroImageAlt="Cosmetic Dentistry in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What is Cosmetic Dentistry?",
          content:
            "Cosmetic dentistry focuses on improving the appearance of your smile—addressing discoloration, chips, spacing, and alignment. We tailor plans to achieve natural, confident results.",
        }}
        benefits={[
          { title: "Natural-Looking Results", description: "Modern materials blend seamlessly with your smile." },
          {
            title: "Personalized Plans",
            description: "Every smile is unique—your plan reflects your goals and lifestyle.",
          },
          { title: "Minimally Invasive", description: "Many options require little to no tooth alteration." },
          {
            title: "Confidence Boost",
            description: "Look and feel your best in photos, presentations, and every day.",
          },
          { title: "Fast Improvements", description: "Whitening and bonding can refresh your smile quickly." },
          { title: "Durable Options", description: "Veneers and ceramic restorations provide long-lasting beauty." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Smile Assessment",
            description: "We discuss your goals and evaluate your smile.",
          },
          {
            step: 2,
            title: "Treatment Options",
            description: "We present options like whitening, bonding, or veneers.",
          },
          { step: 3, title: "Preview & Planning", description: "See potential outcomes and plan timelines and costs." },
          { step: 4, title: "Treatment Day(s)", description: "Comfortable, efficient care with a focus on detail." },
          {
            step: 5,
            title: "Maintenance",
            description: "Keep your results fresh with simple at-home care and visits.",
          },
        ]}
        faqs={[
          { question: "Are results natural?", answer: "Yes—shade, translucency, and shape are customized to you." },
          { question: "Does whitening hurt?", answer: "Sensitivity is temporary for most; we offer gentle options." },
          { question: "How long do veneers last?", answer: "With care, many veneers last 10–15 years or more." },
        ]}
        ctaSection={{
          title: "Love Your Smile",
          description: "Book a cosmetic consultation in Smile Experts Dental Clinic and preview your possibilities.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
