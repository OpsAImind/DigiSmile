"use client";

import React from "react";
import DigiLayout from "@/components/Layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
  VStack
} from "@chakra-ui/react";
import { clinicServices } from "@/utils";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaTooth, FaCheckCircle } from "react-icons/fa";

type ClinicService = {
  heading: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
  title?: string;
  services?: string[];
  link?: string;
};
// @ts-ignore
const MotionBox = motion(Box);

const ClinicServicesClient = () => {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <DigiLayout>
      {/* Hero Section */}
      <Box
        height={"60vh"}
        width={"100%"}
        position={"relative"}
        className="locations-bg-image"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(150, 63, 54, 0.7)"
          zIndex={1}
        />
        <VStack
          position="relative"
          zIndex={2}
          spacing={4}
          textAlign="center"
          px={4}
        >
          <Heading
            as="h1"
            color="white"
            fontSize={isMobile ? "3xl" : isLaptop ? "4xl" : "5xl"}
            fontWeight={900}
          >
            COMPREHENSIVE DENTAL SERVICES
          </Heading>
          <Text
            color="white"
            fontSize={isMobile ? "md" : "xl"}
            maxW="800px"
            fontWeight={500}
          >
            Expert dental care in Washington, D.C. for all your oral health needs
          </Text>
        </VStack>
      </Box>

      {/* Introduction Section */}
      <Box bg="white" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading
              as="h2"
              color="brand.100"
              fontSize={isMobile ? "2xl" : "3xl"}
            >
              Your Complete Dental Care Solution
            </Heading>
            <Text
              fontSize={isMobile ? "md" : "lg"}
              color="gray.700"
              maxW="900px"
              lineHeight="tall"
            >
              At Smile Experts Dental, we offer a comprehensive range of dental services
              to keep your smile healthy, beautiful, and confident. From routine checkups
              to advanced cosmetic procedures, our experienced team is dedicated to
              providing exceptional care in a comfortable, welcoming environment.
            </Text>
          </VStack>

          {/* Quick Stats */}
          <Grid
            templateColumns={isMobile ? "1fr" : isLaptop ? "repeat(2, 1fr)" : "repeat(4, 1fr)"}
            gap={6}
            mb={16}
          >
            {[
              { number: "11+", label: "Services Offered" },
              { number: "100%", label: "Patient Satisfaction" },
              { number: "Same Day", label: "Emergency Care" },
              { number: "Advanced", label: "Technology" }
            ].map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                bg="brand.200"
                p={6}
                borderRadius="lg"
                textAlign="center"
                border="2px solid"
                borderColor="brand.100"
              >
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color="brand.100"
                  mb={2}
                >
                  {stat.number}
                </Text>
                <Text fontSize="sm" color="gray.700" fontWeight={600}>
                  {stat.label}
                </Text>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box bg="brand.200" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading
              as="h2"
              className="heading"
              textAlign="center"
              color="brand.100"
              mb={4}
            >
              Our Dental Services
            </Heading>
            <Text
              fontSize={isMobile ? "md" : "lg"}
              color="gray.700"
              textAlign="center"
              maxW="800px"
              mb={8}
            >
              Explore our full range of dental services designed to meet all your
              oral health needs. Click on any service to learn more about what we offer.
            </Text>

            <Accordion allowToggle variant="services" width="100%">
              {(clinicServices as ClinicService[]).map((service, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    mb={4}
                    bg="white"
                    overflow="hidden"
                    _hover={{
                      boxShadow: "lg",
                      borderColor: "brand.100"
                    }}
                    transition="all 0.3s"
                  >
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          py={6}
                          px={6}
                          _hover={{ bg: "brand.200" }}
                          _expanded={{ bg: "brand.100", color: "white" }}
                        >
                          <Flex
                            flex="1"
                            textAlign="left"
                            alignItems="center"
                            gap={4}
                          >
                            <Box
                              as={FaTooth}
                              fontSize="2xl"
                              color="inherit"
                            />
                            <Heading
                              as="h3"
                              fontSize={isMobile ? "lg" : "xl"}
                              fontWeight={700}
                            >
                              {service.title ?? service.heading}
                            </Heading>
                          </Flex>
                          <AccordionIcon fontSize="2xl" />
                        </AccordionButton>
                        <AccordionPanel 
                          pb={6} 
                          px={6}
                          bg={isExpanded ? "brand.100" : "white"}
                          color={isExpanded ? "white" : "inherit"}
                        >
                          <Flex
                            flexDir={isLaptop ? "column" : "row"}
                            gap={8}
                            alignItems="flex-start"
                          >
                            <Box flex={1}>
                              <Text
                                fontSize={isMobile ? "md" : "lg"}
                                mb={6}
                                lineHeight="tall"
                                color={isExpanded ? "white" : "gray.700"}
                              >
                                {service.description}
                              </Text>
                              <Divider my={4} borderColor={isExpanded ? "rgba(255,255,255,0.3)" : "gray.300"} />
                              {service.services && service.services.length > 0 && (
                                <>
                                  <Heading
                                    as="h4"
                                    fontSize="lg"
                                    fontWeight={700}
                                    mb={4}
                                    color={isExpanded ? "white" : "brand.100"}
                                  >
                                    Services Include:
                                  </Heading>
                                  <Grid
                                    templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
                                    gap={3}
                                  >
                                    {service.services.map((item: string, idx: number) => (
                                      <Flex
                                        key={idx}
                                        alignItems="flex-start"
                                        gap={2}
                                      >
                                        <Box
                                          as={FaCheckCircle}
                                          color={isExpanded ? "white" : "brand.100"}
                                          mt={1}
                                          flexShrink={0}
                                        />
                                        <Text fontSize="md" color={isExpanded ? "white" : "gray.700"}>
                                          {item}
                                        </Text>
                                      </Flex>
                                    ))}
                                  </Grid>
                                </>
                              )}
                            </Box>
                            {service.link && (
                              <Button
                                variant={isExpanded ? "outline" : "appointment"}
                                onClick={() => navigateToSection(service.link!)}
                                alignSelf={isLaptop ? "stretch" : "flex-start"}
                                size="lg"
                                minW={isLaptop ? "full" : "200px"}
                                color={isExpanded ? "white" : undefined}
                                borderColor={isExpanded ? "white" : undefined}
                                _hover={isExpanded ? { bg: "whiteAlpha.200" } : undefined}
                              >
                                Learn More
                              </Button>
                            )}
                          </Flex>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </MotionBox>
              ))}
            </Accordion>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="brand.100" py={16}>
        <Container maxW="container.xl">
          <VStack 
            spacing={6} 
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Heading
              as="h2"
              color="white"
              fontSize={isMobile ? "2xl" : "3xl"}
              textAlign="center"
            >
              Ready to Transform Your Smile?
            </Heading>
            <Text
              color="white"
              fontSize={isMobile ? "md" : "lg"}
              maxW="700px"
              textAlign="center"
              mx="auto"
            >
              Schedule your appointment today and experience the difference of
              exceptional dental care in Washington, D.C.
            </Text>
            <Flex
              gap={4}
              flexDir={isMobile ? "column" : "row"}
              mt={4}
              justifyContent="center"
              alignItems="center"
              width="100%"
              maxW={isMobile ? "100%" : "600px"}
              mx="auto"
            >
              <Button
                size="lg"
                bg="white"
                color="brand.100"
                _hover={{ bg: "gray.100" }}
                onClick={() => router.push("/#footer-section")}
                width={isMobile ? "full" : "auto"}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={() => router.push("/appointment")}
                width={isMobile ? "full" : "auto"}
              >
                Book Appointment
              </Button>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </DigiLayout>
  );
};

export default ClinicServicesClient;

