"use client";

import { digismileLogoImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import InstagramIconComponent from "@/app/Icons/InstagramIcon";
import FacebookIconComponent from "@/app/Icons/FacebookIcon";

const OFFER_URL = "https://ofinapulse.ai/lp/smilexpertsdental";

const Footer = () => {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 580px)");

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <Box
      background={"#577361"}
      className="footer-home-section"
      id="footer-section"
    >
      <Flex
        flexDir={"column"}
        className="responsive-footer-section"
        alignItems={"center"}
        justifyContent={"center"}
        gap={12}
        width={"100%"}
      >
        <Image src={digismileLogoImage} alt="logo" width={200} height={100} />

        {/* Special Offer - external lead-capture landing page */}
        <Flex
          direction={isMobile ? "column" : "row"}
          align="center"
          justify="space-between"
          gap={6}
          width="100%"
          maxW="1000px"
          bgGradient="linear(to-r, rgba(250,199,16,0.18), rgba(250,199,16,0.06))"
          border="1px solid rgba(250,199,16,0.55)"
          borderRadius="2xl"
          px={isMobile ? 6 : 10}
          py={isMobile ? 6 : 7}
          textAlign={isMobile ? "center" : "left"}
        >
          <Flex direction="column" gap={1}>
            <Text as="h3" color="white" fontWeight="800" fontSize={isMobile ? "xl" : "2xl"}>
              Book your appointment online
            </Text>
            <Text as="p" color="rgba(255,255,255,0.85)" fontSize="sm">
              Pick a date and time in under a minute — we&apos;ll take it from there.
            </Text>
          </Flex>
          <Box
            as="a"
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="offer-cta"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            flexShrink={0}
            bgGradient="linear(to-r, #FAC710, #f0a500)"
            color="#963f36"
            fontWeight="900"
            fontSize="md"
            letterSpacing="0.4px"
            borderRadius="full"
            px={8}
            py={3}
            transition="transform 0.25s ease"
            _hover={{ transform: "translateY(-2px)" }}
          >
            📅 Book Appointment
          </Box>
        </Flex>

        <Flex
          justifyContent={isLaptop ? "center" : "space-between"}
          alignItems={"flex-start"}
          gap={20}
          width={"100%"}
          padding={"0 2rem"}
          flexDir={isLaptop ? "column" : "row"}
        >
          <Flex flex={1} maxW={isLaptop ? "100%" : "600px"} flexDir={"column"} gap={8}>
            <Flex
              flexDir={"column"}
              width={"100%"}
              padding={"0 0 2rem 0"}
              alignItems={isLaptop ? "center" : "start"}
              borderBottom={"1px white solid"}
            >
              <Text as={"h1"} className="footer-heading">
                Washington D.C
              </Text>
              <Text as={"h1"} className="footer-heading">
                Dental Clinic
              </Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              flexWrap={isMobile ? "wrap" : "nowrap"}
              gap={2}
            >
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  <a href="mailto:Smilexpertsdc@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                    Smilexpertsdc@gmail.com
                  </a>
                </Text>
                <Text as={"h5"}>
                  <a href="tel:+12025456336" style={{ textDecoration: "none", color: "inherit" }}>
                    (202) 545-6336
                  </a>
                </Text>
                <Flex gap={2} mt={4}>
                  <InstagramIconComponent click={() => {
                    window.open("https://www.instagram.com/smile_experts_dental_dc?igsh=MzdpdXJvOXR0cTBq", "_blank");
                  }}/>
                  <FacebookIconComponent click={() => {
                    window.open("https://www.facebook.com/smileexpertsdentaldc?mibextid=ZbWKwL", "_blank");
                  }}/>
                </Flex>
              </Flex>
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  1747, Pennsylvania Avenue NW Suite 100 Washington, DC, 20006
                </Text>
                <div className="footer-location-hours">
                  Mon, Wed, Fri: 10am-5pm Hours
                </div>
              </Flex>
            </Flex>
            <Button
              mt={4}
              variant={"footer-button"}
              width={isLaptop ? "100%" : "300px"}
              onClick={() => {
                if (!localStorage.getItem("userId")) {
                  navigateToSection("/appointment?clinic=dc");
                } else {
                  navigateToSection(
                    `profile/${localStorage.getItem("userId")}/quick-appointment?tabId=2&clinic=dc`
                  );
                }
              }}
            >
              Book a consultation
            </Button>
          </Flex>
          <Flex flex={1} maxW={isLaptop ? "100%" : "600px"} flexDir={"column"} gap={8}>
            <Flex
              flexDir={"column"}
              width={"100%"}
              padding={"0 0 2rem 0"}
              alignItems={isLaptop ? "center" : "start"}
              borderBottom={"1px white solid"}
            >
              <Text as={"h1"} className="footer-heading">
                Burke, VA
              </Text>
              <Text as={"h1"} className="footer-heading">
                Dental Clinic
              </Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              flexWrap={isMobile ? "wrap" : "nowrap"}
              gap={2}
            >
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  <a href="mailto:Smilexpertsdc@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                    Smilexpertsdc@gmail.com
                  </a>
                </Text>
                <Text as={"h5"}>
                  <a href="tel:+15713748000" style={{ textDecoration: "none", color: "inherit" }}>
                    (571) 374-8000
                  </a>
                </Text>
                <Flex gap={2} mt={4}>
                  <InstagramIconComponent click={() => {
                    window.open("https://www.instagram.com/smile_experts_dental_burke?igsh=eWM5MWdmaG9qMnJz ", "_blank");
                  }}/>
                  <FacebookIconComponent click={() => {
                    window.open("https://www.facebook.com/share/16a7qzr8cX/", "_blank");
                  }}/>
                </Flex>
              </Flex>
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  9570, Burke Road Unit A Burke, VIRGINIA, 22015
                </Text>
                <div className="footer-location-hours">
                  Tue, Thu, Sat: 9am-4pm Hours
                </div>
              </Flex>
            </Flex>
            <Button
              mt={4}
              variant={"footer-button"}
              width={isLaptop ? "100%" : "300px"}
              onClick={() => {
                if (!localStorage.getItem("userId")) {
                  navigateToSection("/appointment?clinic=burke");
                } else {
                  navigateToSection(
                    `profile/${localStorage.getItem("userId")}/quick-appointment?tabId=2&clinic=burke`
                  );
                }
              }}
            >
              Book a consultation
            </Button>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
          gap={8}
          py={8}
          borderTop={"1px solid rgba(255,255,255,0.2)"}
        >
          <Flex flexDir={"column"} gap={2}>
            <Text as={"h5"} fontWeight={"bold"} mb={2}>
              Quick Links
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => navigateToSection("home/about-us")}
              _hover={{ textDecoration: "underline" }}
            >
              About Us
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => navigateToSection("home/clinic-services")}
              _hover={{ textDecoration: "underline" }}
            >
              All Services
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => navigateToSection("blog")}
              _hover={{ textDecoration: "underline" }}
            >
              Blog
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => navigateToSection("home/privacy-policy")}
              _hover={{ textDecoration: "underline" }}
            >
              Privacy Policy
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap={2}>
            <Text as={"h5"} fontWeight={"bold"} mb={2}>
              Our Services
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/root-canal-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Root Canal Therapy
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/general-dentistry-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              General Dentistry
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/cosmetic-dentistry-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Cosmetic Dentistry
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/dental-veneers-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Dental Veneers
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/teeth-whitening-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Teeth Whitening
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap={2}>
            <Text as={"h5"} fontWeight={"bold"} mb={2}>
              More Services
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/affordable-dentures-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Affordable Dentures
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/tooth-colored-fillings-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Tooth-Colored Fillings
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/dental-fillings-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Dental Fillings
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/comprehensive-dental-care-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Comprehensive Care
            </Text>
          </Flex>
          <Flex flexDir={"column"} gap={2}>
            <Text as={"h5"} fontWeight={"bold"} mb={2}>
              Advanced Treatments
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/dental-implants-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Dental Implants
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/all-on-4-full-arch-restoration/")}
              _hover={{ textDecoration: "underline" }}
            >
              All-on-4 / Full-Arch
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/clear-aligners-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Clear Aligners
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/dental-crowns-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Dental Crowns
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/laser-gum-treatment-washington-dc/")}
              _hover={{ textDecoration: "underline" }}
            >
              Laser Gum Treatment
            </Text>
            <Text
              as={"a"}
              fontSize={"sm"}
              cursor={"pointer"}
              onClick={() => router.push("/3d-digital-smile-design/")}
              _hover={{ textDecoration: "underline" }}
            >
              3D Digital Smile Design
            </Text>
          </Flex>
        </Flex>
        <p>
          &copy; {new Date().getFullYear()} Smile Expert Dental. All rights
          reserved.
        </p>
      </Flex>
    </Box>
  );
};

export default Footer;
