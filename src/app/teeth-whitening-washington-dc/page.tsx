import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { teeth_whitening_service } from "@/assets/images";

export const metadata: Metadata = {
  title: "Teeth Whitening in Washington, D.C. | Smile Experts Dental",
  description:
    "Professional teeth whitening in Washington, D.C. Get a brighter, whiter smile in just one visit. Safe, effective, and fast. Call (202) 545-6336 to book.",
  keywords:
    "teeth whitening Washington DC, professional whitening DC, teeth bleaching Washington, zoom whitening DC, bright smile DC, whitening treatment Washington",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/"
  },
  openGraph: {
    title: "Teeth Whitening in Washington, D.C. | Smile Experts Dental",
    description:
      "Professional teeth whitening for a brighter, whiter smile in just one visit.",
    url: "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Teeth Whitening Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Teeth Whitening in Washington, D.C. | Smile Experts Dental",
    description: "Professional teeth whitening in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function TeethWhiteningWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Teeth Whitening"
        description="Professional teeth whitening treatment to remove stains and discoloration, brightening your smile by several shades in just one visit."
        url="https://www.smilexpertsdental.com/teeth-whitening-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Teeth Whitening Washington DC",
            url: "https://www.smilexpertsdental.com/teeth-whitening-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Teeth Whitening"
        location="Washington, D.C."
        intro="Brighten your smile with professional teeth whitening. Safe, effective, and fast—achieve a whiter smile in just one visit to our Washington, D.C. office."
        heroImage={teeth_whitening_service}
        heroImageAlt="Teeth Whitening in Washington DC"
        whatIsSection={{
          title: "What is Professional Teeth Whitening?",
          content:
            "Professional teeth whitening is a cosmetic dental procedure that uses powerful bleaching agents to remove stains and discoloration from your teeth. Unlike over-the-counter products, professional whitening is supervised by a dentist, ensuring safe and dramatic results. We offer both in-office whitening for immediate results and take-home kits for gradual whitening at your convenience.",
          image: teeth_whitening_service
        }}
        benefits={[
          {
            title: "Fast Results",
            description:
              "In-office whitening can brighten your smile by several shades in just one hour."
          },
          {
            title: "Safe & Effective",
            description:
              "Dentist-supervised treatment protects your gums and enamel while delivering superior results."
          },
          {
            title: "Customized Treatment",
            description:
              "We tailor the whitening process to your sensitivity level and desired shade."
          },
          {
            title: "Long-Lasting Results",
            description:
              "With proper care, your whiter smile can last for years."
          },
          {
            title: "Boost Confidence",
            description:
              "A brighter smile enhances your appearance and self-esteem."
          },
          {
            title: "Convenient Options",
            description:
              "Choose between in-office whitening or take-home kits that fit your schedule."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Shade Assessment",
            description:
              "We evaluate your teeth, discuss your goals, and determine your current tooth shade."
          },
          {
            step: 2,
            title: "Cleaning & Preparation",
            description:
              "We clean your teeth and protect your gums with a barrier to prevent irritation."
          },
          {
            step: 3,
            title: "Whitening Gel Application",
            description:
              "A professional-strength whitening gel is applied to your teeth."
          },
          {
            step: 4,
            title: "Activation (In-Office)",
            description:
              "For in-office whitening, a special light may be used to activate the gel and accelerate whitening."
          },
          {
            step: 5,
            title: "Rinse & Reveal",
            description:
              "The gel is removed, and you'll see your brighter, whiter smile immediately!"
          }
        ]}
        whoCandidateSection={{
          title: "Who is a Candidate for Teeth Whitening?",
          content:
            "Most people with healthy teeth and gums are good candidates for teeth whitening. It's especially effective for stains caused by coffee, tea, wine, smoking, and aging. If you have sensitive teeth, dental restorations, or intrinsic stains, we'll recommend the best whitening option for you."
        }}
        faqs={[
          {
            question: "How long does teeth whitening last?",
            answer:
              "Results typically last 1-3 years, depending on your diet, oral hygiene, and lifestyle habits like smoking or drinking coffee."
          },
          {
            question: "Is teeth whitening safe?",
            answer:
              "Yes, professional teeth whitening is safe when performed by a dentist. We use products that protect your enamel and gums."
          },
          {
            question: "Will whitening make my teeth sensitive?",
            answer:
              "Some patients experience temporary sensitivity, which usually subsides within a few days. We can recommend desensitizing products if needed."
          },
          {
            question: "How white will my teeth get?",
            answer:
              "Results vary, but most patients see their teeth brighten by 3-8 shades. We'll discuss realistic expectations during your consultation."
          },
          {
            question: "Can I whiten my teeth at home?",
            answer:
              "Yes, we offer custom take-home whitening kits that are more effective and safer than over-the-counter products."
          }
        ]}
        ctaSection={{
          title: "Ready for a Brighter Smile?",
          description:
            "Get professional teeth whitening at Smile Experts Dental in Washington, D.C. and see results in just one visit.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
