import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "Dental Crowns in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Custom porcelain dental crowns in Smile Experts Dental Clinic. Restore cracked, broken, or decayed teeth with natural-looking same-day crowns. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/dental-crowns-washington-dc/" },
  keywords: [
    "dental crowns Washington DC",
    "porcelain crowns DC",
    "same day crowns Washington DC",
    "CEREC crowns DC",
    "tooth crown Smile Experts Dental",
    "dental cap Washington DC",
  ],
  openGraph: {
    title: "Dental Crowns in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Protect and restore compromised teeth with custom porcelain crowns designed to match your natural smile exactly.",
    url: "https://www.smilexpertsdental.com/dental-crowns-washington-dc/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Dental Crowns Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Crowns in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Natural-looking porcelain crowns to restore strength and beauty to damaged teeth.",
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
  const url = "https://www.smilexpertsdental.com/dental-crowns-washington-dc/"
  return (
    <>
      <ServiceJsonLd
        serviceName="Dental Crowns"
        description="Custom porcelain and zirconia dental crowns to restore damaged teeth at Smile Experts Dental Clinic."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Dental Crowns Washington DC", url },
        ]}
      />
      <ServiceDetailPage
        title="Dental Crowns"
        location="Smile Experts Dental Clinic"
        intro="Restore a damaged, cracked, or severely decayed tooth to full strength and natural beauty with a custom-fitted porcelain crown — built to last."
        heroImageSrc="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
        heroImageAlt="Dental Crowns in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is a Dental Crown?",
          content:
            "A dental crown is a tooth-shaped cap placed over a damaged tooth to restore its shape, size, strength, and appearance. Crowns are indicated after root canal therapy, for severely broken or cracked teeth, for large failing fillings, or to cover a dental implant. Modern crowns are crafted from high-strength porcelain or zirconia, shade-matched precisely to neighboring teeth so no one can tell the difference.",
        }}
        benefits={[
          { title: "Full Structural Restoration", description: "Reinforces a weakened tooth and restores full chewing force and function." },
          { title: "Natural Appearance", description: "Shade-matched porcelain or zirconia blends seamlessly with your surrounding teeth." },
          { title: "Protects the Tooth", description: "Seals the tooth from bacteria, further fracture, and sensitivity." },
          { title: "Long-Lasting", description: "With good care, crowns routinely last 15–25 years or longer." },
          { title: "Versatile", description: "Used after root canals, over implants, for large cavities, and in cosmetic smile makeovers." },
          { title: "Same-Day Option", description: "Digital milling technology allows us to fabricate certain crowns in a single visit." },
        ]}
        procedure={[
          { step: 1, title: "Examination & X-Rays", description: "We assess the tooth structure, root health, and surrounding bone to confirm a crown is the right restoration." },
          { step: 2, title: "Tooth Preparation", description: "The tooth is gently shaped to create room for the crown. We use local anesthesia for complete comfort." },
          { step: 3, title: "Digital Impression", description: "An iTero digital scanner captures a precise 3D impression — no messy impression trays." },
          { step: 4, title: "Temporary Crown Placed", description: "A temporary crown protects your tooth while your permanent restoration is fabricated." },
          { step: 5, title: "Custom Crown Fabricated", description: "Your crown is milled from high-strength porcelain or zirconia and glazed to match your exact shade." },
          { step: 6, title: "Final Fitting & Bonding", description: "We verify fit, bite, and aesthetics before permanently bonding your crown in place." },
        ]}
        whoCandidateSection={{
          title: "When Do You Need a Dental Crown?",
          content:
            "A crown is the right choice when a tooth is too damaged for a filling but doesn't need extraction. Common situations include: a tooth cracked by grinding or injury, a large cavity that leaves insufficient tooth structure, a tooth following root canal therapy, a cosmetically compromised tooth needing shape or shade correction, or a dental implant needing a restoration. We always take a conservative approach and recommend crowns only when necessary.",
        }}
        faqs={[
          {
            question: "Does getting a crown hurt?",
            answer: "The preparation appointment is done under local anesthesia — you'll feel pressure but no pain. Mild sensitivity around the prepared tooth for a few days after is normal and resolves quickly.",
          },
          {
            question: "Porcelain vs. zirconia — which is better?",
            answer: "Both are excellent. Porcelain offers the most natural light transmission for front teeth. Zirconia is stronger and preferred for back teeth or patients who grind. We'll recommend the best material for your specific tooth and bite.",
          },
          {
            question: "Can a crown fall off?",
            answer: "Properly bonded crowns rarely fall off. If one does loosen, contact us immediately — we can re-cement it promptly. Avoid chewing sticky foods on a new crown for the first 24 hours.",
          },
          {
            question: "How do I care for my crown?",
            answer: "Brush and floss normally. Avoid biting ice or very hard foods. If you grind at night, a night guard protects your crown and prolongs its lifespan significantly.",
          },
        ]}
        ctaSection={{
          title: "Restore Your Tooth Today",
          description: "Don't let a cracked or damaged tooth wait. Book your crown consultation at Smile Experts Dental Clinic — same-day options available.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
