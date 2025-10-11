import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { denture_service } from "@/assets/images";

export const metadata: Metadata = {
  title: "Affordable Dentures in Washington, D.C. | Smile Experts Dental",
  description:
    "Get affordable, high-quality dentures in Washington, D.C. Full and partial dentures to restore your smile and function. Call (202) 545-6336 for a consultation.",
  keywords:
    "affordable dentures Washington DC, dentures DC, partial dentures Washington, full dentures DC, denture cost Washington, cheap dentures DC",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/affordable-dentures-washington-dc/"
  },
  openGraph: {
    title: "Affordable Dentures in Washington, D.C. | Smile Experts Dental",
    description:
      "Affordable, high-quality full and partial dentures to restore your smile and function.",
    url: "https://www.smilexpertsdental.com/affordable-dentures-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Affordable Dentures Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Dentures in Washington, D.C. | Smile Experts Dental",
    description: "Affordable dentures in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function AffordableDenturesWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Affordable Dentures"
        description="Custom-fitted full and partial dentures that replace missing teeth, restoring function, comfort, and confidence at an affordable price."
        url="https://www.smilexpertsdental.com/affordable-dentures-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Affordable Dentures Washington DC",
            url: "https://www.smilexpertsdental.com/affordable-dentures-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Affordable Dentures"
        location="Washington, D.C."
        intro="Restore your smile and confidence with affordable, custom-fitted dentures. Whether you need full or partial dentures, we provide high-quality solutions that fit your budget."
        heroImage={denture_service}
        heroImageAlt="Affordable Dentures in Washington DC"
        whatIsSection={{
          title: "What are Dentures?",
          content:
            "Dentures are removable prosthetic devices designed to replace missing teeth and restore oral function. Full dentures replace all teeth in an arch, while partial dentures replace specific missing teeth while preserving existing ones. Modern dentures are custom-made to fit comfortably and look natural, helping you eat, speak, and smile with confidence.",
          image: denture_service
        }}
        benefits={[
          {
            title: "Affordable Solution",
            description:
              "Dentures are a cost-effective way to replace multiple missing teeth."
          },
          {
            title: "Restore Function",
            description:
              "Eat, speak, and smile comfortably with properly fitted dentures."
          },
          {
            title: "Natural Appearance",
            description:
              "Modern dentures are designed to look and feel like natural teeth."
          },
          {
            title: "Improved Confidence",
            description:
              "Replace missing teeth and regain your self-esteem and social confidence."
          },
          {
            title: "Custom Fit",
            description:
              "Each denture is custom-made to fit your mouth comfortably and securely."
          },
          {
            title: "Flexible Options",
            description:
              "Choose from full dentures, partial dentures, or implant-supported dentures."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Exam",
            description:
              "We evaluate your oral health, discuss your needs, and determine the best denture option for you."
          },
          {
            step: 2,
            title: "Impressions & Measurements",
            description:
              "We take precise impressions and measurements of your mouth to create custom dentures."
          },
          {
            step: 3,
            title: "Try-In & Adjustments",
            description:
              "You'll try on a wax model of your dentures to ensure proper fit, bite, and appearance."
          },
          {
            step: 4,
            title: "Final Denture Fabrication",
            description:
              "Your custom dentures are crafted in a dental lab using high-quality materials."
          },
          {
            step: 5,
            title: "Fitting & Care Instructions",
            description:
              "We fit your dentures, make final adjustments, and teach you how to care for them."
          }
        ]}
        whoCandidateSection={{
          title: "Who Needs Dentures?",
          content:
            "Dentures are ideal for individuals who have lost most or all of their teeth due to decay, gum disease, injury, or aging. If you struggle to eat, speak, or smile due to missing teeth, dentures can restore your quality of life."
        }}
        faqs={[
          {
            question: "What's the difference between full and partial dentures?",
            answer:
              "Full dentures replace all teeth in an arch, while partial dentures replace specific missing teeth and use clasps to attach to remaining natural teeth."
          },
          {
            question: "How long do dentures last?",
            answer:
              "With proper care, dentures typically last 5-10 years. Over time, they may need adjustments or replacement as your mouth changes."
          },
          {
            question: "Are dentures uncomfortable?",
            answer:
              "Modern dentures are designed for comfort. There may be an adjustment period, but most patients adapt quickly. We make adjustments to ensure a proper fit."
          },
          {
            question: "How do I care for my dentures?",
            answer:
              "Remove and rinse dentures after eating, brush them daily with a soft brush, soak them overnight, and visit your dentist regularly for checkups."
          },
          {
            question: "How much do dentures cost in Washington, D.C.?",
            answer:
              "Costs vary based on the type of denture. We offer affordable options and flexible payment plans. Contact us for a personalized quote."
          }
        ]}
        ctaSection={{
          title: "Get Your Smile Back with Affordable Dentures",
          description:
            "Restore your confidence and oral function with custom dentures at Smile Experts Dental in Washington, D.C.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
