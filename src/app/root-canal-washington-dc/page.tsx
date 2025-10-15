import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Root Canal Therapy in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Gentle, effective root canal therapy in Smile Experts Dental Clinic Relieve tooth pain and save your natural tooth. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/root-canal-washington-dc/" },
  openGraph: {
    title: "Root Canal Therapy in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Comfort-focused root canal treatment to remove infection and save your tooth.",
    url: "https://www.smilexpertsdental.com/root-canal-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      { url: "https://www.smilexpertsdental.com/icon.png", width: 1200, height: 630, alt: "Root Canal Washington DC" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Root Canal Therapy in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Gentle root canal treatment in Smile Experts Dental Clinic",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
}

export default function Page() {
  const url = "https://www.smilexpertsdental.com/root-canal-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Root Canal Therapy"
        description="Gentle endodontic treatment to remove infection, relieve pain, and save your natural tooth."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Root Canal Therapy Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Root Canal Therapy"
        location="Smile Experts Dental Clinic"
        intro="End tooth pain fast. Our gentle root canal therapy removes infection and preserves your natural tooth."
        heroImageSrc="/root-canal-therapy-washington-dc.jpg"
        heroImageAlt="Root Canal Therapy in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What is a Root Canal?",
          content:
            "A root canal removes infected or inflamed pulp from inside a tooth. After cleaning and sealing the tooth, a custom restoration protects it for comfortable function.",
        }}
        benefits={[
          { title: "Pain Relief", description: "Removes infection and inflammation to eliminate toothache." },
          { title: "Saves Your Tooth", description: "Preserve your natural tooth instead of extracting it." },
          { title: "Restores Function", description: "Chew comfortably and protect the tooth with a crown." },
          { title: "Stops Spread of Infection", description: "Protects nearby teeth and gums from further problems." },
          { title: "Comfort-Focused", description: "Modern anesthetics and techniques for a smooth visit." },
          { title: "High Success Rate", description: "Root canals are predictable and long-lasting with proper care." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Diagnosis & Imaging",
            description: "We confirm infection and plan treatment using imaging.",
          },
          { step: 2, title: "Comfortable Anesthesia", description: "We numb the area and ensure you’re comfortable." },
          {
            step: 3,
            title: "Cleaning the Canals",
            description: "Infected tissue is removed and canals are disinfected.",
          },
          {
            step: 4,
            title: "Sealing & Temporary",
            description: "Canals are sealed and a temporary is placed if needed.",
          },
          { step: 5, title: "Final Restoration", description: "A custom crown restores strength and appearance." },
        ]}
        faqs={[
          {
            question: "Is a root canal painful?",
            answer: "Most patients feel pressure but little pain; it relieves discomfort caused by infection.",
          },
          {
            question: "Do I need a crown?",
            answer: "Back teeth often benefit from crowns to prevent fractures after treatment.",
          },
          {
            question: "How long does it take?",
            answer: "Many cases are completed in one visit; complex teeth may need two.",
          },
        ]}
        ctaSection={{
          title: "Relieve Tooth Pain Today",
          description: "Call now to schedule a gentle, effective root canal in Smile Experts Dental Clinic",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
