"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Button, Flex, Text, useMediaQuery, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { userImage1 } from "@/assets/images";

interface FAQ {
  question: string;
  answer: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface ProcedureStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceDetailPageProps {
  title: string;
  location: string;
  intro: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  whatIsSection: {
    title: string;
    content: string;
    image?: StaticImageData;
  };
  benefits: Benefit[];
  procedure?: ProcedureStep[];
  whoCandidateSection?: {
    title: string;
    content: string;
  };
  faqs: FAQ[];
  ctaSection: {
    title: string;
    description: string;
    phone: string;
    clinic?: string;
  };
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  title,
  location,
  intro,
  heroImage,
  heroImageAlt,
  whatIsSection,
  benefits,
  procedure,
  whoCandidateSection,
  faqs,
  ctaSection
}) => {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 680px)");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleBookAppointment = () => {
    const userId = localStorage.getItem("userId");
    const clinicParam = ctaSection.clinic ? `&clinic=${ctaSection.clinic}` : "";
    
    if (!userId) {
      router.push(`/appointment?${clinicParam.slice(1)}`);
    } else {
      router.push(`/profile/${userId}/quick-appointment?tabId=2${clinicParam}`);
    }
  };

  return (
    <Box position="relative" overflowX="hidden">
      <Navbar />
      
      {/* Hero Section - Modern Design */}
      <Box
        className="home-section"
        position="relative"
        minHeight="70vh"
        background="linear-gradient(135deg, #963f36 0%, #b85450 100%)"
        display="flex"
        alignItems="center"
        mt="80px"
      >
        <Flex
          width="100%"
          maxW="1400px"
          mx="auto"
          px={8}
          alignItems="center"
          gap={12}
          flexDirection={isLaptop ? "column" : "row"}
        >
          <Box flex={1} color="white" textAlign={isLaptop ? "center" : "left"}>
            <Text
              as="h1"
              className="heading"
              mb={6}
              fontWeight="bold"
            >
              {title} in {location}
            </Text>
            <Text
              fontSize={isMobile ? "lg" : "xl"}
              mb={8}
              lineHeight="tall"
              opacity={0.9}
            >
              {intro}
            </Text>
            <Flex gap={4} justifyContent={isLaptop ? "center" : "flex-start"} flexWrap="wrap">
              <Button
                variant="appointment"
                size="lg"
                bg="white"
                color="brand.100"
                _hover={{ 
                  transform: "translateY(-2px)",
                  boxShadow: "xl"
                }}
                transition="all 0.3s ease"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </Button>
              <Button
                as="a"
                href={`tel:${ctaSection.phone}`}
                size="lg"
                bg="transparent"
                color="white"
                border="2px solid white"
                _hover={{ 
                  bg: "whiteAlpha.200",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.3s ease"
              >
                Call {ctaSection.phone}
              </Button>
            </Flex>
          </Box>
          
          {!isMobile && (
            <Box flex={1} position="relative">
              <Box
                position="relative"
                borderRadius="20px"
                overflow="hidden"
                boxShadow="2xl"
                transform="rotate(3deg)"
                _hover={{ transform: "rotate(0deg)" }}
                transition="all 0.5s ease"
              >
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  style={{ 
                    width: "100%", 
                    height: "400px", 
                    objectFit: "cover"
                  }}
                />
              </Box>
            </Box>
          )}
        </Flex>
      </Box>

      {/* What Is Section - Matching Homepage Style */}
      <Box className="home-section" background="#F7F7F7" position="relative">
        <Flex
          maxW="1400px"
          mx="auto"
          px={8}
          alignItems="center"
          gap={12}
          flexDirection={isLaptop ? "column" : "row"}
        >
          <Box flex={1} order={isLaptop ? 2 : 1}>
            <Text
              as="h2"
              className="heading"
              color="brand.100"
              mb={6}
              textAlign={isLaptop ? "center" : "left"}
            >
              {whatIsSection.title}
            </Text>
            <Text 
              fontSize="lg" 
              color="gray.700" 
              lineHeight="tall"
              textAlign={isLaptop ? "center" : "left"}
            >
              {whatIsSection.content}
            </Text>
          </Box>
          
          <Box flex={1} order={isLaptop ? 1 : 2} position="relative">
            {!isMobile && (
              <Image
                src={userImage1}
                alt="Dental Professional"
                style={{ 
                  width: "100%", 
                  height: "auto",
                  borderRadius: "20px"
                }}
              />
            )}
          </Box>
        </Flex>
      </Box>

      {/* Benefits Section - Card Grid */}
      <Box className="home-section" background="white">
        <Box maxW="1400px" mx="auto" px={8}>
          <Text
            as="h2"
            className="heading"
            color="brand.100"
            mb={12}
            textAlign="center"
          >
            Why Choose {title} in {location}?
          </Text>
          
          <Grid
            templateColumns={isMobile ? "1fr" : isLaptop ? "repeat(2, 1fr)" : "repeat(3, 1fr)"}
            gap={8}
          >
            {benefits.map((benefit, index) => (
              <GridItem key={index}>
                <Box
                  bg="white"
                  p={8}
                  borderRadius="20px"
                  boxShadow="0 10px 30px rgba(150, 63, 54, 0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  height="100%"
                  position="relative"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(150, 63, 54, 0.15)"
                  }}
                  transition="all 0.3s ease"
                >
                  <Box
                    position="absolute"
                    top={-3}
                    left={6}
                    bg="brand.100"
                    color="white"
                    px={4}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.100"
                    mb={4}
                    mt={2}
                  >
                    {benefit.title}
                  </Text>
                  <Text color="gray.700" lineHeight="tall">
                    {benefit.description}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Procedure Section - Timeline Style */}
      {procedure && procedure.length > 0 && (
        <Box className="home-section" background="#F7F7F7">
          <Box maxW="1200px" mx="auto" px={8}>
            <Text
              as="h2"
              className="heading"
              color="brand.100"
              mb={12}
              textAlign="center"
            >
              What to Expect During Your {title}
            </Text>
            
            <Flex flexDirection="column" gap={6} position="relative">
              {/* Timeline Line */}
              <Box
                position="absolute"
                left={isMobile ? "25px" : "50px"}
                top="50px"
                bottom="50px"
                width="3px"
                bg="brand.100"
                opacity={0.3}
                display={isMobile ? "none" : "block"}
              />
              
              {procedure.map((step, index) => (
                <Flex
                  key={index}
                  gap={6}
                  alignItems="flex-start"
                  position="relative"
                >
                  <Box
                    minW={isMobile ? "40px" : "60px"}
                    h={isMobile ? "40px" : "60px"}
                    bg="brand.100"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="full"
                    fontSize={isMobile ? "lg" : "xl"}
                    fontWeight="bold"
                    boxShadow="lg"
                    position="relative"
                    zIndex={2}
                  >
                    {step.step}
                  </Box>
                  <Box
                    bg="white"
                    p={6}
                    borderRadius="15px"
                    boxShadow="md"
                    flex={1}
                    border="1px solid"
                    borderColor="gray.100"
                  >
                    <Text fontSize="xl" fontWeight="bold" mb={3} color="brand.100">
                      {step.title}
                    </Text>
                    <Text color="gray.700" lineHeight="tall">
                      {step.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>
      )}

      {/* Who is a Candidate Section */}
      {whoCandidateSection && (
        <Box className="home-section" background="white">
          <Box maxW="1000px" mx="auto" px={8} textAlign="center">
            <Text
              as="h2"
              className="heading"
              color="brand.100"
              mb={6}
            >
              {whoCandidateSection.title}
            </Text>
            <Text fontSize="lg" color="gray.700" lineHeight="tall">
              {whoCandidateSection.content}
            </Text>
          </Box>
        </Box>
      )}

      {/* FAQ Section - Accordion Style */}
      <Box className="home-section" background="#F7F7F7">
        <Box maxW="1000px" mx="auto" px={8}>
          <Text
            as="h2"
            className="heading"
            color="brand.100"
            mb={12}
            textAlign="center"
          >
            Frequently Asked Questions
          </Text>
          
          <Flex flexDirection="column" gap={4}>
            {faqs.map((faq, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="15px"
                boxShadow="md"
                border="1px solid"
                borderColor="gray.100"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{ boxShadow: "lg" }}
              >
                <Button
                  w="100%"
                  p={6}
                  bg="transparent"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="lg"
                  color="brand.100"
                  _hover={{ bg: "gray.50" }}
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  rightIcon={
                    <Text fontSize="xl">
                      {expandedFAQ === index ? "−" : "+"}
                    </Text>
                  }
                  justifyContent="space-between"
                >
                  {faq.question}
                </Button>
                
                {expandedFAQ === index && (
                  <Box p={6} pt={0} borderTop="1px solid" borderColor="gray.100">
                    <Text color="gray.700" lineHeight="tall">
                      {faq.answer}
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      {/* CTA Section - Modern Gradient */}
      <Box 
        className="home-section"
        background="linear-gradient(135deg, #963f36 0%, #b85450 100%)"
        color="white"
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={8}
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          gap={6}
        >
          <Text
            as="h2"
            className="heading"
            mb={4}
          >
            {ctaSection.title}
          </Text>
          <Text fontSize="xl" maxW="700px" opacity={0.9} mb={4}>
            {ctaSection.description}
          </Text>
          <Flex gap={6} flexWrap="wrap" justifyContent="center">
            <Button
              variant="appointment"
              size="lg"
              bg="white"
              color="brand.100"
              _hover={{ 
                transform: "translateY(-3px)",
                boxShadow: "xl"
              }}
              transition="all 0.3s ease"
              onClick={handleBookAppointment}
            >
              Book Online Now
            </Button>
            <Button
              as="a"
              href={`tel:${ctaSection.phone}`}
              size="lg"
              bg="transparent"
              color="white"
              border="2px solid white"
              _hover={{ 
                bg: "whiteAlpha.200",
                transform: "translateY(-3px)"
              }}
              transition="all 0.3s ease"
            >
              Call {ctaSection.phone}
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
};

export default ServiceDetailPage;
