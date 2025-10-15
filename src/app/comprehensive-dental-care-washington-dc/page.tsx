import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Comprehensive Dental Care in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Full-service dental care in Smile Experts Dental Clinic Preventive, cosmetic, and restorative treatments in one place. Call (202) 545-6336.",
  alternates: {
    canonical: "https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/",
  },
  openGraph: {
    title: "Comprehensive Dental Care in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Full-service dental care from preventive to cosmetic and restorative treatments, all in one place.",
    url: "https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Comprehensive Dental Care Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Dental Care in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Full-service dental care in Smile Experts Dental Clinic",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Comprehensive Dental Care"
        description="Complete dental care services including preventive, cosmetic, and restorative treatments all under one roof."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Comprehensive Dental Care Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Comprehensive Dental Care"
        location="Smile Experts Dental Clinic"
        intro="Experience comprehensive dental care under one roof—routine checkups, cosmetic enhancements, and restorative treatments tailored to you."
        heroImageSrc="/comprehensive-dental-care-washington-dc.jpg"
        heroImageAlt="Comprehensive Dental Care in Smile Experts Dental Clinic"
        theme={{
          // 3-5 colors total: primary, primaryForeground, background, foreground, muted
          primary: "#0EA5E9", // sky-500
          primaryForeground: "#FFFFFF",
          background: "#FFFFFF",
          foreground: "#0B0D10",
          muted: "#F3F5F7",
        }}
        whatIsSection={{
          title: "What is Comprehensive Dental Care?",
          content:
            "Comprehensive dental care means your entire oral health is supported in one place—from prevention and diagnostics to cosmetic and restorative solutions. We coordinate your care so you get the right treatment at the right time, with a plan designed for your long-term health.",
        }}
        benefits={[
          {
            title: "All Services in One Place",
            description: "Preventive, cosmetic, and restorative care coordinated by one team that knows your history.",
          },
          {
            title: "Personalized Treatment Plans",
            description: "Your goals guide your plan—comfort, function, and aesthetics balanced for the best results.",
          },
          {
            title: "Modern Technology",
            description: "Digital imaging and minimally invasive techniques improve accuracy, comfort, and outcomes.",
          },
          {
            title: "Convenient Scheduling",
            description: "Flexible appointment times in Smile Experts Dental Clinic for busy professionals and families.",
          },
          {
            title: "Continuity of Care",
            description: "A trusted team that monitors your oral health and proactively addresses changes.",
          },
          {
            title: "Family-Friendly",
            description: "Care for all ages—from first visits to comprehensive smile restorations.",
          },
        ]}
        procedure={[
          {
            step: 1,
            title: "Comprehensive Exam",
            description: "We review your health history, take any needed images, and discuss your goals.",
          },
          {
            step: 2,
            title: "Full Assessment",
            description: "We evaluate teeth, gums, bite, jaw health, and cosmetics to map your baseline.",
          },
          {
            step: 3,
            title: "Personalized Plan",
            description: "You’ll receive a clear, prioritized plan with options and transparent costs.",
          },
          {
            step: 4,
            title: "Phased Care",
            description: "Treatments are scheduled in phases for comfort, convenience, and budget.",
          },
          {
            step: 5,
            title: "Ongoing Prevention",
            description: "Regular visits keep your smile healthy and reduce the risk of future problems.",
          },
        ]}
        whoCandidateSection={{
          title: "Who Benefits from Comprehensive Care?",
          content:
            "Anyone seeking proactive dental health, efficient scheduling, and a long-term relationship with a trusted team in Smile Experts Dental Clinic",
        }}
        faqs={[
          {
            question: "What does ‘comprehensive’ include?",
            answer:
              "Prevention, diagnostics, fillings, crowns, root canals, dentures, cosmetic treatments, and more—coordinated in one practice.",
          },
          {
            question: "Do you accept insurance?",
            answer: "Yes, we work with many plans and provide transparent estimates and flexible options.",
          },
          {
            question: "How do I start?",
            answer: "Book a comprehensive exam and consultation. We’ll tailor a plan to your needs and goals.",
          },
        ]}
        ctaSection={{
          title: "Experience Complete Dental Care",
          description:
            "Get all your dental needs met in one location. Schedule your comprehensive exam in Smile Experts Dental Clinic today.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
