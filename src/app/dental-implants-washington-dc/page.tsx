import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Dental Implants in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Permanent, natural-looking dental implants in Smile Experts Dental Clinic. Single tooth to full-arch solutions using 3D-guided precision. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/dental-implants-washington-dc/" },
  keywords: [
    "dental implants Washington DC",
    "tooth implants Smile Experts Dental",
    "single tooth implant DC",
    "dental implant cost Washington DC",
    "permanent tooth replacement DC",
  ],
  openGraph: {
    title: "Dental Implants in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Replace missing teeth permanently with implants designed to look, feel, and function like your own.",
    url: "https://www.smilexpertsdental.com/dental-implants-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Dental Implants Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implants in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "3D-guided implant placement for permanent, confident smiles.",
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
  const url = "https://www.smilexpertsdental.com/dental-implants-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Dental Implants"
        description="Permanent single and multiple tooth implant solutions using 3D-guided precision placement at Smile Experts Dental Clinic."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Dental Implants Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Dental Implants"
        location="Smile Experts Dental Clinic"
        intro="The gold standard for replacing missing teeth — implants that look, feel, and function just like your natural teeth, built to last a lifetime."
        heroImageSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
        heroImageAlt="Dental Implants in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Are Dental Implants?",
          content:
            "A dental implant is a titanium post surgically placed into the jawbone, acting as an artificial tooth root. Once healed, a custom crown is attached on top. The result is a permanent replacement that preserves bone, prevents facial collapse, and blends seamlessly with your smile — no adhesives, no removal, no compromise.",
        }}
        benefits={[
          { title: "Permanent Solution", description: "With proper care, implants can last a lifetime — no replacements needed." },
          { title: "Bone Preservation", description: "Stimulates the jawbone to prevent bone loss after tooth extraction." },
          { title: "Natural Look & Feel", description: "Custom crowns matched to your shade for a completely seamless result." },
          { title: "No Dietary Restrictions", description: "Eat anything — implants are as strong as natural teeth." },
          { title: "Protects Adjacent Teeth", description: "No need to grind down healthy neighboring teeth as with bridges." },
          { title: "3D-Guided Precision", description: "CT scan and digital planning ensure ideal implant angle and depth." },
        ]}
        procedure={[
          { step: 1, title: "3D Imaging & Treatment Plan", description: "We use cone-beam CT scanning to map bone density, nerve paths, and ideal implant position." },
          { step: 2, title: "Bone Grafting (if needed)", description: "If bone volume is insufficient, a graft is placed first to build a stable foundation." },
          { step: 3, title: "Implant Placement", description: "The titanium post is placed under local anesthesia using your digital plan for accuracy." },
          { step: 4, title: "Healing & Osseointegration", description: "Over 3–6 months the implant fuses with the jawbone, creating a permanent anchor." },
          { step: 5, title: "Abutment & Custom Crown", description: "A connector and custom porcelain crown are placed to complete your new tooth." },
          { step: 6, title: "Final Check & Care Guidance", description: "We verify your bite and provide long-term care instructions to protect your investment." },
        ]}
        whoCandidateSection={{
          title: "Are You a Candidate for Dental Implants?",
          content:
            "Most adults with one or more missing teeth are excellent candidates. Ideal candidates have sufficient jawbone density, healthy gums, and no uncontrolled systemic conditions. Even patients with some bone loss may qualify after a bone graft. During your consultation, we perform a full 3D scan and health review to determine the best path forward for your specific situation.",
        }}
        faqs={[
          {
            question: "How long do dental implants last?",
            answer: "With good oral hygiene and regular check-ups, implants can last 20–30 years or a lifetime. The crown on top may need replacement after 15–20 years.",
          },
          {
            question: "Is the implant procedure painful?",
            answer: "The procedure is done under local anesthesia. Most patients report less discomfort than a tooth extraction. We also offer oral sedation options for anxious patients.",
          },
          {
            question: "How much do dental implants cost?",
            answer: "Cost depends on the number of implants and whether bone grafting is needed. We provide a detailed breakdown after your 3D scan consultation and offer flexible financing.",
          },
          {
            question: "How long does the full process take?",
            answer: "From placement to final crown, the process typically takes 4–9 months. Cases needing bone grafts may take longer due to healing time.",
          },
        ]}
        ctaSection={{
          title: "Ready to Replace Missing Teeth Permanently?",
          description: "Schedule your 3D implant consultation at Smile Experts Dental Clinic and discover the most natural, lasting tooth replacement available.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
