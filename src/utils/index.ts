import RemoveIconComponent from "@/app/Icons/ProfileIcon";
import AppointmentHistoryIconComponent from "@/app/Icons/AppointmentHistoryIcon";
import UpcomingAppointmentIconComponent from "@/app/Icons/UpcomingAppointmentIcon";
import ChangePasswordIconComponent from "@/app/Icons/ChangePasswordIcon";
import MedicalRecordIconComponent from "@/app/Icons/MedicalRecordIcon";
import SignInIconComponent from "@/app/Icons/SignInIcon";
import AboutUSIconComponent from "@/app/Icons/AboutUsIcon";
import ServiceIconComponent from "@/app/Icons/ServicesIcon";
import AppointmentIconComponent from "@/app/Icons/AppointmentIcon";
import HomeIconComponent from "@/app/Icons/HomeIcon";
import DocumentIconComponent from "@/app/Icons/DocumentIcon";
import QuickAppointmentIconComponent from "@/app/Icons/QuickAppointmentIcon";

export const clinicServices = [
  {
    heading: "General Dentistry",
    title: "General Dentistry – Smile Expert Dental",
    value: "general_dentistry",
    description:
      "Our general dentistry services in Washington, D.C. support everyday oral health through routine exams, cleanings, and early detection, helping patients maintain strong teeth and healthy gums for the long term.",
    services: [
      "Routine dental exams",
      "Professional cleanings",
      "Digital X-rays",
      "Oral health education",
      "Gum disease prevention"
    ],
    link: "/general-dentistry-washington-dc/"
  },
  {
    heading: "Cosmetic Dentistry",
    title: "Cosmetic Dentistry – Smile Expert Dental",
    value: "cosmetic_dentistry",
    description:
      "Our cosmetic dentistry in Washington, D.C. focuses on improving the appearance of your smile by addressing tooth color, alignment, and shape with natural-looking results that build confidence.",
    services: [
      "Smile consultations",
      "Teeth whitening",
      "Veneers",
      "Cosmetic bonding",
      "Smile makeovers"
    ],
    link: "/cosmetic-dentistry-washington-dc/"
  },
  {
    heading: "Teeth Whitening",
    title: "Professional Teeth Whitening – Smile Expert Dental",
    value: "teeth_whitening",
    description:
      "Professional teeth whitening in Washington, D.C. helps remove deep stains caused by food, drinks, and lifestyle habits through safe, supervised treatments that deliver noticeably brighter smiles.",
    services: [
      "In-office whitening",
      "Take-home whitening kits",
      "Sensitivity management",
      "Shade assessment",
      "Post-treatment guidance"
    ],
    link: "/teeth-whitening-washington-dc/"
  },
  {
    heading: "Dental Veneers",
    title: "Porcelain Veneers – Smile Expert Dental",
    value: "dental_veneers",
    description:
      "Dental veneers in Washington, D.C. improve tooth shape, color, and alignment using thin, durable porcelain shells designed to correct cosmetic concerns and create a balanced smile.",
    services: [
      "Cosmetic evaluation",
      "Custom veneer design",
      "Tooth preparation",
      "Veneer placement",
      "Smile refinement"
    ],
    link: "/dental-veneers-washington-dc/"
  },
  {
    heading: "Root Canal Treatment",
    title: "Root Canal Therapy – Smile Expert Dental",
    value: "root_canal",
    description:
      "Root canal therapy in Washington, D.C., treats infected tooth pulp to relieve pain and stop infection while preserving your natural tooth and restoring comfort and function.",
    services: [
      "Infection diagnosis",
      "Pulp removal",
      "Canal cleaning",
      "Tooth sealing",
      "Post-treatment restoration"
    ],
    link: "/root-canal-washington-dc/"
  },
  {
    heading: "Dental Fillings",
    title: "Tooth-Colored Fillings – Smile Expert Dental",
    value: "dental_fillings",
    description:
      "Tooth-colored fillings in Washington, D.C. restore cavities using durable composite materials that blend naturally with your teeth while maintaining strength and appearance.",
    services: [
      "Cavity assessment",
      "Composite filling placement",
      "Color matching",
      "Tooth reshaping",
      "Bite adjustment"
    ],
    link: "/dental-fillings-washington-dc/"
  },
  {
    heading: "Tooth-Colored Fillings",
    title: "Composite Fillings – Smile Expert Dental",
    value: "tooth_colored_fillings",
    description:
      "Composite dental fillings repair decayed or damaged teeth with strong, natural-looking material that bonds securely to tooth structure and supports long-term function.",
    services: [
      "Tooth evaluation",
      "Decay removal",
      "Composite bonding",
      "Shape restoration",
      "Polishing and finishing"
    ],
    link: "/tooth-colored-fillings-washington-dc/"
  },
  {
    heading: "Dentures",
    title: "Affordable Dentures – Smile Expert Dental",
    value: "dentures",
    description:
      "Affordable dentures in Washington, D.C. replace missing teeth with comfortable solutions that improve chewing, speech, and facial support while supporting daily confidence.",
    services: [
      "Denture consultation",
      "Full dentures",
      "Partial dentures",
      "Adjustments and relines",
      "Denture care guidance"
    ],
    link: "/affordable-dentures-washington-dc/"
  },
  {
    heading: "Comprehensive Dental Care",
    title: "Complete Dental Care – Smile Expert Dental",
    value: "comprehensive_care",
    description:
      "Our complete dental care in Washington, D.C. brings preventive, restorative, and cosmetic services together under one roof to support consistent treatment and long-term oral health.",
    services: [
      "Preventive dentistry",
      "Restorative treatments",
      "Cosmetic solutions",
      "Ongoing maintenance",
      "Comprehensive evaluations"
    ],
    link: "/comprehensive-dental-care-washington-dc/"
  },
  {
    heading: "Preventive Dentistry",
    title: "Preventive Dental Care – Smile Expert Dental",
    value: "preventive_care",
    description:
      "Preventive dental care in Washington, D.C. focuses on protecting teeth and gums through regular checkups, cleanings, and education to help avoid future dental problems.",
    services: [
      "Routine checkups",
      "Professional cleanings",
      "Fluoride treatments",
      "Sealants",
      "Oral hygiene guidance"
    ]
  },
  {
    heading: "Emergency Dental Care",
    title: "Emergency Dentist – Smile Expert Dental",
    value: "emergency_care",
    description:
      "Our emergency dental care in Washington, D.C. provides prompt treatment for sudden pain, injury, or infection with a focus on relief, stability, and same-day care.",
    services: [
      "Toothache treatment",
      "Broken tooth repair",
      "Infection management",
      "Emergency exams",
      "Same-day care"
    ]
  }
];

export const sidebarData: {
  id: string;
  name: string;
  url: string;
  component: any;
  permission: string;
}[] = [
  {
    id: "0",
    name: "User Profile",
    url: "profile",
    component: RemoveIconComponent,
    permission: "patient"
  },
  {
    id: "1",
    name: "Documents",
    url: "documents",
    component: DocumentIconComponent,
    permission: "patient"
  },
  {
    id: "2",
    name: "Quick Appointment",
    url: "quick-appointment",
    component: QuickAppointmentIconComponent,
    permission: "patient"
  },
  {
    id: "3",
    name: "Upcoming Appointments",
    url: "upcoming-appointments",
    component: UpcomingAppointmentIconComponent,
    permission: "patient"
  },
  {
    id: "4",
    name: "Appointment History",
    url: "appointment-history",
    component: AppointmentHistoryIconComponent,
    permission: "patient"
  },
  {
    id: "5",
    name: "Change Password",
    url: "change-password",
    component: ChangePasswordIconComponent,
    permission: "patient"
  },
  {
    id: "6",
    name: "Add Medical Records",
    url: "add-medical-records",
    component: MedicalRecordIconComponent,
    permission: "staff"
  },
  {
    id: "7",
    name: "Check Appointment",
    url: "check-appointment",
    component: MedicalRecordIconComponent,
    permission: "doctor"
  }
];

export const appointmentLists = [
  {
    id: "0",
    name: "Home",
    url: "/",
    component: HomeIconComponent
  },
  {
    id: "1",
    name: "About us",
    url: "/about-us",
    component: AboutUSIconComponent
  },
  {
    id: "2",
    name: "Services",
    url: "/clinic-services",
    component: ServiceIconComponent
  },
  {
    id: "3",
    name: "Sign Up",
    url: "/auth/signup",
    component: SignInIconComponent
  },
  {
    id: "4",
    name: "Sign In",
    url: "/auth/login",
    component: RemoveIconComponent
  },
  {
    id: "5",
    name: "Appointment",
    url: "/appointment",
    component: AppointmentIconComponent
  }
];
