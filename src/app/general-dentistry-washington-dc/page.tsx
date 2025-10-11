import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { prevention } from "@/assets/images";

export const metadata: Metadata = {
  title: "General Dentistry in Washington, D.C. | Smile Experts Dental",
  description:
    "Comprehensive general dentistry services in Washington, D.C. including checkups, cleanings, exams, and preventive care for the whole family. Call (202) 545-6336 to schedule your visit.",
  keywords:
    "general dentistry Washington DC, dental checkup DC, teeth cleaning DC, family dentist Washington, preventive dental care DC, dental exam Washington DC",
  alternates: {
    canonical:
      "https://www.smilexpertsdental.com/general-dentistry-washington-dc/"
  },
  openGraph: {
    title: "General Dentistry in Washington, D.C. | Smile Experts Dental",
    description:
      "Comprehensive general dentistry services including checkups, cleanings, and preventive care for the whole family.",
    url: "https://www.smilexpertsdental.com/general-dentistry-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "General Dentistry Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "General Dentistry in Washington, D.C. | Smile Experts Dental",
    description:
      "Comprehensive general dentistry services for the whole family in Washington, D.C.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function GeneralDentistryWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="General Dentistry Services"
        description="Comprehensive general dentistry including checkups, cleanings, exams, and preventive care for patients of all ages."
        url="https://www.smilexpertsdental.com/general-dentistry-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "General Dentistry Washington DC",
            url: "https://www.smilexpertsdental.com/general-dentistry-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="General Dentistry Services"
        location="Washington, D.C."
        intro="Your trusted partner for complete family dental care. From routine checkups to preventive treatments, we keep your smile healthy and bright."
        heroImage={prevention}
        heroImageAlt="General Dentistry Services in Washington DC"
        whatIsSection={{
          title: "What is General Dentistry?",
          content:
            "General dentistry focuses on the prevention, diagnosis, and treatment of oral health conditions. Our general dentistry services include routine dental exams, professional cleanings, cavity fillings, gum disease treatment, and oral health education. We provide comprehensive care for patients of all ages, ensuring your teeth and gums stay healthy for life.",
          image: prevention
        }}
        benefits={[
          {
            title: "Preventive Care",
            description:
              "Regular checkups and cleanings prevent cavities, gum disease, and other oral health issues."
          },
          {
            title: "Early Detection",
            description:
              "Identify dental problems early before they become serious and costly."
          },
          {
            title: "Family-Friendly",
            description:
              "We provide gentle care for patients of all ages, from children to seniors."
          },
          {
            title: "Comprehensive Services",
            description:
              "All your dental needs under one roof, from cleanings to fillings and more."
          },
          {
            title: "Convenient Location",
            description:
              "Located in the heart of Washington, D.C. with flexible scheduling options."
          },
          {
            title: "Insurance Accepted",
            description:
              "We accept most dental insurance plans and offer flexible payment options."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Comprehensive Exam",
            description:
              "We examine your teeth, gums, and mouth for signs of decay, disease, or other issues."
          },
          {
            step: 2,
            title: "Professional Cleaning",
            description:
              "Our hygienists remove plaque and tartar buildup, polish your teeth, and floss thoroughly."
          },
          {
            step: 3,
            title: "X-rays (if needed)",
            description:
              "Digital X-rays help us detect problems not visible during the exam, such as cavities between teeth."
          },
          {
            step: 4,
            title: "Treatment Planning",
            description:
              "We discuss any findings and recommend treatments to maintain or restore your oral health."
          },
          {
            step: 5,
            title: "Preventive Education",
            description:
              "We provide personalized tips on brushing, flossing, and diet to keep your smile healthy."
          }
        ]}
        whoCandidateSection={{
          title: "Who Should Visit a General Dentist?",
          content:
            "Everyone! Regular dental visits are essential for maintaining oral health at every age. Whether you need a routine checkup, have a toothache, or want to improve your smile, our general dentistry services in Washington, D.C. are here for you and your family."
        }}
        faqs={[
          {
            question: "How often should I visit the dentist?",
            answer:
              "Most patients should visit the dentist every six months for a checkup and cleaning. Your dentist may recommend more frequent visits if you have specific oral health concerns."
          },
          {
            question: "What happens during a dental checkup?",
            answer:
              "During a checkup, we examine your teeth and gums, check for cavities and gum disease, perform a professional cleaning, and take X-rays if necessary."
          },
          {
            question: "Is teeth cleaning painful?",
            answer:
              "No, professional teeth cleaning is generally painless. You may feel slight pressure or sensitivity, but our gentle hygienists ensure your comfort throughout."
          },
          {
            question: "Do you accept dental insurance?",
            answer:
              "Yes, we accept most major dental insurance plans. Contact our office to verify your coverage and benefits."
          },
          {
            question: "Can you treat children?",
            answer:
              "Absolutely! We provide gentle, family-friendly care for patients of all ages, including children."
          }
        ]}
        ctaSection={{
          title: "Schedule Your Dental Checkup Today",
          description:
            "Maintain a healthy smile with comprehensive general dentistry services at Smile Experts Dental in Washington, D.C.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
