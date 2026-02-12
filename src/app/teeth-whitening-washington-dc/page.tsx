import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Teeth Whitening Washington D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic offers teeth whitening in Washington D.C using safe, professional treatments to remove stains and create a brighter, confident smile.",
  keywords: [
    "teeth whitening in Washington D.C",
    "professional teeth whitening in Washington D.C",
    "is teeth whitening safe",
    "how long does teeth whitening last",
    "does whitening harm teeth"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/" },
  openGraph: {
    title: "Teeth Whitening Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers teeth whitening in Washington D.C using safe, professional treatments to remove stains and create a brighter, confident smile.",
    url: "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Teeth Whitening Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teeth Whitening Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic offers teeth whitening in Washington D.C using safe, professional treatments to remove stains and create a brighter, confident smile.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Teeth Whitening"
        description="Professional teeth whitening options for fast, predictable results."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Teeth Whitening Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Teeth Whitening"
        location="Smile Experts Dental Clinic"
        intro="Lift deep stains and brighten your smile with professional-grade care designed for comfort and lasting results. Our teeth whitening in Washington D.C helps remove discoloration caused by coffee, tea, aging, and lifestyle habits while keeping enamel protected."
        heroImageSrc="/teeth-whitening-washington-dc.jpg"
        heroImageAlt="Teeth Whitening in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is Professional Whitening?",
          content:
            "Understanding professional teeth whitening in Washington D.C means knowing your smile is treated under dental supervision. Safe, clinical-grade gels and custom protocols help brighten teeth quickly while reducing sensitivity and supporting healthy enamel.",
        }}
        benefits={[
          { title: "Fast Results", description: "In-office whitening can lighten teeth by several shades in a single visit." },
          { title: "Customized Treatment", description: "Your enamel type and goals guide the strength and style of your whitening plan." },
          { title: "Safe & Monitored", description: "Patients often ask is teeth whitening safe, and professional supervision ensures your comfort and enamel protection at every step." },
          { title: "Event-Ready", description: "Ideal before weddings, interviews, or special occasions." },
          { title: "Maintainable Results", description: "Many patients ask how long does teeth whitening last, and regular touch-ups help keep your smile bright for months." },
          { title: "Even Whitening", description: "Professional systems help prevent streaks and uneven color." },
        ]}
        faqs={[
          {
            question: "Will my teeth be sensitive?",
            answer: "Some patients feel mild sensitivity, which usually fades within a short time after treatment.",
          },
          {
            question: "How long does whitening last?",
            answer: "Results vary by diet and habits, but professional whitening can last many months with proper care.",
          },
          { question: "Does whitening harm teeth?", answer: "A common concern is does whitening harm teeth, but dentist-supervised whitening protects enamel when done correctly." },
        ]}
        ctaSection={{
          title: "Smile Brighter, Sooner",
          description: "Book your whitening appointment at Smile Experts Dental Clinic today and enjoy a brighter, more confident smile with expert dental care in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
