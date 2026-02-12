import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Washington D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic offers cosmetic dentistry in Washington D.C including veneers, whitening, and smile improvements focused on natural, confident results.",
  keywords: [
    "Cosmetic Dentistry in Washington D.C",
    "what is cosmetic dentistry",
    "cosmetic dentistry services"
  ],
  alternates: {
    canonical: "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/",
  },
  openGraph: {
    title: "Cosmetic Dentistry Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers cosmetic dentistry in Washington D.C including veneers, whitening, and smile improvements focused on natural, confident results.",
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
    title: "Cosmetic Dentistry Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers cosmetic dentistry in Washington D.C including veneers, whitening, and smile improvements focused on natural, confident results.",
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
        intro="Refine tooth shape, shade, and symmetry with personalized treatments designed to help you feel confident in every smile. Our Cosmetic Dentistry in Washington D.C focuses on modern techniques that deliver balanced, natural-looking results while keeping your comfort a priority."
        heroImageSrc="/cosmetic-dentistry-washington-dc.jpg"
        heroImageAlt="Cosmetic Dentistry in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is Cosmetic Dentistry?",
          content:
            "Understanding what is cosmetic dentistry helps patients see how modern dental care goes beyond function. Cosmetic dentistry improves the color, shape, spacing, and alignment of teeth to create a more attractive smile while supporting overall oral confidence and facial harmony.",
        }}
        benefits={[
          { title: "Natural-Looking Results", description: "Advanced materials and careful planning help cosmetic treatments blend smoothly with your natural teeth." },
          {
            title: "Personalized Plans",
            description: "Your smile goals, daily habits, and comfort guide every treatment decision.",
          },
          { title: "Minimally Invasive Options", description: "Many procedures improve appearance with little to no removal of healthy tooth structure." },
          {
            title: "Confidence Boost",
            description: "A brighter, more balanced smile helps you feel comfortable in photos, conversations, and professional settings.",
          },
          { title: "Fast Improvements", description: "Procedures like whitening and bonding can refresh your smile in a short time." },
          { title: "Durable Solutions", description: "Veneers and ceramic restorations offer long-lasting results that support both beauty and function." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Smile Assessment",
            description: "We begin with a detailed discussion about your goals and a careful evaluation of your teeth and gums.",
          },
          {
            step: 2,
            title: "Treatment Options",
            description: "Options such as whitening, bonding, or veneers are explained clearly so you can choose what fits your needs.",
          },
          { step: 3, title: "Preview & Planning", description: "You will see potential outcomes and receive a clear plan that includes timing and care steps." },
          { step: 4, title: "Treatment Day(s)", description: "Comfortable appointments focus on accuracy, appearance, and patient ease." },
          {
            step: 5,
            title: "Maintenance",
            description: "Simple at-home care and regular dental visits help maintain your cosmetic results for years.",
          },
        ]}
        faqs={[
          { question: "Are cosmetic dentistry results natural?", answer: "Yes. Modern materials and skilled techniques allow cosmetic treatments to look realistic and well-balanced." },
          { question: "Is cosmetic dentistry safe?", answer: "Cosmetic procedures are considered safe when performed by trained dental professionals using approved materials and methods." },
          { question: "How long do veneers last?", answer: "With good oral hygiene and regular checkups, veneers can last many years while keeping your smile bright and even." },
        ]}
        ctaSection={{
          title: "Love Your Smile",
          description: "Book your cosmetic consultation at Smile Experts Dental Clinic today and take the next step toward a confident, polished smile with expert care in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
