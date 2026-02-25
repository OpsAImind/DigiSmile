"use client";

import React from "react";
import { Box, Flex, Text, Button, useMediaQuery, SimpleGrid, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaStar, FaCheckCircle, FaAward, FaCertificate } from "react-icons/fa";
import LeadCaptureForm from "./LeadCaptureForm";
import LeadCapturePopup from "./LeadCapturePopup";
import { dr_image, about_1, about_2 } from "@/assets/images";
import PatientReviews from "../patient-reviews";
import ServiceSection from "../services-section";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const EmergencyLandingPage = () => {
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [isTablet] = useMediaQuery("(max-width: 768px)");

  const navigateToAppointment = () => {
    router.push("/appointment");
  };

  const services = [
    {
      title: "Emergency Dental Care",
      description: "Immediate treatment for dental emergencies, pain relief, and urgent dental issues."
    },
    {
      title: "Root Canal Therapy",
      description: "Expert root canal treatment to save your natural teeth and eliminate pain."
    },
    {
      title: "Dental Fillings",
      description: "Tooth-colored fillings that restore your teeth while maintaining a natural appearance."
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening services for a brighter, more confident smile."
    },
    {
      title: "Cosmetic Dentistry",
      description: "Veneers, crowns, and cosmetic procedures to enhance your smile."
    },
    {
      title: "Dentures",
      description: "Custom-fitted dentures for comfortable and natural-looking tooth replacement."
    }
  ];

  const certifications = [
    "American Dental Association (ADA) Member",
    "15+ Years of Experience",
    "State Licensed Dentist",
    "Continuing Education Certified"
  ];

  return (
    <Box position="relative" bg="brand.200" minH="100vh">
      <LeadCapturePopup />

      {/* Hero Section with Contact Form */}
      <Box
        position="relative"
        minH={isMobile ? "auto" : "90vh"}
        bg="brand.200"
        py={isMobile ? 8 : 12}
        px={4}
      >
        <Flex
          className="responsive-section"
          flexDir={isMobile ? "column" : "row"}
          gap={8}
          alignItems="center"
          justifyContent="center"
          maxW="1280px"
          mx="auto"
        >
          <MotionBox
            flex={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <Text
              as="h1"
              className="heading"
              color="brand.100"
              fontWeight={900}
              mb={4}
              textAlign={isMobile ? "center" : "left"}
            >
              Emergency Dental Care When You Need It Most
            </Text>
            <Text
              as="h3"
              fontSize={{ base: "lg", md: "xl" }}
              color="brand.100"
              mb={6}
              textAlign={isMobile ? "center" : "left"}
              opacity={0.9}
            >
              Experienced dental professionals ready to provide immediate care for your dental emergencies. 
              Same-day appointments available.
            </Text>
            <Flex
              flexDir={isMobile ? "column" : "row"}
              gap={4}
              mb={8}
              justifyContent={isMobile ? "center" : "flex-start"}
            >
              <HStack spacing={2} color="brand.100">
                <Icon as={FaCheckCircle} />
                <Text>Same-Day Appointments</Text>
              </HStack>
              <HStack spacing={2} color="brand.100">
                <Icon as={FaCheckCircle} />
                <Text>15+ Years Experience</Text>
              </HStack>
              <HStack spacing={2} color="brand.100">
                <Icon as={FaCheckCircle} />
                <Text>Emergency Care Available</Text>
              </HStack>
            </Flex>
          </MotionBox>

          <MotionBox
            flex={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
            width="100%"
            maxW="600px"
          >
            <LeadCaptureForm variant="hero" />
          </MotionBox>
        </Flex>
      </Box>

      {/* Company / Dentist Details Section */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="home-section"
        bg="white"
      >
        <Flex
          className="responsive-section"
          flexDir={isMobile ? "column" : "row"}
          gap={8}
          alignItems="center"
          maxW="1280px"
          mx="auto"
        >
          <Box flex={1}>
            <Image
              src={dr_image}
              alt="Dr. Andleeb Mahmood"
              width={400}
              height={450}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover"
              }}
            />
          </Box>
          <Box flex={1}>
            <Text as="h1" color="brand.100" fontWeight={900} mb={4}>
              Dr. Andleeb Mahmood
            </Text>
            <Text as="h3" color="brand.100" mb={6} lineHeight={1.8}>
              Dr. Andleeb Mahmood, a dentist with over 15 years of experience, treats patients like family, 
              providing personalized, high-quality dental treatment. With three offices in DMV, she offers 
              routine check-ups, cleanings, dental implants, and cosmetic dentistry. With extensive training 
              and a focus on patient-centric care, her practice aims to transform lives.
            </Text>
            <Flex
              justifyContent="space-around"
              alignItems="center"
              mt={8}
              flexWrap="wrap"
              gap={6}
            >
              <Box textAlign="center">
                <Image src={about_1} alt="Happy Clients" width={60} height={60} />
                <Text fontWeight={900} fontSize="2xl" color="brand.100" mt={2}>
                  Happy Clients
                </Text>
                <Text fontWeight={900} fontSize="2xl" color="brand.100">
                  380+
                </Text>
              </Box>
              <Box textAlign="center">
                <Image src={about_2} alt="Reviews" width={60} height={60} />
                <Text fontWeight={900} fontSize="2xl" color="brand.100" mt={2}>
                  Reviews
                </Text>
                <HStack spacing={1} justifyContent="center" mt={1}>
                  <Text fontWeight={900} fontSize="2xl" color="brand.100">
                    204/4.5
                  </Text>
                  <Icon as={FaStar} color="yellow.400" />
                </HStack>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </MotionBox>

      {/* Services Section */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="home-section"
        bg="#F7F7F7"
      >
        <Box className="responsive-section" maxW="1280px" mx="auto">
          <Text
            as="h1"
            color="brand.100"
            fontWeight={900}
            textAlign="center"
            mb={4}
          >
            Comprehensive Services for Optimal Oral Health
          </Text>
          <Text
            as="h4"
            color="brand.100"
            textAlign="center"
            mb={10}
            opacity={0.8}
          >
            We offer a wide range of dental services to meet all your oral health needs
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {services.map((service, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="md"
                _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                <Text as="h3" color="brand.100" fontWeight={700} mb={3}>
                  {service.title}
                </Text>
                <Text color="brand.100" opacity={0.8}>
                  {service.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </MotionBox>

      {/* Primary CTA Section */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="home-section"
        bg="brand.100"
        color="brand.200"
      >
        <Flex
          className="responsive-section"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          maxW="1280px"
          mx="auto"
        >
          <Text as="h1" color="brand.200" fontWeight={900} mb={4}>
            Ready to Transform Your Smile?
          </Text>
          <Text as="h3" color="brand.200" mb={8} maxW="600px">
            Don't wait for your dental emergency to get worse. Schedule your appointment today 
            and experience the difference of personalized, expert dental care.
          </Text>
          <Button
            variant="brand-second"
            size="lg"
            fontSize="lg"
            onClick={navigateToAppointment}
            _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
            transition="all 0.3s"
          >
            Book Your Appointment Now
          </Button>
        </Flex>
      </MotionBox>

      {/* Certifications Section */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="home-section"
        bg="white"
      >
        <Box className="responsive-section" maxW="1280px" mx="auto">
          <Flex alignItems="center" justifyContent="center" mb={8}>
            <Icon as={FaAward} boxSize={8} color="brand.100" mr={3} />
            <Text as="h1" color="brand.100" fontWeight={900}>
              Professional Certifications & Achievements
            </Text>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxW="800px" mx="auto">
            {certifications.map((cert, index) => (
              <Flex key={index} alignItems="center" gap={3}>
                <Icon as={FaCertificate} color="brand.100" boxSize={5} />
                <Text as="h4" color="brand.100">
                  {cert}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </MotionBox>

      {/* Reviews / Testimonials Section */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="home-section"
        bg="brand.200"
      >
        <Box className="responsive-section" maxW="1280px" mx="auto">
          <PatientReviews />
        </Box>
      </MotionBox>

      {/* Secondary CTA Section */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        className="home-section"
        bg="brand.100"
        color="brand.200"
      >
        <Flex
          className="responsive-section"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          maxW="1280px"
          mx="auto"
        >
          <Text as="h1" color="brand.200" fontWeight={900} mb={4}>
            Take the First Step Towards Better Dental Health
          </Text>
          <Text as="h4" color="brand.200" mb={8} maxW="700px" opacity={0.9}>
            Join hundreds of satisfied patients who trust us with their dental care. 
            Contact us today to schedule your consultation.
          </Text>
          <Flex
            flexDir={isMobile ? "column" : "row"}
            gap={4}
            width="100%"
            maxW="600px"
          >
            <Button
              variant="brand-second"
              size="lg"
              fontSize="lg"
              flex={1}
              onClick={navigateToAppointment}
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.3s"
            >
              Schedule Appointment
            </Button>
            <Button
              variant="bordered"
              size="lg"
              fontSize="lg"
              flex={1}
              onClick={() => router.push("/home/clinic-services")}
              _hover={{ bg: "brand.200", color: "brand.100" }}
              transition="all 0.3s"
            >
              View All Services
            </Button>
          </Flex>
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default EmergencyLandingPage;
