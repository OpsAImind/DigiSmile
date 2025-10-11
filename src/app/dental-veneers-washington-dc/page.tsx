import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { dental_venuer } from "@/assets/images";

export const metadata: Metadata = {
  title: "Dental Veneers in Washington, D.C. | Smile Experts Dental",
  description:
    "Get beautiful porcelain veneers in Washington, D.C. Fix chips, gaps, and discoloration for a flawless smile. Call (202) 545-6336 for a consultation.",
  keywords:
    "dental veneers Washington DC, porcelain veneers DC, composite veneers, smile makeover DC, veneers cost Washington, cosmetic veneers DC",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/dental-veneers-washington-dc/"
  },
  openGraph: {
    title: "Dental Veneers in Washington, D.C. | Smile Experts Dental",
    description:
      "Beautiful porcelain veneers to fix chips, gaps, and discoloration for a flawless smile.",
    url: "https://www.smilexpertsdental.com/dental-veneers-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Dental Veneers Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Veneers in Washington, D.C. | Smile Experts Dental",
    description: "Beautiful porcelain veneers in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function DentalVeneersWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Dental Veneers"
        description="Custom porcelain and composite veneers to cover imperfections like chips, gaps, or discoloration, giving you a flawless, natural-looking smile."
        url="https://www.smilexpertsdental.com/dental-veneers-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Dental Veneers Washington DC",
            url: "https://www.smilexpertsdental.com/dental-veneers-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Dental Veneers"
        location="Washington, D.C."
        intro="Transform your smile with custom dental veneers. Our porcelain and composite veneers cover imperfections and create a beautiful, natural-looking smile that lasts."
        heroImage={dental_venuer}
        heroImageAlt="Dental Veneers in Washington DC"
        whatIsSection={{
          title: "What are Dental Veneers?",
          content:
            "Dental veneers are thin, custom-made shells of tooth-colored material designed to cover the front surface of teeth. They are used to improve the appearance of teeth by correcting issues such as chips, cracks, gaps, discoloration, or misalignment. Veneers are bonded to the front of your teeth, providing a natural-looking, durable solution for a flawless smile.",
          image: dental_venuer
        }}
        benefits={[
          {
            title: "Instant Smile Transformation",
            description:
              "Dramatically improve your smile's appearance in just two visits."
          },
          {
            title: "Natural Appearance",
            description:
              "Porcelain veneers mimic the light-reflecting properties of natural teeth."
          },
          {
            title: "Stain Resistant",
            description:
              "Porcelain veneers resist stains from coffee, tea, and wine better than natural teeth."
          },
          {
            title: "Minimally Invasive",
            description:
              "Requires minimal tooth preparation compared to crowns or other restorations."
          },
          {
            title: "Long-Lasting Results",
            description:
              "With proper care, veneers can last 10-15 years or longer."
          },
          {
            title: "Versatile Solution",
            description:
              "Fix multiple cosmetic issues at once—chips, gaps, stains, and misalignment."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Consultation & Planning",
            description:
              "We discuss your goals, examine your teeth, and create a customized treatment plan."
          },
          {
            step: 2,
            title: "Tooth Preparation",
            description:
              "A small amount of enamel is removed from the tooth surface to make room for the veneer."
          },
          {
            step: 3,
            title: "Impressions & Temporary Veneers",
            description:
              "We take impressions of your teeth and place temporary veneers while your custom veneers are crafted."
          },
          {
            step: 4,
            title: "Veneer Fabrication",
            description:
              "Your custom veneers are created in a dental lab to match your desired shape, size, and color."
          },
          {
            step: 5,
            title: "Bonding & Final Adjustments",
            description:
              "We bond the veneers to your teeth using a strong adhesive and make final adjustments for a perfect fit."
          }
        ]}
        whoCandidateSection={{
          title: "Who is a Candidate for Dental Veneers?",
          content:
            "Veneers are ideal for individuals with healthy teeth and gums who want to improve the appearance of their smile. If you have chips, cracks, gaps, discoloration, or minor misalignment, veneers may be the perfect solution. We'll evaluate your oral health to determine if veneers are right for you."
        }}
        faqs={[
          {
            question: "What's the difference between porcelain and composite veneers?",
            answer:
              "Porcelain veneers are more durable, stain-resistant, and natural-looking but cost more. Composite veneers are more affordable and can be completed in one visit but may not last as long."
          },
          {
            question: "How long do dental veneers last?",
            answer:
              "Porcelain veneers typically last 10-15 years or longer with proper care. Composite veneers last 5-7 years on average."
          },
          {
            question: "Are veneers reversible?",
            answer:
              "No, because a small amount of enamel is removed during preparation, veneers are considered a permanent treatment."
          },
          {
            question: "Do veneers require special care?",
            answer:
              "No special care is needed. Brush, floss, and visit the dentist regularly. Avoid biting hard objects and consider a nightguard if you grind your teeth."
          },
          {
            question: "How much do veneers cost in Washington, D.C.?",
            answer:
              "The cost varies based on the type and number of veneers. We offer free consultations to provide a personalized quote and discuss payment options."
          }
        ]}
        ctaSection={{
          title: "Get Your Perfect Smile with Veneers",
          description:
            "Discover how dental veneers can transform your smile. Schedule a consultation at Smile Experts Dental in Washington, D.C. today.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
