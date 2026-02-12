import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "General Dentistry Services in Washington D.C",
  description:
    "Smile Experts Dental Clinic provides general dentistry services in Washington D.C, including exams, cleanings, and preventive dental care for the whole family.",
  keywords: [
    "general dentistry services in Washington D.C",
    "what is general dentistry services",
    "general dentistry service in Washington D.C",
    "local general dentistry services in Washington D.C"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/general-dentistry-washington-dc/" },
  openGraph: {
    title: "General Dentistry Services in Washington D.C",
    description: "Smile Experts Dental Clinic provides general dentistry services in Washington D.C, including exams, cleanings, and preventive dental care for the whole family.",
    url: "https://www.smilexpertsdental.com/general-dentistry-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "General Dentistry Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "General Dentistry Services in Washington D.C",
    description: "Smile Experts Dental Clinic provides general dentistry services in Washington D.C, including exams, cleanings, and preventive dental care for the whole family.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/general-dentistry-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="General Dentistry"
        description="Cleanings, exams, and prevention for long-term oral health in Smile Experts Dental Clinic"
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "General Dentistry Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="General Dentistry"
        location="Smile Experts Dental Clinic"
        intro="Maintain a healthy, confident smile with routine cleanings, exams, and preventive care for the whole family. Our general dentistry services in Washington D.C focus on early detection, comfort, and long-term oral health, helping patients of all ages keep their teeth and gums in great condition through consistent care."
        heroImageSrc="/general-dentistry-washington-dc.jpg"
        heroImageAlt="General Dentistry in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is General Dentistry?",
          content:
            "General dentistry focuses on prevention and early intervention to support long-term oral health. Understanding what is general dentistry services helps patients see the value of routine visits, which protect teeth and gums, reduce the need for future treatments, and help maintain a strong, healthy smile over time.",
        }}
        benefits={[
          { title: "Prevention First", description: "Our general dentistry service in Washington D.C focuses on early detection, helping catch dental issues before they turn into complex treatments." },
          { title: "Personalized Advice", description: "Patients receive clear, practical home care guidance based on their individual oral health needs." },
          { title: "Comfortable Visits", description: "Gentle cleanings and modern dental technology help create a relaxed and comfortable experience." },
          { title: "Family-Friendly Care", description: "We provide consistent dental care for children, teens, adults, and seniors in a welcoming environment." },
          { title: "Clear Treatment Plans", description: "All recommended care is explained clearly, including timelines and available options." },
          { title: "Convenient Scheduling", description: "Flexible appointment times make it easy to receive care at Smile Experts Dental Clinic." },
        ]}
        faqs={[
          {
            question: "How often should I visit the dentist?",
            answer: "Most patients benefit from dental checkups every six months. Visiting local general dentistry services in Washington D.C regularly helps detect concerns early and maintain long-term oral health.",
          },
          {
            question: "Are dental X-rays necessary?",
            answer: "Dental X-rays help identify problems that are not visible during a standard exam. They are recommended only when clinically necessary for accurate diagnosis.",
          },
          { question: "Do you provide dental care for children?", answer: "Yes, we welcome children of all ages and provide gentle, family-focused dental care to support healthy smiles from an early age." },
        ]}
        ctaSection={{
          title: "Keep Your Smile Healthy",
          description: "Schedule your cleaning and exam in Smile Experts Dental Clinic today.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
