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
    title: "General Dentistry - Washington DC",
    value: "general_dentistry",
    description:
      "Our general dentistry services provide comprehensive oral health care for patients of all ages. From routine checkups to preventive care, we ensure your smile stays healthy and bright.",
    services: [
      "Comprehensive Dental Examinations",
      "Professional Teeth Cleaning",
      "Digital X-Rays",
      "Oral Cancer Screenings",
      "Fluoride Treatments",
      "Dental Sealants",
      "Gum Disease Treatment"
    ],
    link: "/general-dentistry-washington-dc/"
  },
  {
    heading: "Cosmetic Dentistry",
    title: "Cosmetic Dentistry - Washington DC",
    value: "cosmetic_dentistry",
    description:
      "Transform your smile with our advanced cosmetic dentistry services. We combine artistry with cutting-edge technology to create beautiful, natural-looking results that boost your confidence.",
    services: [
      "Teeth Whitening",
      "Porcelain Veneers",
      "Dental Bonding",
      "Smile Makeovers",
      "Gum Contouring",
      "Tooth-Colored Fillings"
    ],
    link: "/cosmetic-dentistry-washington-dc/"
  },
  {
    heading: "Teeth Whitening",
    title: "Professional Teeth Whitening - Washington DC",
    value: "teeth_whitening",
    description:
      "Brighten your smile with our professional teeth whitening treatments. Safe, effective, and delivering dramatic results, our whitening services can remove years of stains and discoloration.",
    services: [
      "In-Office Whitening",
      "Take-Home Whitening Kits",
      "Custom Whitening Trays",
      "Stain Removal Treatment",
      "Touch-Up Treatments"
    ],
    link: "/teeth-whitening-washington-dc/"
  },
  {
    heading: "Dental Veneers",
    title: "Porcelain Veneers - Washington DC",
    value: "dental_veneers",
    description:
      "Achieve a flawless smile with custom porcelain veneers. These thin shells are bonded to the front of your teeth to correct imperfections and create a stunning, natural-looking smile.",
    services: [
      "Porcelain Veneers",
      "Composite Veneers",
      "Minimal Prep Veneers",
      "Veneer Consultation & Design",
      "Smile Preview Technology"
    ],
    link: "/dental-veneers-washington-dc/"
  },
  {
    heading: "Root Canal Treatment",
    title: "Root Canal Therapy - Washington DC",
    value: "root_canal",
    description:
      "Save your natural tooth with gentle, pain-free root canal therapy. Our experienced team uses advanced techniques to eliminate infection and restore your tooth's health and function.",
    services: [
      "Root Canal Therapy",
      "Emergency Root Canal Treatment",
      "Endodontic Retreatment",
      "Digital Imaging",
      "Pain Management",
      "Same-Day Emergency Care"
    ],
    link: "/root-canal-washington-dc/"
  },
  {
    heading: "Dental Fillings",
    title: "Tooth-Colored Fillings - Washington DC",
    value: "dental_fillings",
    description:
      "Restore decayed or damaged teeth with our tooth-colored fillings. These durable, natural-looking restorations blend seamlessly with your smile while protecting your teeth from further decay.",
    services: [
      "Composite Resin Fillings",
      "Cavity Treatment",
      "Old Filling Replacement",
      "Mercury-Free Fillings",
      "Same-Day Fillings"
    ],
    link: "/dental-fillings-washington-dc/"
  },
  {
    heading: "Tooth-Colored Fillings",
    title: "Composite Fillings - Washington DC",
    value: "tooth_colored_fillings",
    description:
      "Say goodbye to silver fillings! Our tooth-colored composite fillings provide a beautiful, natural appearance while effectively treating cavities and restoring tooth structure.",
    services: [
      "Aesthetic Composite Fillings",
      "BPA-Free Materials",
      "Bonded Restorations",
      "Cavity Prevention Counseling",
      "Conservative Tooth Preparation"
    ],
    link: "/tooth-colored-fillings-washington-dc/"
  },
  {
    heading: "Dentures",
    title: "Affordable Dentures - Washington DC",
    value: "dentures",
    description:
      "Restore your smile and confidence with our high-quality, affordable dentures. We offer both full and partial dentures custom-made to fit comfortably and look natural.",
    services: [
      "Full Dentures",
      "Partial Dentures",
      "Implant-Supported Dentures",
      "Denture Repairs",
      "Denture Relines",
      "Same-Day Dentures"
    ],
    link: "/affordable-dentures-washington-dc/"
  },
  {
    heading: "Comprehensive Dental Care",
    title: "Complete Dental Care - Washington DC",
    value: "comprehensive_care",
    description:
      "Experience complete oral health care under one roof. Our comprehensive dental services cover everything from preventive care to advanced restorative treatments, ensuring your smile stays healthy for life.",
    services: [
      "Full Mouth Rehabilitation",
      "Preventive Care Programs",
      "Restorative Dentistry",
      "Periodontal Care",
      "Oral Surgery",
      "Emergency Dental Services",
      "Pediatric Dentistry"
    ],
    link: "/comprehensive-dental-care-washington-dc/"
  },
  {
    heading: "Preventive Dentistry",
    title: "Preventive Dental Care - Washington DC",
    value: "preventive_care",
    description:
      "Prevention is the foundation of good oral health. Our preventive dentistry services help you maintain a healthy smile and avoid costly dental problems in the future.",
    services: [
      "Regular Dental Checkups",
      "Professional Cleanings",
      "Oral Health Education",
      "Nutritional Counseling",
      "Custom Mouthguards",
      "TMJ Treatment"
    ]
  },
  {
    heading: "Emergency Dental Care",
    title: "Emergency Dentist - Washington DC",
    value: "emergency_care",
    description:
      "Dental emergencies can happen anytime. Our team is ready to provide prompt, compassionate care when you need it most. We offer same-day appointments for urgent dental issues.",
    services: [
      "Toothache Relief",
      "Broken Tooth Repair",
      "Lost Filling/Crown Replacement",
      "Abscess Treatment",
      "Trauma Care",
      "Same-Day Emergency Appointments"
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
    url: "/home/about-us",
    component: AboutUSIconComponent
  },
  {
    id: "2",
    name: "Services",
    url: "/home/clinic-services",
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
