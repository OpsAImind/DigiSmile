import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { filling_service } from "@/assets/images";

export const metadata: Metadata = {
  title:
    "Tooth-Colored Fillings in Washington, D.C. | Smile Experts Dental",
  description:
    "Get natural-looking tooth-colored fillings in Washington, D.C. Composite fillings that blend seamlessly with your smile. Call (202) 545-6336 to book.",
  keywords:
    "tooth-colored fillings Washington DC, composite fillings DC, white fillings Washington, cosmetic fillings DC, cavity treatment Washington DC",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/"
  },
  openGraph: {
    title:
      "Tooth-Colored Fillings in Washington, D.C. | Smile Experts Dental",
    description:
      "Natural-looking composite fillings that blend seamlessly with your smile.",
    url: "https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Tooth-Colored Fillings Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tooth-Colored Fillings in Washington, D.C. | Smile Experts Dental",
    description: "Natural-looking tooth-colored fillings in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function ToothColoredFillingsWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Tooth-Colored Fillings"
        description="Natural-looking composite resin fillings that repair cavities and blend seamlessly with your natural teeth for a beautiful, healthy smile."
        url="https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Tooth-Colored Fillings Washington DC",
            url: "https://www.smilexpertsdental.com/tooth-colored-fillings-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Tooth-Colored Fillings"
        location="Washington, D.C."
        intro="Repair cavities with natural-looking tooth-colored fillings. Our composite resin fillings blend seamlessly with your teeth for a beautiful, healthy smile."
        heroImage={filling_service}
        heroImageAlt="Tooth-Colored Fillings in Washington DC"
        whatIsSection={{
          title: "What are Tooth-Colored Fillings?",
          content:
            "Tooth-colored fillings, also known as composite fillings, are made from a durable resin material that matches the color of your natural teeth. Unlike traditional metal fillings, composite fillings blend seamlessly with your smile, making them virtually invisible. They are used to repair cavities, chips, and minor tooth damage while preserving the natural appearance of your teeth.",
          image: filling_service
        }}
        benefits={[
          {
            title: "Natural Appearance",
            description:
              "Composite fillings match the color of your teeth, making them virtually invisible."
          },
          {
            title: "Preserves Tooth Structure",
            description:
              "Less tooth removal is required compared to metal fillings, preserving more of your natural tooth."
          },
          {
            title: "Strong & Durable",
            description:
              "Modern composite materials are strong and can withstand normal chewing forces."
          },
          {
            title: "Bonds to Tooth",
            description:
              "Composite resin chemically bonds to your tooth, providing additional support."
          },
          {
            title: "No Mercury",
            description:
              "Unlike amalgam fillings, tooth-colored fillings contain no mercury."
          },
          {
            title: "Versatile Use",
            description:
              "Can be used to repair cavities, chips, cracks, and even reshape teeth."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Diagnosis & Anesthesia",
            description:
              "We examine the tooth, take X-rays if needed, and apply local anesthesia to numb the area."
          },
          {
            step: 2,
            title: "Decay Removal",
            description:
              "We carefully remove the decayed portion of the tooth and clean the cavity."
          },
          {
            step: 3,
            title: "Tooth Preparation",
            description:
              "The tooth is prepared with a special gel to help the filling bond securely."
          },
          {
            step: 4,
            title: "Filling Application",
            description:
              "The composite resin is applied in layers and shaped to match your tooth's natural contours."
          },
          {
            step: 5,
            title: "Curing & Polishing",
            description:
              "A special light hardens the filling, and we polish it to blend seamlessly with your tooth."
          }
        ]}
        whoCandidateSection={{
          title: "Who Needs Tooth-Colored Fillings?",
          content:
            "Anyone with cavities, chips, or minor tooth damage can benefit from tooth-colored fillings. They are especially popular for visible teeth where aesthetics matter. If you want a natural-looking restoration that preserves your smile's appearance, composite fillings are an excellent choice."
        }}
        faqs={[
          {
            question: "How long do tooth-colored fillings last?",
            answer:
              "With proper care, composite fillings typically last 5-10 years or longer, depending on the size and location of the filling."
          },
          {
            question: "Are tooth-colored fillings as strong as metal fillings?",
            answer:
              "Modern composite materials are very strong and suitable for most cavities. For very large cavities or heavy chewing areas, your dentist may recommend other options."
          },
          {
            question: "Do tooth-colored fillings stain?",
            answer:
              "Composite fillings can stain over time from coffee, tea, or smoking, but regular cleanings and good oral hygiene help maintain their appearance."
          },
          {
            question: "Is the procedure painful?",
            answer:
              "No, we use local anesthesia to numb the area, so you won't feel pain during the procedure. Some sensitivity may occur afterward but typically subsides quickly."
          },
          {
            question: "How much do tooth-colored fillings cost?",
            answer:
              "Costs vary based on the size and location of the filling. Many insurance plans cover composite fillings. Contact us for a personalized estimate."
          }
        ]}
        ctaSection={{
          title: "Restore Your Smile with Tooth-Colored Fillings",
          description:
            "Get natural-looking cavity repair at Smile Experts Dental in Washington, D.C. Schedule your appointment today.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
