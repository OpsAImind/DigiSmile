import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "3D Digital Smile Design in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Preview your new smile before any treatment begins at Smile Experts Dental Clinic. 3D digital smile design, CT scanning, and in-house milling for precision results. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/3d-digital-smile-design/" },
  keywords: [
    "digital smile design Washington DC",
    "3D smile preview DC",
    "digital dentistry Smile Experts Dental",
    "smile makeover planning DC",
    "iTero digital impressions DC",
    "in-house same day crowns DC",
  ],
  openGraph: {
    title: "3D Digital Smile Design in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "See your transformed smile before a single tooth is touched — powered by 3D imaging, digital planning, and in-house fabrication.",
    url: "https://www.smilexpertsdental.com/3d-digital-smile-design/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "3D Digital Smile Design Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Digital Smile Design in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Plan your perfect smile digitally — see it, approve it, then we build it.",
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
  const url = "https://www.smilexpertsdental.com/3d-digital-smile-design/"
  return (
    <>
      <ServiceJsonLd
        serviceName="3D Digital Smile Design"
        description="Advanced digital smile planning using 3D imaging, simulation, and in-house fabrication technology at Smile Experts Dental Clinic."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "3D Digital Smile Design Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="3D Digital Smile Design"
        location="Smile Experts Dental Clinic"
        intro="See your new smile before treatment begins. Our digital workflow maps, simulates, and builds your ideal smile with precision technology at every step."
        heroImageSrc="https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=900&q=80"
        heroImageAlt="3D Digital Smile Design in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is 3D Digital Smile Design?",
          content:
            "3D Digital Smile Design is a technology-first approach to cosmetic and restorative dentistry. Using cone-beam CT scanning, digital impressions, facial photography, and smile simulation software, we create a virtual model of your mouth and design your ideal outcome on-screen — proportioned to your face, aligned with your bite, and refined to your aesthetic preferences. You see and approve the result before any irreversible treatment begins. Combined with our in-house milling capability, many restorations are fabricated right in our clinic for same-day delivery.",
        }}
        benefits={[
          { title: "See Results First", description: "Approve your smile simulation digitally — no surprises, no guesswork." },
          { title: "Precision Planning", description: "3D CT imaging maps bone, nerves, and tooth anatomy for safe, accurate treatment." },
          { title: "No Messy Impressions", description: "Digital iTero scanning replaces traditional impression trays entirely." },
          { title: "In-House Fabrication", description: "Many restorations are milled on-site, enabling same-day delivery and faster treatment." },
          { title: "Better Communication", description: "You and your dentist share the same visual — treatment discussions are clear and informed." },
          { title: "Used Across All Services", description: "The digital workflow enhances implants, crowns, veneers, aligners, and smile makeovers." },
        ]}
        procedure={[
          { step: 1, title: "Facial & Dental Photography", description: "We capture standardized photos to analyze your facial proportions and smile line in relation to your teeth." },
          { step: 2, title: "Digital 3D Impressions", description: "The iTero scanner creates a precise 3D model of your teeth and bite in minutes — no trays or putty." },
          { step: 3, title: "Cone-Beam CT Scan (when indicated)", description: "For implants and complex cases, a full 3D CBCT image maps bone volume, density, and nerve pathways." },
          { step: 4, title: "Smile Simulation Design", description: "We use smile design software to reshape, recolor, and reposition teeth on your 3D model — live, with your input." },
          { step: 5, title: "Treatment Plan Review", description: "You review your simulated outcome, ask questions, and approve the plan before any treatment begins." },
          { step: 6, title: "Precision Execution", description: "Your approved design guides every step — from crown milling to implant positioning — for a predictable, beautiful result." },
        ]}
        whoCandidateSection={{
          title: "Who Benefits from Digital Smile Design?",
          content:
            "Any patient considering a cosmetic procedure, smile makeover, dental implants, veneers, or full-arch restoration benefits from digital planning. It's especially valuable for patients who want full clarity on their outcome before committing — professionals, those with significant aesthetic concerns, or anyone undergoing multiple procedures at once. It's also standard in our implant and All-on-4 workflows for surgical precision.",
        }}
        faqs={[
          {
            question: "Is a digital smile design consultation free?",
            answer: "We offer a comprehensive digital consultation as part of your initial smile assessment. Contact us to schedule your appointment and we'll detail what's included.",
          },
          {
            question: "Can I change the design before treatment starts?",
            answer: "Absolutely. The simulation is fully adjustable. We refine the design until you're completely satisfied before any clinical work begins.",
          },
          {
            question: "Does digital planning mean same-day treatment?",
            answer: "For single crowns and some restorations, yes — our in-house mill fabricates them the same day. Multi-unit cases and implants still follow their standard timelines but benefit from precision digital planning throughout.",
          },
          {
            question: "How accurate is the smile simulation?",
            answer: "Modern software is highly accurate. While in-vivo results have natural variation, the simulation gives a realistic representation of tooth shape, size, and arrangement — and our digital fabrication produces restorations that closely match the approved design.",
          },
        ]}
        ctaSection={{
          title: "Design Your Smile Before We Build It",
          description: "Book a digital smile consultation at Smile Experts Dental Clinic and see exactly what's possible for your smile.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
