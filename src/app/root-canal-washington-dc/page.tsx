import React from "react";
import { Metadata } from "next";
import ServiceDetailPage from "@/features/ServiceDetail/ServiceDetailPage";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";
import { root_canal_service } from "@/assets/images";

export const metadata: Metadata = {
  title: "Root Canal Therapy in Washington, D.C. | Smile Experts Dental",
  description:
    "Expert root canal treatment in Washington, D.C. Our experienced dentists provide pain-free endodontic care to save your natural teeth. Call (202) 545-6336 to book your appointment today.",
  keywords:
    "root canal Washington DC, endodontic treatment DC, root canal therapy, tooth infection treatment, emergency root canal DC",
  alternates: {
    canonical: "https://www.smilexpertsdental.com/root-canal-washington-dc/"
  },
  openGraph: {
    title: "Root Canal Therapy in Washington, D.C. | Smile Experts Dental",
    description:
      "Expert root canal treatment in Washington, D.C. Pain-free endodontic care to save your natural teeth.",
    url: "https://www.smilexpertsdental.com/root-canal-washington-dc/",
    siteName: "Smile Experts Dental",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Root Canal Treatment Washington DC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Root Canal Therapy in Washington, D.C. | Smile Experts Dental",
    description:
      "Expert root canal treatment in Washington, D.C. Pain-free endodontic care.",
    images: ["https://www.smilexpertsdental.com/icon.png"]
  }
};

export default function RootCanalWashingtonDCPage() {
  return (
    <>
      <ServiceJsonLd
        serviceName="Root Canal Therapy"
        description="Expert root canal treatment to remove infection, clean and restore tooth health, keeping your smile strong and pain-free."
        url="https://www.smilexpertsdental.com/root-canal-washington-dc/"
        areaServed="Washington, DC"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          {
            name: "Root Canal Washington DC",
            url: "https://www.smilexpertsdental.com/root-canal-washington-dc/"
          }
        ]}
      />
      <ServiceDetailPage
        title="Root Canal Therapy"
        location="Washington, D.C."
        intro="Save your natural tooth with expert root canal treatment. Our experienced endodontists in Washington, D.C. provide gentle, pain-free care to eliminate infection and restore your oral health."
        heroImage={root_canal_service}
        heroImageAlt="Root Canal Treatment in Washington DC"
        whatIsSection={{
          title: "What is Root Canal Therapy?",
          content:
            "Root canal therapy is a dental procedure designed to treat infection at the center of a tooth. When the pulp inside your tooth becomes infected due to decay, cracks, or trauma, a root canal removes the infected tissue, cleans the canal, and seals it to prevent further infection. This procedure saves your natural tooth and eliminates pain, allowing you to maintain your smile without extraction.",
          image: root_canal_service
        }}
        benefits={[
          {
            title: "Pain Relief",
            description:
              "Eliminate severe tooth pain caused by infection or inflammation of the tooth pulp."
          },
          {
            title: "Save Your Natural Tooth",
            description:
              "Avoid extraction and preserve your natural tooth structure and function."
          },
          {
            title: "Prevent Spread of Infection",
            description:
              "Stop the infection from spreading to surrounding teeth and gums."
          },
          {
            title: "Restore Oral Health",
            description:
              "Return to normal eating, speaking, and smiling without discomfort."
          },
          {
            title: "Expert Care in D.C.",
            description:
              "Receive treatment from experienced dentists using advanced technology in the heart of Washington, D.C."
          },
          {
            title: "Comfortable Experience",
            description:
              "Modern anesthesia and sedation options ensure a pain-free procedure."
          }
        ]}
        procedure={[
          {
            step: 1,
            title: "Diagnosis & X-rays",
            description:
              "We examine your tooth and take X-rays to assess the extent of infection and plan your treatment."
          },
          {
            step: 2,
            title: "Anesthesia & Access",
            description:
              "Local anesthesia is applied to numb the area. A small opening is made in the tooth to access the infected pulp."
          },
          {
            step: 3,
            title: "Cleaning & Disinfection",
            description:
              "The infected pulp is carefully removed, and the root canals are cleaned and disinfected thoroughly."
          },
          {
            step: 4,
            title: "Filling & Sealing",
            description:
              "The cleaned canals are filled with a biocompatible material and sealed to prevent reinfection."
          },
          {
            step: 5,
            title: "Restoration",
            description:
              "A crown or filling is placed on the tooth to restore its strength, function, and appearance."
          }
        ]}
        whoCandidateSection={{
          title: "Who Needs a Root Canal?",
          content:
            "You may need a root canal if you experience severe tooth pain, prolonged sensitivity to hot or cold, tooth discoloration, swelling or tenderness in the gums, or a persistent pimple on the gums. Our dentists in Washington, D.C. will evaluate your symptoms and recommend the best treatment to save your tooth."
        }}
        faqs={[
          {
            question: "Is a root canal painful?",
            answer:
              "No, modern root canal procedures are virtually painless thanks to advanced anesthesia and techniques. Most patients report feeling relief from pain after the procedure."
          },
          {
            question: "How long does a root canal take?",
            answer:
              "Most root canal treatments can be completed in one to two appointments, each lasting 60-90 minutes depending on the tooth's complexity."
          },
          {
            question: "What is the recovery time after a root canal?",
            answer:
              "Most patients return to normal activities the next day. Mild discomfort may last a few days and can be managed with over-the-counter pain relievers."
          },
          {
            question: "How much does a root canal cost in Washington, D.C.?",
            answer:
              "The cost varies depending on the tooth and complexity. We accept most insurance plans and offer flexible payment options. Contact us for a personalized quote."
          },
          {
            question: "Can I eat after a root canal?",
            answer:
              "Avoid eating until the numbness wears off. Stick to soft foods for the first few days and avoid chewing on the treated tooth until the permanent restoration is placed."
          }
        ]}
        ctaSection={{
          title: "Ready to Save Your Tooth?",
          description:
            "Don't let tooth pain hold you back. Schedule your root canal consultation at Smile Experts Dental in Washington, D.C. today.",
          phone: "(202) 545-6336",
          clinic: "dc"
        }}
      />
    </>
  );
}
