import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "General Dentistry in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Preventive and family dental care in Smile Experts Dental Clinic Cleanings, exams, and personalized oral health plans. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/general-dentistry-washington-dc/" },
  openGraph: {
    title: "General Dentistry in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Cleanings, exams, and prevention for all ages.",
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
    title: "General Dentistry in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Preventive and family dental care in Smile Experts Dental Clinic",
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
        intro="Maintain a healthy smile with routine cleanings, exams, and preventive care for the whole family."
        heroImageSrc="/general-dentistry-washington-dc.jpg"
        heroImageAlt="General Dentistry in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What is General Dentistry?",
          content:
            "General dentistry focuses on prevention and early intervention. Routine visits help protect your teeth and gums, reduce future treatment needs, and keep your smile strong.",
        }}
        benefits={[
          { title: "Prevention First", description: "Catch issues early to avoid complex care later." },
          { title: "Personalized Advice", description: "Home care tips and tools tailored to your needs." },
          { title: "Comfortable Visits", description: "Gentle cleanings and modern technology." },
          { title: "Family-Friendly", description: "Care for children, teens, and adults." },
          { title: "Clear Plans", description: "We explain options and timelines for any recommended care." },
          { title: "Convenient Scheduling", description: "Easy appointments in Smile Experts Dental Clinic" },
        ]}
        faqs={[
          {
            question: "How often should I visit?",
            answer: "Most patients benefit from a checkup every 6 months; some need more frequent visits.",
          },
          {
            question: "Are X-rays necessary?",
            answer: "They help us find issues not visible to the eye. We take them only when needed.",
          },
          { question: "Do you see kids?", answer: "Yes, we’re happy to care for your whole family." },
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
