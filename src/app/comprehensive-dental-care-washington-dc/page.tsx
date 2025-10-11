import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { service_detail } from "@/assets/images";

export const metadata: Metadata = {
  title:
    "Comprehensive Dental Care in Washington, D.C. | Smile Experts Dental",
  description:
    "Full-service dental care in Washington, D.C. From preventive to cosmetic and restorative treatments, all your dental needs in one place. Call (202) 545-6336 today.",
  keywords:
    "comprehensive dental care Washington DC, full service dentist DC, complete dental care, all-in-one dental clinic DC, dental treatments Washington",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/"
  },
  openGraph: {
    title:
      "Comprehensive Dental Care in Washington, D.C. | Smile Experts Dental",
    description:
      "Full-service dental care from preventive to cosmetic and restorative treatments, all in one place.",
    url: "https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Comprehensive Dental Care Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Comprehensive Dental Care in Washington, D.C. | Smile Experts Dental",
    description: "Full-service dental care in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function ComprehensiveDentalCareWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Comprehensive Dental Care"
        description="Complete dental care services including preventive, cosmetic, and restorative treatments all under one roof."
        url="https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Comprehensive Dental Care Washington DC",
            url: "https://www.smilexpertsdental.com/comprehensive-dental-care-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Comprehensive Dental Care"
        location="Washington, D.C."
        intro="Experience complete dental care under one roof. From routine checkups to advanced cosmetic and restorative treatments, we're your one-stop dental solution in Washington, D.C."
        heroImage={service_detail}
        heroImageAlt="Comprehensive Dental Care in Washington DC"
        whatIsSection={{
          title: "What is Comprehensive Dental Care?",
          content:
            "Comprehensive dental care means providing a full range of dental services to meet all your oral health needs in one convenient location. At Smile Experts Dental, we offer preventive care (cleanings, exams), restorative treatments (fillings, crowns, root canals), cosmetic dentistry (veneers, whitening), and specialized services (dentures, extractions). Our goal is to be your lifelong dental partner, providing personalized care for every stage of life.",
          image: service_detail
        }}
        benefits={[
          {
            title: "All Services Under One Roof",
            description:
              "No need to visit multiple specialists. We handle everything from cleanings to complex restorations."
          },
          {
            title: "Personalized Treatment Plans",
            description:
              "We create customized care plans tailored to your unique oral health needs and goals."
          },
          {
            title: "Continuity of Care",
            description:
              "Build a long-term relationship with our team who knows your dental history and preferences."
          },
          {
            title: "Advanced Technology",
            description:
              "We use the latest dental technology for accurate diagnosis and effective treatment."
          },
          {
            title: "Convenient Scheduling",
            description:
              "Flexible appointment times to fit your busy schedule in downtown Washington, D.C."
          },
          {
            title: "Family-Friendly Environment",
            description:
              "We treat patients of all ages, making dental care easy for the whole family."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Initial Consultation",
            description:
              "We conduct a thorough exam, review your medical and dental history, and discuss your concerns and goals."
          },
          {
            step: 2,
            title: "Comprehensive Assessment",
            description:
              "Digital X-rays, oral cancer screening, and evaluation of teeth, gums, bite, and jaw health."
          },
          {
            step: 3,
            title: "Customized Treatment Plan",
            description:
              "We present a detailed plan addressing immediate needs and long-term oral health goals."
          },
          {
            step: 4,
            title: "Phased Treatment",
            description:
              "We prioritize treatments and schedule them in phases, ensuring comfort and affordability."
          },
          {
            step: 5,
            title: "Ongoing Maintenance",
            description:
              "Regular checkups and cleanings to maintain your oral health and prevent future issues."
          }
        ]}
        whoCandidateSection={{
          title: "Who Benefits from Comprehensive Dental Care?",
          content:
            "Everyone! Whether you're looking for preventive care, need restorative work, want to enhance your smile, or require specialized treatments, comprehensive dental care ensures all your needs are met efficiently and effectively in one trusted location."
        }}
        faqs={[
          {
            question: "What services are included in comprehensive dental care?",
            answer:
              "Our comprehensive care includes preventive services (cleanings, exams, X-rays), restorative treatments (fillings, crowns, bridges, root canals), cosmetic dentistry (veneers, whitening), and specialized services (dentures, extractions, gum disease treatment)."
          },
          {
            question: "How is comprehensive care different from general dentistry?",
            answer:
              "Comprehensive care goes beyond routine general dentistry by offering a wider range of specialized services under one roof, with a focus on long-term oral health planning and personalized treatment."
          },
          {
            question: "Do I need to see multiple dentists?",
            answer:
              "No, our comprehensive approach means you can receive most treatments from our experienced team without referrals to outside specialists."
          },
          {
            question: "How much does comprehensive dental care cost?",
            answer:
              "Costs vary based on your individual treatment plan. We accept most insurance plans and offer flexible payment options to make care affordable."
          },
          {
            question: "How do I get started?",
            answer:
              "Simply schedule a comprehensive dental exam. We'll assess your oral health and create a personalized treatment plan to meet your needs."
          }
        ]}
        ctaSection={{
          title: "Experience Complete Dental Care",
          description:
            "Get all your dental needs met in one convenient location. Schedule your comprehensive dental exam at Smile Experts Dental in Washington, D.C. today.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
