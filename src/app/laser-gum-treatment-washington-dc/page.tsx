import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Laser Gum Treatment in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Advanced laser gum treatment in Smile Experts Dental Clinic. Less pain, faster healing, and better results than traditional gum surgery. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/laser-gum-treatment-washington-dc/" },
  keywords: [
    "laser gum treatment Washington DC",
    "laser periodontal therapy DC",
    "gum disease laser treatment DC",
    "soft tissue laser dentistry DC",
    "gum contouring laser DC",
    "periodontal laser therapy Smile Experts Dental",
  ],
  openGraph: {
    title: "Laser Gum Treatment in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Treat gum disease and reshape your gumline with precision laser technology — less discomfort, faster recovery.",
    url: "https://www.smilexpertsdental.com/laser-gum-treatment-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Laser Gum Treatment Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Gum Treatment in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Precision soft-tissue laser for gum disease, contouring, and faster healing.",
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
  const url = "https://www.smilexpertsdental.com/laser-gum-treatment-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Laser Gum Treatment"
        description="Soft-tissue laser therapy for gum disease, pocket reduction, and gumline contouring at Smile Experts Dental Clinic."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Laser Gum Treatment Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Laser Gum Treatment"
        location="Smile Experts Dental Clinic"
        intro="Treat gum disease and reshape your gumline with the precision and comfort of soft-tissue laser technology — no scalpels, minimal bleeding, and faster healing."
        heroImageSrc="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80"
        heroImageAlt="Laser Gum Treatment in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is Laser Gum Treatment?",
          content:
            "Laser gum treatment uses a focused beam of light energy to precisely target and remove infected or diseased gum tissue, bacteria, and deposits from periodontal pockets — without cutting or sutures in many cases. The same technology is used for gum contouring to improve smile aesthetics by reshaping uneven or excessive gumlines. Compared to traditional gum surgery, laser treatment means less post-operative pain, minimal bleeding, and significantly faster recovery.",
        }}
        benefits={[
          { title: "Minimally Invasive", description: "No scalpel in most cases — the laser targets only diseased tissue with microscopic precision." },
          { title: "Less Pain & Swelling", description: "Patients report dramatically less discomfort compared to traditional periodontal surgery." },
          { title: "Faster Recovery", description: "Most patients return to normal activities within 24–48 hours." },
          { title: "Kills Bacteria on Contact", description: "The laser energy destroys harmful bacteria in pockets as it treats infected tissue." },
          { title: "Promotes Healing", description: "Laser energy stimulates tissue regeneration and promotes reattachment of gums to bone." },
          { title: "Aesthetic & Therapeutic", description: "The same treatment addresses both gum disease and cosmetic gumline concerns." },
        ]}
        procedure={[
          { step: 1, title: "Periodontal Assessment", description: "We measure pocket depths, check for bone loss, and take X-rays to map disease severity." },
          { step: 2, title: "Scaling & Root Planing", description: "Ultrasonic instruments remove calculus and biofilm from tooth roots below the gumline." },
          { step: 3, title: "Laser Pocket Therapy", description: "The soft-tissue laser treats infected pocket lining, removes diseased tissue, and sterilizes the site." },
          { step: 4, title: "Biostimulation", description: "A low-level laser setting stimulates cellular repair and promotes new tissue attachment." },
          { step: 5, title: "Post-Care Instructions", description: "We provide a detailed care protocol to support healing and prevent recurrence." },
          { step: 6, title: "Maintenance Recall", description: "Regular 3–4 month periodontal maintenance visits protect your long-term results." },
        ]}
        whoCandidateSection={{
          title: "Who Benefits from Laser Gum Treatment?",
          content:
            "Patients with gingivitis, early to advanced periodontitis, or excessive / uneven gumlines are excellent candidates. If you have bleeding gums, persistent bad breath, loose teeth, or visible recession, a laser evaluation can determine the right level of treatment. We also use soft-tissue lasers for crown lengthening prior to cosmetic and restorative procedures.",
        }}
        faqs={[
          {
            question: "Is laser gum treatment painful?",
            answer: "Most patients experience significantly less discomfort than with traditional surgery. Local anesthesia is used during treatment, and post-procedure sensitivity is usually mild and brief.",
          },
          {
            question: "How many laser sessions will I need?",
            answer: "Mild to moderate cases are often treated in 1–2 sessions. Advanced periodontitis may require additional appointments. We create a staged plan based on your assessment results.",
          },
          {
            question: "Does insurance cover laser gum treatment?",
            answer: "Many dental insurance plans cover periodontal treatment — the specific coverage depends on your plan. We'll review your benefits and provide a clear cost breakdown before treatment.",
          },
          {
            question: "Can gum disease come back after laser treatment?",
            answer: "Without proper maintenance, gum disease can recur. Regular periodontal recall appointments and consistent home care are essential to protect your long-term results.",
          },
        ]}
        ctaSection={{
          title: "Healthier Gums with Less Discomfort",
          description: "Schedule a periodontal evaluation at Smile Experts Dental Clinic and discover if laser gum treatment is right for you.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
