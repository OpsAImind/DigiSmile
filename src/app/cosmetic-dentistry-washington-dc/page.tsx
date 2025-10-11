import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { cosmetic } from "@/assets/images";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry in Washington, D.C. | Smile Experts Dental",
  description:
    "Transform your smile with cosmetic dentistry in Washington, D.C. Veneers, whitening, bonding, and smile makeovers. Call (202) 545-6336 for a consultation.",
  keywords:
    "cosmetic dentistry Washington DC, smile makeover DC, veneers Washington, teeth whitening DC, cosmetic dentist Washington DC, dental bonding DC",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/"
  },
  openGraph: {
    title: "Cosmetic Dentistry in Washington, D.C. | Smile Experts Dental",
    description:
      "Transform your smile with veneers, whitening, bonding, and complete smile makeovers.",
    url: "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Cosmetic Dentistry Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic Dentistry in Washington, D.C. | Smile Experts Dental",
    description: "Transform your smile with cosmetic dentistry in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function CosmeticDentistryWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Cosmetic Dentistry"
        description="Advanced cosmetic dental treatments including veneers, teeth whitening, bonding, and complete smile makeovers."
        url="https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Cosmetic Dentistry Washington DC",
            url: "https://www.smilexpertsdental.com/cosmetic-dentistry-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Cosmetic Dentistry"
        location="Washington, D.C."
        intro="Achieve the smile of your dreams with our advanced cosmetic dentistry services. From subtle enhancements to complete smile makeovers, we create beautiful, natural-looking results."
        heroImage={cosmetic}
        heroImageAlt="Cosmetic Dentistry in Washington DC"
        whatIsSection={{
          title: "What is Cosmetic Dentistry?",
          content:
            "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. Our cosmetic services include teeth whitening, porcelain veneers, dental bonding, tooth contouring, and complete smile makeovers. Whether you want to fix chips, gaps, stains, or misalignment, our cosmetic dentistry solutions in Washington, D.C. help you achieve a confident, radiant smile.",
          image: cosmetic
        }}
        benefits={[
          {
            title: "Enhanced Confidence",
            description:
              "A beautiful smile boosts your self-esteem and makes a lasting impression."
          },
          {
            title: "Natural-Looking Results",
            description:
              "We use advanced materials and techniques to create smiles that look and feel natural."
          },
          {
            title: "Customized Solutions",
            description:
              "Every smile is unique. We tailor treatments to your facial features and personal goals."
          },
          {
            title: "Quick Transformations",
            description:
              "Many cosmetic treatments can be completed in just one or two visits."
          },
          {
            title: "Long-Lasting Results",
            description:
              "With proper care, cosmetic dental work can last for many years."
          },
          {
            title: "Expert Artistry",
            description:
              "Our experienced cosmetic dentists combine science and art to create stunning smiles."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Smile Consultation",
            description:
              "We discuss your goals, evaluate your teeth, and show you what's possible with digital smile design."
          },
          {
            step: 2,
            title: "Treatment Planning",
            description:
              "We create a customized plan that may include whitening, veneers, bonding, or a combination of treatments."
          },
          {
            step: 3,
            title: "Preparation",
            description:
              "Depending on the treatment, we may prepare your teeth by removing a small amount of enamel or cleaning the surface."
          },
          {
            step: 4,
            title: "Treatment Application",
            description:
              "We apply veneers, bonding material, or whitening agents with precision and care."
          },
          {
            step: 5,
            title: "Final Adjustments & Reveal",
            description:
              "We make final refinements and reveal your stunning new smile!"
          }
        ]}
        whoCandidateSection={{
          title: "Who is a Candidate for Cosmetic Dentistry?",
          content:
            "If you're unhappy with the appearance of your teeth due to stains, chips, gaps, misalignment, or other cosmetic concerns, you may be a great candidate. We'll evaluate your oral health and recommend the best cosmetic treatments to achieve your dream smile."
        }}
        faqs={[
          {
            question: "What cosmetic treatments do you offer?",
            answer:
              "We offer teeth whitening, porcelain veneers, dental bonding, tooth contouring, gum reshaping, and complete smile makeovers tailored to your needs."
          },
          {
            question: "How long do cosmetic dental treatments last?",
            answer:
              "Results vary by treatment. Teeth whitening lasts 1-3 years, veneers can last 10-15 years, and bonding lasts 5-10 years with proper care."
          },
          {
            question: "Is cosmetic dentistry painful?",
            answer:
              "Most cosmetic procedures are minimally invasive and painless. We use local anesthesia when needed to ensure your comfort."
          },
          {
            question: "How much does cosmetic dentistry cost?",
            answer:
              "Costs vary based on the treatment. We offer free consultations to discuss your options and provide a detailed estimate."
          },
          {
            question: "Can I see what my smile will look like before treatment?",
            answer:
              "Yes! We use digital smile design technology to show you a preview of your new smile before we begin treatment."
          }
        ]}
        ctaSection={{
          title: "Ready for Your Dream Smile?",
          description:
            "Transform your smile with expert cosmetic dentistry at Smile Experts Dental in Washington, D.C. Schedule your free consultation today.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
