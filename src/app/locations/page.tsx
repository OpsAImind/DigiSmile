import type { Metadata } from "next";
import DigiLayout from "@/components/Layout";
import { HEADER_HEIGHT } from "@/utils/constant";
import { Box, Text } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Dental Clinic Locations | Smile Experts Dental Washington, D.C.",
  description:
    "Visit Smile Experts Dental at our Washington, D.C. or Burke, VA locations. Find our addresses, hours, and contact information.",
  alternates: { canonical: "https://www.smilexpertsdental.com/locations/" },
  openGraph: {
    title: "Dental Clinic Locations | Smile Experts Dental",
    description: "Visit Smile Experts Dental at our Washington, D.C. or Burke, VA locations.",
    url: "https://www.smilexpertsdental.com/locations/",
    siteName: "Smile Experts Dental",
    images: [
      {
        url: "https://www.smilexpertsdental.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Smile Experts Dental Locations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Locations | Smile Experts Dental",
    description: "Visit Smile Experts Dental at our Washington, D.C. or Burke, VA locations.",
    images: ["https://www.smilexpertsdental.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LocationComponent = () => {
  return (
    <DigiLayout>
      <Box
        height={"60vh"}
        width={"100%"}
        position={"absolute"}
        mt={HEADER_HEIGHT}
        className="locations-bg-image"
      >
        <Text
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          color={"white.900"}
          fontWeight={900}
          className="heading"
          as="h1"
        >
          Locations
        </Text>
      </Box>
    </DigiLayout>
  );
};

export default LocationComponent;
