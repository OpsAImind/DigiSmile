import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Comprehensive Dental Care D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic provides comprehensive dental care in Washington D.C including preventive, cosmetic, and restorative services for the whole family.",
  keywords: [
    "Comprehensive dental care in Washington D.C",
    "What is comprehensive dental care",
    "Comprehensive family dental care in Washington D.C",
    "What does comprehensive dental care mean",
    "What is preventive and comprehensive dental care"
  ],
  alternates: {
    canonical: "https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/",
  },
  openGraph: {
    title: "Comprehensive Dental Care D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic provides comprehensive dental care in Washington D.C including preventive, cosmetic, and restorative services for the whole family.",
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
    title: "Comprehensive Dental Care D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic provides comprehensive dental care in Washington D.C including preventive, cosmetic, and restorative services for the whole family.",
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
        intro="Get all your dental needs handled in one place with trusted comprehensive dental care in Washington D.C. From routine checkups to cosmetic and restorative treatments, everything is planned around your comfort, time, and long-term oral health."
        heroImageSrc="/comprehensive-dental-care-washington-dc.jpg"
        heroImageAlt="Comprehensive Dental Care in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is Comprehensive Dental Care?",
          content:
            "Understanding what is comprehensive dental care means knowing your full oral health is supported under one roof. It includes preventive, diagnostic, cosmetic, and restorative services working together to keep your smile healthy, functional, and confident.",
        }}
        benefits={[
          {
            title: "All Services in One Place",
            description: "Preventive, cosmetic, and restorative care are handled by one coordinated team.",
          },
          {
            title: "Personalized Treatment Plans",
            description: "Your needs and goals guide your care, so results look good and feel comfortable.",
          },
          {
            title: "Modern Technology",
            description: "Digital imaging and gentle techniques help improve accuracy and comfort.",
          },
          {
            title: "Convenient Scheduling",
            description: "Appointments are easy to book and fit into busy routines.",
          },
          {
            title: "Continuity of Care",
            description: "Your dental history is always known and monitored by the same team.",
          },
          {
            title: "Family-Friendly Care",
            description: "Our comprehensive family dental care in Washington D.C supports children, adults, and seniors.",
          },
        ]}
        procedure={[
          {
            step: 1,
            title: "Comprehensive Exam",
            description: "Your health history, images, and concerns are reviewed.",
          },
          {
            step: 2,
            title: "Full Assessment",
            description: "Teeth, gums, bite, and appearance are carefully checked.",
          },
          {
            step: 3,
            title: "Personalized Plan",
            description: "You receive a clear plan with treatment options and timing.",
          },
          {
            step: 4,
            title: "Phased Care",
            description: "Care is scheduled in steps for comfort and convenience.",
          },
          {
            step: 5,
            title: "Ongoing Prevention",
            description: "Routine visits help avoid bigger problems later.",
          },
        ]}
        whoCandidateSection={{
          title: "Who Benefits from Comprehensive Care?",
          content:
            "Anyone who wants proactive, well-organized dental care with fewer appointments and better long-term results.",
        }}
        faqs={[
          {
            question: "What does comprehensive dental care mean?",
            answer:
              "It means all your dental needs are managed together instead of separately.",
          },
          {
            question: "Does it include preventive care?",
            answer: "Yes, what is preventive and comprehensive dental care includes exams, cleanings, and early detection.",
          },
          {
            question: "How do I start?",
            answer: "Simply schedule a comprehensive exam to begin.",
          },
        ]}
        ctaSection={{
          title: "Experience Complete Dental Care",
          description:
            "Book your comprehensive dental visit at Smile Experts Dental Clinic today and enjoy reliable, coordinated care that keeps your smile healthy and strong in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
