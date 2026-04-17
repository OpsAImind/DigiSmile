import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Clear Aligners in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Straighten your teeth discreetly with clear aligners in Smile Experts Dental Clinic. Virtually invisible, removable, and comfortable. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/clear-aligners-washington-dc/" },
  keywords: [
    "clear aligners Washington DC",
    "Invisalign Washington DC",
    "invisible braces Smile Experts Dental",
    "teeth straightening DC",
    "cosmetic orthodontics Washington DC",
    "clear braces DC",
  ],
  openGraph: {
    title: "Clear Aligners in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Achieve a perfectly straight smile without metal brackets — discreet, removable clear aligners tailored to you.",
    url: "https://www.smilexpertsdental.com/clear-aligners-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Clear Aligners Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clear Aligners in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Virtually invisible aligners for a straighter, more confident smile.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
        follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/clear-aligners-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Clear Aligners"
        description="Custom clear aligner treatment for discreet teeth straightening at Smile Experts Dental Clinic."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Cosmetic Dentistry", url: "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/" },
          { name: "Clear Aligners Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Clear Aligners"
        location="Smile Experts Dental Clinic"
        intro="Straighten your teeth on your terms — virtually invisible, removable aligners that fit your lifestyle without wires, brackets, or compromise."
        heroImageSrc="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80"
        heroImageAlt="Clear Aligners in Smile Experts Dental Clinic"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Cosmetic Dentistry", url: "/cosmetic-dentistry-washington-dc/" },
          { name: "Clear Aligners", url: "" },
        ]}
        whatIsSection={{
          title: "What Are Clear Aligners?",
          content:
            "Clear aligners are a series of custom-fabricated, BPA-free transparent trays that gradually shift your teeth into ideal position. Each set of trays moves teeth by small, precise increments. Worn 20–22 hours per day and changed every 1–2 weeks, they treat crowding, spacing, overbites, underbites, and crossbites — all without anyone knowing you're in orthodontic treatment.",
        }}
        benefits={[
          { title: "Nearly Invisible", description: "Custom-fit clear trays are virtually undetectable in conversation and photos." },
          { title: "Removable", description: "Take them out to eat, brush, and floss — no dietary restrictions or hygiene compromises." },
          { title: "Comfortable", description: "Smooth edges with no metal brackets or wires to irritate cheeks and gums." },
          { title: "Predictable Results", description: "Digital planning lets us show you your projected final smile before treatment begins." },
          { title: "Fewer Office Visits", description: "Check-ins every 6–8 weeks rather than monthly bracket adjustments." },
          { title: "Dual Purpose", description: "Aligners can simultaneously treat crowding while improving overall smile aesthetics." },
        ]}
        procedure={[
          { step: 1, title: "Consultation & Smile Scan", description: "We take digital impressions and photos to assess your bite and crowding." },
          { step: 2, title: "Digital Treatment Preview", description: "A 3D simulation shows exactly how your teeth will move and what your final smile will look like." },
          { step: 3, title: "Custom Aligners Fabricated", description: "Your full series of precision trays is manufactured and delivered to our clinic." },
          { step: 4, title: "Wearing Your Aligners", description: "You wear each set 20–22 hours daily, advancing to the next tray every 1–2 weeks." },
          { step: 5, title: "Progress Check-Ins", description: "We monitor tooth movement every 6–8 weeks and make any needed refinements." },
          { step: 6, title: "Retention Phase", description: "Custom retainers preserve your results long-term after active treatment ends." },
        ]}
        whoCandidateSection={{
          title: "Is Clear Aligner Treatment Right for You?",
          content:
            "Clear aligners are ideal for teens and adults with mild to moderate crowding, spacing, or bite issues who want a discreet treatment option. They work especially well for patients with professional or social lifestyles where visible braces aren't preferred. Severe skeletal bite problems may still require traditional orthodontics — we'll give you an honest assessment at your consultation.",
        }}
        faqs={[
          {
            question: "How long does clear aligner treatment take?",
            answer: "Mild cases can resolve in 6–9 months; moderate cases typically take 12–18 months. Complex cases may take up to 24 months. Your digital simulation gives a projected timeline before you commit.",
          },
          {
            question: "Can I eat and drink with them in?",
            answer: "Remove aligners when eating or drinking anything other than water. This protects the trays and prevents staining.",
          },
          {
            question: "Are they as effective as braces?",
            answer: "For most adult cases of crowding and spacing, yes. Modern aligner systems have been refined significantly and achieve results comparable to braces for most common tooth movements.",
          },
          {
            question: "What happens if I lose a tray?",
            answer: "Contact us promptly. Depending on your stage, we'll have you move to the next set or order a replacement. Our digital records make reprinting trays straightforward.",
          },
        ]}
        ctaSection={{
          title: "See Your New Smile Before You Start",
          description: "Book a clear aligner consultation at Smile Experts Dental Clinic and get a digital preview of your final results — no obligation.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
