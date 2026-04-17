import type { Metadata } from "next"
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd"

export const metadata: Metadata = {
  title: "All-on-4 Full-Arch Restoration in Smile Experts Dental Clinic | Smile Experts Dental",
  description:
    "Restore an entire arch with just 4 implants in Smile Experts Dental Clinic. Same-day teeth, fixed results, life-changing confidence. Call (202) 545-6336.",
  alternates: { canonical: "https://www.smilexpertsdental.com/all-on-4-full-arch-restoration/" },
  keywords: [
    "All-on-4 Washington DC",
    "full arch dental implants DC",
    "All-on-X Smile Experts Dental",
    "same day teeth Washington DC",
    "teeth in a day DC",
    "full mouth implants DC",
  ],
  openGraph: {
    title: "All-on-4 Full-Arch Restoration in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Replace an entire arch of missing or failing teeth with 4 strategically placed implants — often same day.",
    url: "https://www.smilexpertsdental.com/all-on-4-full-arch-restoration/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "All-on-4 Full-Arch Restoration Washington DC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-on-4 Full-Arch Restoration in Smile Experts Dental Clinic | Smile Experts Dental",
    description: "Full-arch implant restoration — permanent teeth that don't come out.",
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
  const url = "https://www.smilexpertsdental.com/all-on-4-full-arch-restoration/"
  return (
    <>
      <ServiceJsonLd
        serviceName="All-on-4 Full-Arch Restoration"
        description="Complete arch tooth replacement using 4–6 strategically placed implants for a permanent, fixed smile at Smile Experts Dental Clinic."
        url={url}
        areaServed="Smile Experts Dental Clinic"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "All-on-4 Full-Arch Restoration", url },
        ]}
      />
      <ServiceDetailPage
        title="All-on-4 / Full-Arch Restoration"
        location="Smile Experts Dental Clinic"
        intro="Walk in with failing or missing teeth — walk out with a full, fixed smile. All-on-4 uses just four implants to support an entire arch of teeth, often completed in a single day."
        heroImageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
        heroImageAlt="All-on-4 Full-Arch Restoration in Smile Experts Dental Clinic"
        whatIsSection={{
          title: "What Is All-on-4 / Full-Arch Restoration?",
          content:
            "All-on-4 is a full-arch implant technique that anchors a complete set of teeth onto just four titanium implants — two straight at the front, two angled at the back to maximize bone contact. This smart angulation often eliminates the need for bone grafting. All-on-X uses 6 implants for added support in cases requiring greater stability. The result is a permanent, non-removable arch that looks and functions exactly like natural teeth.",
        }}
        benefits={[
          { title: "Same-Day Teeth", description: "Many patients leave with a full, functional arch on the day of surgery." },
          { title: "Fixed — Never Removable", description: "Unlike dentures, All-on-4 stays in permanently; no adhesives or nightly removal." },
          { title: "Minimal Implants, Maximum Results", description: "Just 4 implants support 10–14 teeth, reducing cost and healing time." },
          { title: "Often No Bone Graft Needed", description: "Angled implants reach denser bone regions, bypassing areas of loss." },
          { title: "Stops Bone Loss", description: "Implants stimulate the jawbone, preserving your facial structure long-term." },
          { title: "Total Smile Transformation", description: "Custom arch designed with your face shape, skin tone, and preferences in mind." },
        ]}
        procedure={[
          { step: 1, title: "Full 3D Consultation & Scan", description: "Cone-beam CT scan evaluates bone volume, nerve paths, and ideal implant sites across the full arch." },
          { step: 2, title: "Custom Arch Design", description: "Using digital smile design, we preview your final smile before any treatment begins." },
          { step: 3, title: "Extractions (if needed) & Implant Placement", description: "Remaining failing teeth are removed and 4–6 implants are placed in a single surgical session." },
          { step: 4, title: "Temporary Arch Delivered Same Day", description: "A fully functional temporary arch is attached so you leave with teeth the same day." },
          { step: 5, title: "Healing & Osseointegration", description: "Over 3–6 months implants fuse solidly with the jawbone." },
          { step: 6, title: "Final Porcelain Arch Fitted", description: "Your permanent, custom-crafted zirconia or porcelain arch is placed for a lifetime of confident smiles." },
        ]}
        whoCandidateSection={{
          title: "Who Is a Good Candidate for All-on-4?",
          content:
            "Patients with most or all teeth missing, failing teeth due to decay or gum disease, or those struggling with ill-fitting dentures are ideal candidates. Even patients with some bone loss often qualify due to the angled implant technique. We assess every case individually with a full 3D scan and medical history review to build a safe, personalized plan.",
        }}
        faqs={[
          {
            question: "Can I really get teeth in one day?",
            answer: "Yes — most All-on-4 patients receive a fully functional temporary arch the same day as surgery. Your permanent final arch is placed after osseointegration, typically 4–6 months later.",
          },
          {
            question: "All-on-4 vs. All-on-X — what's the difference?",
            answer: "All-on-4 uses 4 implants; All-on-X uses 6. More implants provide added stability and are recommended when bone quality or arch length requires greater distribution of force.",
          },
          {
            question: "Is it better than dentures?",
            answer: "Significantly. All-on-4 is fixed, preserves bone, allows normal chewing force, and requires no adhesives or removal. Most patients describe it as life-changing compared to conventional dentures.",
          },
          {
            question: "How do I clean an All-on-4 arch?",
            answer: "Brushing twice daily and using a water flosser under the arch keeps it clean. We provide a detailed care kit and hygiene protocol at your delivery appointment.",
          },
        ]}
        ctaSection={{
          title: "Transform Your Smile in a Single Visit",
          description: "Find out if All-on-4 is right for you. Book a complimentary 3D consultation at Smile Experts Dental Clinic today.",
          phone: "(202) 545-6336",
        }}
      />
    </>
  )
}
