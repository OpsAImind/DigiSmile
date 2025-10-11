import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { filling_service } from "@/assets/images";

export const metadata: Metadata = {
  title: "Dental Fillings in Washington, D.C. | Smile Experts Dental",
  description:
    "Expert dental fillings in Washington, D.C. to repair cavities and restore tooth health. Composite and amalgam options available. Call (202) 545-6336 to schedule.",
  keywords:
    "dental fillings Washington DC, cavity treatment DC, tooth filling Washington, cavity repair DC, restorative dentistry Washington DC",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/dental-fillings-washington-dc/"
  },
  openGraph: {
    title: "Dental Fillings in Washington, D.C. | Smile Experts Dental",
    description:
      "Expert dental fillings to repair cavities and restore tooth health.",
    url: "https://www.smilexpertsdental.com/dental-fillings-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Dental Fillings Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Fillings in Washington, D.C. | Smile Experts Dental",
    description: "Expert dental fillings in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function DentalFillingsWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Dental Fillings"
        description="Professional dental fillings to repair cavities, prevent further decay, and restore the strength and function of your teeth."
        url="https://www.smilexpertsdental.com/dental-fillings-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Dental Fillings Washington DC",
            url: "https://www.smilexpertsdental.com/dental-fillings-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Dental Fillings"
        location="Washington, D.C."
        intro="Stop tooth decay and restore your smile with expert dental fillings. We offer both composite and amalgam fillings to repair cavities and protect your teeth."
        heroImage={filling_service}
        heroImageAlt="Dental Fillings in Washington DC"
        whatIsSection={{
          title: "What are Dental Fillings?",
          content:
            "Dental fillings are restorative treatments used to repair teeth damaged by decay (cavities). The procedure involves removing the decayed portion of the tooth, cleaning the area, and filling it with a durable material such as composite resin, amalgam, or other materials. Fillings restore the tooth's structure, prevent further decay, and allow you to chew and speak normally.",
          image: filling_service
        }}
        benefits={[
          {
            title: "Stop Tooth Decay",
            description:
              "Fillings remove decay and prevent it from spreading to other parts of the tooth or adjacent teeth."
          },
          {
            title: "Restore Function",
            description:
              "Repair damaged teeth so you can eat, speak, and smile comfortably."
          },
          {
            title: "Prevent Further Damage",
            description:
              "Treating cavities early prevents the need for more extensive procedures like root canals or extractions."
          },
          {
            title: "Multiple Material Options",
            description:
              "Choose from tooth-colored composite fillings or durable amalgam fillings based on your needs."
          },
          {
            title: "Quick & Painless",
            description:
              "Most fillings can be completed in one visit with minimal discomfort."
          },
          {
            title: "Long-Lasting Protection",
            description:
              "Quality fillings can last many years with proper oral care."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Examination & Diagnosis",
            description:
              "We examine your tooth and use X-rays to assess the extent of decay."
          },
          {
            step: 2,
            title: "Anesthesia",
            description:
              "Local anesthesia is applied to numb the area and ensure a pain-free experience."
          },
          {
            step: 3,
            title: "Decay Removal",
            description:
              "We carefully remove the decayed material and clean the cavity thoroughly."
          },
          {
            step: 4,
            title: "Filling Placement",
            description:
              "The filling material is placed in the cavity, shaped to match your tooth's natural contours."
          },
          {
            step: 5,
            title: "Polishing & Bite Check",
            description:
              "We polish the filling and check your bite to ensure comfort and proper alignment."
          }
        ]}
        whoCandidateSection={{
          title: "Who Needs Dental Fillings?",
          content:
            "If you have a cavity, tooth sensitivity, pain when chewing, or visible holes or dark spots on your teeth, you likely need a filling. Early treatment prevents the decay from worsening and saves your natural tooth."
        }}
        faqs={[
          {
            question: "How do I know if I need a filling?",
            answer:
              "Common signs include tooth sensitivity, pain when eating or drinking, visible holes or dark spots, and rough or broken tooth surfaces. A dental exam can confirm if you need a filling."
          },
          {
            question: "What type of filling is best?",
            answer:
              "Composite (tooth-colored) fillings are ideal for visible teeth due to their natural appearance. Amalgam fillings are very durable and often used for back teeth. Your dentist will recommend the best option."
          },
          {
            question: "How long do dental fillings last?",
            answer:
              "Composite fillings last 5-10 years, while amalgam fillings can last 10-15 years or longer with proper care."
          },
          {
            question: "Is getting a filling painful?",
            answer:
              "No, we use local anesthesia to numb the area, so you won't feel pain during the procedure. Some sensitivity may occur afterward but typically resolves quickly."
          },
          {
            question: "How much do dental fillings cost in Washington, D.C.?",
            answer:
              "Costs vary based on the size, location, and material of the filling. Most dental insurance plans cover fillings. Contact us for a personalized quote."
          }
        ]}
        ctaSection={{
          title: "Don't Let Cavities Get Worse",
          description:
            "Get expert dental fillings at Smile Experts Dental in Washington, D.C. and protect your smile today.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
