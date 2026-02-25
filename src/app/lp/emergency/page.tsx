import { Metadata } from "next";
import EmergencyLandingPage from "@/features/LandingPage/EmergencyLandingPage";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Emergency Dental Care | Same-Day Appointments | Smile Experts Dental",
  description: "Need emergency dental care? Get same-day appointments with experienced dental professionals. Serving Washington DC, Arlington VA, and surrounding areas. Book your appointment now!",
  keywords: "emergency dental care, same-day dental appointments, dental emergency, urgent dental care, Washington DC dentist, Arlington VA dentist",
  openGraph: {
    title: "Emergency Dental Care | Same-Day Appointments",
    description: "Experienced dental professionals ready to provide immediate care for your dental emergencies.",
    type: "website",
    url: "https://www.smilexpertsdental.com/lp/emergency",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmergencyLandingPageRoute() {
  return (
    <>
      <EmergencyLandingPage />
      <Footer />
    </>
  );
}
