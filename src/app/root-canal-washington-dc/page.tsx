import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Root Canal Washington D.C | Smile Experts Dental Clinic",
  description:
    "Smile Experts Dental Clinic provides root canal therapy in Washington D.C to remove infection, relieve pain, and preserve your natural tooth with gentle care.",
  keywords: [
    "Root Canal in Washington D.C",
    "what is a root canal",
    "root canal symptoms in Washington D.C",
    "does a root canal hurt in Washington D.C",
    "root canal procedure in Washington D.C",
    "how do you know if you need a root canal",
    "how long does a root canal take",
    "what happens if you don't get a root canal"
  ],
  alternates: { canonical: "https://www.smilexpertsdental.com/root-canal-washington-dc/" },
  openGraph: {
    title: "Root Canal Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic provides root canal therapy in Washington D.C to remove infection, relieve pain, and preserve your natural tooth with gentle care.",
    url: "https://www.smilexpertsdental.com/root-canal-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      { url: "https://www.smilexpertsdental.com/icon.png", width: 1200, height: 630, alt: "Root Canal Washington DC" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Root Canal Washington D.C | Smile Experts Dental Clinic",
    description: "Smile Experts Dental Clinic provides root canal therapy in Washington D.C to remove infection, relieve pain, and preserve your natural tooth with gentle care.",
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
        intro="End tooth pain quickly and protect your natural tooth with gentle care. Our Root Canal in Washington D.C focuses on removing infection while restoring comfort, strength, and everyday function through precise, patient-focused treatment."
        heroImageSrc="/root-canal-therapy-washington-dc.jpg"
        heroImageAlt="Root Canal Therapy in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is a Root Canal?",
          content:
            "Understanding what is a root canal helps patients feel more confident about treatment. A root canal removes infected or inflamed pulp from inside the tooth, then cleans and seals the canals so the tooth can function comfortably and remain protected.",
        }}
        benefits={[
          { title: "Pain Relief", description: "Root canal symptoms in Washington D.C such as throbbing pain, swelling, or sensitivity are treated by removing the infected tissue inside the tooth." },
          { title: "Saves Your Tooth", description: "Root canal therapy helps preserve your natural tooth rather than removing it." },
          { title: "Restores Function", description: "A protective crown allows you to chew normally and keeps the treated tooth strong." },
          { title: "Stops Spread of Infection", description: "Treatment prevents bacteria from spreading to nearby teeth and gums." },
          { title: "Comfort-Focused Care", description: "Many patients ask does a root canal hurt in Washington D.C, and modern anesthetics make the procedure smooth and comfortable." },
          { title: "High Success Rate", description: "Root canal treatments are reliable and long-lasting when followed by proper care." },
        ]}
        procedure={[
          {
            step: 1,
            title: "Diagnosis & Imaging",
            description: "We confirm infection and plan treatment using detailed imaging.",
          },
          { step: 2, title: "Comfortable Anesthesia", description: "The area is numbed so you remain relaxed throughout the visit." },
          {
            step: 3,
            title: "Cleaning the Canals",
            description: "Infected tissue is removed and the canals are disinfected.",
          },
          {
            step: 4,
            title: "Sealing & Temporary",
            description: "The canals are sealed, and a temporary restoration may be placed.",
          },
          { step: 5, title: "Final Restoration", description: "A custom crown restores the tooth's strength and appearance." },
        ]}
        faqs={[
          {
            question: "How do you know if you need a root canal?",
            answer: "Common signs include lingering pain, sensitivity to hot or cold, swelling, or discoloration of a tooth.",
          },
          {
            question: "How long does a root canal take?",
            answer: "Most treatments are completed in one or two visits, depending on the severity of the infection.",
          },
          {
            question: "What happens if you don't get a root canal?",
            answer: "Ignoring infection can lead to worsening pain, abscesses, and possible tooth loss.",
          },
        ]}
        ctaSection={{
          title: "Relieve Tooth Pain Today",
          description: "Call Smile Experts Dental Clinic now to schedule your root canal therapy and get fast, comfortable relief from tooth pain with expert dental care in Washington, D.C.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
