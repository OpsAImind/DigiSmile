"use client";

import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  useMediaQuery,
  SimpleGrid,
  HStack,
  Icon,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaStar,
  FaCheckCircle,
  FaAward,
  FaCertificate,
  FaQuoteLeft,
  FaTooth,
  FaPhone,
} from "react-icons/fa";
import LeadCaptureForm from "./LeadCaptureForm";
import { dr_image, about_1, about_2 } from "@/assets/images";
import PatientReviews from "../patient-reviews";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const services = [
  {
    title: "Emergency Dental Care",
    description:
      "Immediate treatment for dental emergencies, pain relief, and urgent dental issues.",
    icon: "🚨",
    tag: "Same-day",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Expert root canal treatment to save your natural teeth and eliminate pain.",
    icon: "🦷",
    tag: "Pain-free",
  },
  {
    title: "Dental Fillings",
    description:
      "Tooth-colored fillings that restore your teeth while maintaining a natural appearance.",
    icon: "✨",
    tag: "Natural look",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional teeth whitening services for a brighter, more confident smile.",
    icon: "💎",
    tag: "In-office",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Veneers, crowns, and cosmetic procedures to enhance your smile.",
    icon: "🌟",
    tag: "Custom",
  },
  {
    title: "Dentures",
    description:
      "Custom-fitted dentures for comfortable and natural-looking tooth replacement.",
    icon: "🎯",
    tag: "Precision fit",
  },
];

const certifications = [
  { label: "American Dental Association (ADA) Member", icon: FaAward },
  { label: "15+ Years of Experience", icon: FaCertificate },
  { label: "State Licensed Dentist", icon: FaCertificate },
  { label: "Continuing Education Certified", icon: FaAward },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Washington, DC",
    rating: 5,
    text: "Dr. Mahmood saved my tooth after a terrible emergency. She got me in same-day and the pain was gone within hours. Absolute lifesaver.",
    treatment: "Emergency Care",
  },
  {
    name: "James T.",
    location: "Burke, VA",
    rating: 5,
    text: "Best dental experience I've ever had. The team is warm, professional, and genuinely cares. My smile has completely transformed.",
    treatment: "Cosmetic Dentistry",
  },
  {
    name: "Priya K.",
    location: "DMV Area",
    rating: 5,
    text: "I was terrified of root canals but Dr. Mahmood made it completely painless. The whole process was explained step-by-step. Highly recommend.",
    treatment: "Root Canal",
  },
  {
    name: "Michael R.",
    location: "Washington, DC",
    rating: 5,
    text: "Three visits for whitening and the results are incredible. Friends keep asking what I did differently. Worth every penny.",
    treatment: "Teeth Whitening",
  },
];

const EmergencyLandingPage = () => {
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const navigateToAppointment = () => {
    router.push("/appointment");
  };

  return (
    <Box position="relative" bg="brand.200" minH="100vh">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <Box
        position="relative"
        minH={isMobile ? "auto" : "100vh"}
        bg="brand.100"
        overflow="hidden"
      >
        {/* Decorative background grid */}
        <Box
          position="absolute"
          inset={0}
          opacity={0.04}
          backgroundImage="linear-gradient(brand.200 1px, transparent 1px), linear-gradient(90deg, brand.200 1px, transparent 1px)"
          backgroundSize="60px 60px"
          pointerEvents="none"
        />

        {/* Large decorative number */}
        <Box
          position="absolute"
          right={isMobile ? "-20px" : "-40px"}
          top="50%"
          transform="translateY(-50%)"
          fontSize={isMobile ? "200px" : "380px"}
          fontWeight={900}
          color="brand.200"
          opacity={0.04}
          lineHeight={1}
          userSelect="none"
          pointerEvents="none"
          fontFamily="serif"
        >
          DR
        </Box>

        <Flex
          maxW="1280px"
          mx="auto"
          px={{ base: 6, md: 10, lg: 16 }}
          py={{ base: 16, md: 20 }}
          flexDir={isMobile ? "column" : "row"}
          alignItems="center"
          gap={{ base: 12, md: 16 }}
          minH={isMobile ? "auto" : "100vh"}
        >
          {/* Left: Copy */}
          <MotionBox
            flex={1.1}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Pill badge */}
            <MotionBox variants={fadeUp} mb={6}>
              <Box
                display="inline-flex"
                alignItems="center"
                gap={2}
                bg="brand.200"
                color="brand.100"
                px={4}
                py={1.5}
                borderRadius="full"
                fontSize="sm"
                fontWeight={700}
                letterSpacing="0.05em"
                textTransform="uppercase"
              >
                <Box w={2} h={2} bg="green.400" borderRadius="full" />
                Same-Day Appointments Available
              </Box>
            </MotionBox>

            <MotionText
              variants={fadeUp}
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight={900}
              color="brand.200"
              lineHeight={1.1}
              mb={6}
              letterSpacing="-0.02em"
            >
              Emergency Dental Care{" "}
              <Box as="span" position="relative" display="inline-block">
                When You Need
                <Box
                  as="span"
                  position="absolute"
                  bottom="-4px"
                  left={0}
                  right={0}
                  h="3px"
                  bg="brand.200"
                  opacity={0.4}
                  borderRadius="full"
                />
              </Box>{" "}
              It Most
            </MotionText>

            <MotionText
              variants={fadeUp}
              fontSize={{ base: "md", md: "lg" }}
              color="brand.200"
              opacity={0.75}
              mb={10}
              lineHeight={1.8}
              maxW="480px"
            >
              Experienced dental professionals in the DMV area ready to provide
              immediate, personalized care. Don&apos;t wait — relief is one call
              away.
            </MotionText>

            {/* Trust indicators */}
            <MotionBox variants={fadeUp}>
              <Grid
                templateColumns="repeat(3, 1fr)"
                gap={4}
                mb={10}
                maxW="420px"
              >
                {[
                  { val: "15+", label: "Years Experience" },
                  { val: "380+", label: "Happy Patients" },
                  { val: "4.5★", label: "Average Rating" },
                ].map((stat) => (
                  <Box
                    key={stat.label}
                    bg="brand.200"
                    borderRadius="12px"
                    p={4}
                    textAlign="center"
                  >
                    <Text
                      fontSize="xl"
                      fontWeight={900}
                      color="brand.100"
                      lineHeight={1}
                    >
                      {stat.val}
                    </Text>
                    <Text fontSize="xs" color="brand.100" opacity={0.6} mt={1}>
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </MotionBox>

            {/* Check items */}
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <VStack align="flex-start" spacing={3}>
                {[
                  "Same-day emergency appointments",
                  "Three convenient DMV locations",
                  "Insurance & flexible payment options",
                ].map((item) => (
                  <MotionBox
                    key={item}
                    variants={fadeUp}
                    display="flex"
                    alignItems="center"
                    gap={3}
                  >
                    <Box
                      w={5}
                      h={5}
                      bg="brand.200"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Icon as={FaCheckCircle} color="brand.100" w={3} h={3} />
                    </Box>
                    <Text color="brand.200" fontSize="sm" fontWeight={500}>
                      {item}
                    </Text>
                  </MotionBox>
                ))}
              </VStack>
            </MotionBox>
          </MotionBox>

          {/* Right: Form */}
          <MotionBox
            flex={isMobile ? "1" : "0.9"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            width="100%"
            maxW={isMobile ? "100%" : "480px"}
            w="100%"
          >
            {/* Form wrapper with accent border */}
            <Box
              position="relative"
              w="100%"
              _before={{
                content: '""',
                position: "absolute",
                inset: "-2px",
                borderRadius: { base: "16px", md: "18px" },
                background: "brand.200",
                opacity: 0.15,
                zIndex: 0,
              }}
            >
              <Box
                bg="brand.200"
                borderRadius={{ base: "14px", md: "16px" }}
                overflow="hidden"
                position="relative"
                zIndex={1}
                boxShadow={{ base: "0 16px 40px rgba(0,0,0,0.2)", md: "0 32px 80px rgba(0,0,0,0.25)" }}
                w="100%"
              >
                {/* Form header strip */}
                <Box 
                  bg="brand.100" 
                  px={{ base: 4, md: 6 }} 
                  py={{ base: 3, md: 4 }} 
                  borderBottom="1px solid" 
                  borderColor="blackAlpha.100" 
                  borderRadius={{ base: "14px 14px 0 0", md: "16px 16px 0 0" }}
                >
                  <HStack spacing={2} flexWrap="wrap">
                    <HStack spacing={2}>
                      <Box w={3} h={3} bg="red.400" borderRadius="full" />
                      <Box w={3} h={3} bg="yellow.400" borderRadius="full" />
                      <Box w={3} h={3} bg="green.400" borderRadius="full" />
                    </HStack>
                    <Text
                      fontSize={{ base: "10px", md: "xs" }}
                      color="brand.200"
                      opacity={0.6}
                      fontWeight={600}
                      letterSpacing="0.1em"
                      textTransform="uppercase"
                      whiteSpace="nowrap"
                    >
                      Secure Booking Form
                    </Text>
                  </HStack>
                </Box>
                <Box overflow="hidden" w="100%">
                  <LeadCaptureForm variant="hero" />
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Flex>
      </Box>

      {/* ─── DOCTOR BIO ───────────────────────────────────────── */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        py={{ base: 16, md: 24 }}
        bg="brand.200"
      >
        <Flex
          maxW="1280px"
          mx="auto"
          px={{ base: 6, md: 10, lg: 16 }}
          flexDir={isMobile ? "column" : "row"}
          gap={16}
          alignItems="center"
        >
          {/* Image with decorative frame */}
          <Box
            flex={1}
            position="relative"
            maxW={isMobile ? "100%" : "420px"}
          >
            <Box
              position="absolute"
              top={6}
              left={6}
              right={-6}
              bottom={-6}
              bg="brand.100"
              opacity={0.08}
              borderRadius="16px"
            />
            <Image
              src={dr_image}
              alt="Dr. Andleeb Mahmood"
              width={420}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
              }}
            />
            {/* Floating badge */}
            <Box
              position="absolute"
              bottom={-4}
              right={-4}
              bg="brand.100"
              color="brand.200"
              borderRadius="12px"
              p={4}
              boxShadow="xl"
              zIndex={2}
              textAlign="center"
              minW="120px"
            >
              <Text fontSize="2xl" fontWeight={900} lineHeight={1}>
                15+
              </Text>
              <Text fontSize="xs" fontWeight={600} opacity={0.8} mt={0.5}>
                Years of Excellence
              </Text>
            </Box>
          </Box>

          {/* Bio copy */}
          <Box flex={1}>
            <Text
              fontSize="xs"
              fontWeight={700}
              color="brand.100"
              letterSpacing="0.15em"
              textTransform="uppercase"
              mb={3}
              opacity={0.6}
            >
              Meet Your Dentist
            </Text>
            <Text
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={900}
              color="brand.100"
              lineHeight={1.1}
              letterSpacing="-0.02em"
              mb={6}
            >
              Dr. Andleeb Mahmood
            </Text>
            <Text
              color="brand.100"
              opacity={0.75}
              lineHeight={1.9}
              fontSize={{ base: "sm", md: "md" }}
              mb={8}
            >
              With over 15 years of experience, Dr. Mahmood treats every patient
              like family — delivering personalized, high-quality dental care
              across three DMV offices. From routine check-ups to complex
              cosmetic work, her practice is built on trust, precision, and
              genuine compassion.
            </Text>

            {/* Stats row */}
            <Flex gap={6} flexWrap="wrap">
              {[
                { icon: about_1, val: "380+", label: "Happy Clients" },
                { icon: about_2, val: "4.5 / 5", label: "204 Reviews", star: true },
              ].map((s) => (
                <Box
                  key={s.label}
                  bg="white"
                  borderRadius="12px"
                  p={5}
                  flex={1}
                  minW="140px"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="blackAlpha.100"
                >
                  <Image src={s.icon} alt={s.label} width={36} height={36} />
                  <HStack spacing={1} mt={2}>
                    <Text fontWeight={900} fontSize="xl" color="brand.100">
                      {s.val}
                    </Text>
                    {s.star && (
                      <Icon as={FaStar} color="yellow.400" boxSize={4} />
                    )}
                  </HStack>
                  <Text fontSize="xs" color="brand.100" opacity={0.6} mt={0.5}>
                    {s.label}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </MotionBox>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <Box py={{ base: 16, md: 24 }} bg="#F7F7F7">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          maxW="1280px"
          mx="auto"
          px={{ base: 6, md: 10, lg: 16 }}
        >
          <MotionBox variants={fadeUp} textAlign="center" mb={14}>
            <Text
              fontSize="xs"
              fontWeight={700}
              color="brand.100"
              letterSpacing="0.15em"
              textTransform="uppercase"
              opacity={0.5}
              mb={3}
            >
              What We Offer
            </Text>
            <Text
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={900}
              color="brand.100"
              lineHeight={1.15}
              letterSpacing="-0.02em"
              maxW="600px"
              mx="auto"
            >
              Comprehensive Care for Every Smile
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {services.map((service, i) => (
              <MotionBox key={i} variants={fadeUp}>
                <Box
                  bg="white"
                  borderRadius="16px"
                  p={7}
                  height="100%"
                  border="1px solid"
                  borderColor="blackAlpha.100"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.10)",
                    borderColor: "brand.100",
                  }}
                  role="group"
                >
                  {/* Hover fill */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="brand.100"
                    opacity={0}
                    transition="opacity 0.3s"
                    _groupHover={{ opacity: 0.03 }}
                    borderRadius="16px"
                  />

                  {/* Tag */}
                  <Box
                    position="absolute"
                    top={5}
                    right={5}
                    bg="brand.200"
                    color="brand.100"
                    fontSize="10px"
                    fontWeight={700}
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                    px={2.5}
                    py={1}
                    borderRadius="full"
                  >
                    {service.tag}
                  </Box>

                  <Text fontSize="2xl" mb={4}>
                    {service.icon}
                  </Text>
                  <Text
                    fontWeight={800}
                    fontSize="md"
                    color="brand.100"
                    mb={2}
                    lineHeight={1.3}
                  >
                    {service.title}
                  </Text>
                  <Text fontSize="sm" color="brand.100" opacity={0.65} lineHeight={1.7}>
                    {service.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Box>

      {/* ─── PRIMARY CTA ──────────────────────────────────────── */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        bg="brand.100"
        py={{ base: 16, md: 20 }}
        position="relative"
        overflow="hidden"
      >
        {/* Decorative blob */}
        <Box
          position="absolute"
          top="-60px"
          right="-60px"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="brand.200"
          opacity={0.05}
        />

        <Flex
          maxW="1280px"
          mx="auto"
          px={{ base: 6, md: 10, lg: 16 }}
          flexDir="column"
          alignItems="center"
          textAlign="center"
        >
          <Text
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight={900}
            color="brand.200"
            letterSpacing="-0.02em"
            lineHeight={1.15}
            mb={4}
            maxW="640px"
          >
            Ready to Transform Your Smile?
          </Text>
          <Text
            color="brand.200"
            opacity={0.75}
            mb={10}
            maxW="520px"
            lineHeight={1.8}
            fontSize={{ base: "sm", md: "md" }}
          >
            Don&apos;t let dental pain wait. Schedule today and experience
            personalized care that puts your comfort first.
          </Text>
          <Button
            variant="brand-second"
            size="lg"
            px={10}
            fontSize="md"
            fontWeight={700}
            onClick={navigateToAppointment}
            borderRadius="full"
            _hover={{ transform: "translateY(-3px)", boxShadow: "0 12px 40px rgba(0,0,0,0.2)" }}
            transition="all 0.3s"
          >
            Book Your Appointment →
          </Button>
        </Flex>
      </MotionBox>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <Box py={{ base: 16, md: 24 }} bg="brand.200">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          maxW="1280px"
          mx="auto"
          px={{ base: 6, md: 10, lg: 16 }}
        >
          <MotionBox variants={fadeUp} textAlign="center" mb={14}>
            <Text
              fontSize="xs"
              fontWeight={700}
              color="brand.100"
              letterSpacing="0.15em"
              textTransform="uppercase"
              opacity={0.5}
              mb={3}
            >
              Patient Stories
            </Text>
            <Text
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={900}
              color="brand.100"
              lineHeight={1.15}
              letterSpacing="-0.02em"
            >
              What Our Patients Say
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {testimonials.map((t, i) => (
              <MotionBox key={i} variants={fadeUp}>
                <Box
                  bg="white"
                  borderRadius="20px"
                  p={8}
                  height="100%"
                  position="relative"
                  border="1px solid"
                  borderColor="blackAlpha.80"
                  transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.09)",
                  }}
                >
                  {/* Quote icon */}
                  <Box
                    position="absolute"
                    top={6}
                    right={8}
                    opacity={0.07}
                  >
                    <Icon as={FaQuoteLeft} boxSize={10} color="brand.100" />
                  </Box>

                  {/* Stars */}
                  <HStack spacing={1} mb={5}>
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Icon key={si} as={FaStar} color="yellow.400" boxSize={4} />
                    ))}
                  </HStack>

                  {/* Review text */}
                  <Text
                    color="brand.100"
                    fontSize="md"
                    lineHeight={1.8}
                    fontStyle="italic"
                    mb={7}
                    opacity={0.85}
                  >
                    &quot;{t.text}&quot;
                  </Text>

                  {/* Divider */}
                  <Box h="1px" bg="blackAlpha.100" mb={5} />

                  {/* Author row */}
                  <Flex alignItems="center" justifyContent="space-between">
                    <HStack spacing={3}>
                      {/* Avatar initial */}
                      <Box
                        w={10}
                        h={10}
                        bg="brand.100"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text color="brand.200" fontWeight={800} fontSize="md">
                          {t.name.charAt(0)}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight={700} color="brand.100" fontSize="sm">
                          {t.name}
                        </Text>
                        <Text fontSize="xs" color="brand.100" opacity={0.5}>
                          {t.location}
                        </Text>
                      </Box>
                    </HStack>
                    {/* Treatment tag */}
                    <Box
                      bg="brand.200"
                      color="brand.100"
                      fontSize="10px"
                      fontWeight={700}
                      letterSpacing="0.06em"
                      textTransform="uppercase"
                      px={3}
                      py={1.5}
                      borderRadius="full"
                    >
                      {t.treatment}
                    </Box>
                  </Flex>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Rating summary bar */}
          <MotionBox variants={fadeUp} mt={10}>
            <Box
              bg="brand.100"
              borderRadius="20px"
              p={8}
              textAlign="center"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                gap={8}
                flexWrap="wrap"
              >
                <Box>
                  <Text fontSize="4xl" fontWeight={900} color="brand.200" lineHeight={1}>
                    4.5
                  </Text>
                  <HStack spacing={1} justifyContent="center" mt={1}>
                    {[1, 2, 3, 4].map((s) => (
                      <Icon key={s} as={FaStar} color="yellow.400" boxSize={4} />
                    ))}
                    <Icon as={FaStar} color="yellow.300" boxSize={4} opacity={0.5} />
                  </HStack>
                  <Text fontSize="xs" color="brand.200" opacity={0.6} mt={1}>
                    Average Rating
                  </Text>
                </Box>
                <Box w="1px" h="60px" bg="brand.200" opacity={0.2} display={isMobile ? "none" : "block"} />
                <Box>
                  <Text fontSize="4xl" fontWeight={900} color="brand.200" lineHeight={1}>
                    204
                  </Text>
                  <Text fontSize="xs" color="brand.200" opacity={0.6} mt={2}>
                    Verified Reviews
                  </Text>
                </Box>
                <Box w="1px" h="60px" bg="brand.200" opacity={0.2} display={isMobile ? "none" : "block"} />
                <Box>
                  <Text fontSize="4xl" fontWeight={900} color="brand.200" lineHeight={1}>
                    98%
                  </Text>
                  <Text fontSize="xs" color="brand.200" opacity={0.6} mt={2}>
                    Would Recommend
                  </Text>
                </Box>
              </Flex>
            </Box>
          </MotionBox>
        </MotionBox>
      </Box>

      {/* ─── CERTIFICATIONS ───────────────────────────────────── */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        py={{ base: 16, md: 20 }}
        bg="white"
      >
        <Box maxW="1280px" mx="auto" px={{ base: 6, md: 10, lg: 16 }}>
          <MotionBox variants={fadeUp} textAlign="center" mb={12}>
            <Text
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={900}
              color="brand.100"
              letterSpacing="-0.01em"
            >
              Professional Certifications & Achievements
            </Text>
          </MotionBox>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxW="720px" mx="auto">
            {certifications.map((cert, i) => (
              <MotionBox key={i} variants={fadeUp}>
                <Flex
                  alignItems="center"
                  gap={4}
                  bg="#F7F7F7"
                  borderRadius="12px"
                  p={5}
                  border="1px solid"
                  borderColor="blackAlpha.80"
                >
                  <Box
                    w={10}
                    h={10}
                    bg="brand.100"
                    borderRadius="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon as={cert.icon} color="brand.200" boxSize={4} />
                  </Box>
                  <Text fontWeight={600} color="brand.100" fontSize="sm">
                    {cert.label}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </MotionBox>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        bg="brand.100"
        py={{ base: 16, md: 20 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          bottom="-80px"
          left="-80px"
          w="320px"
          h="320px"
          borderRadius="full"
          bg="brand.200"
          opacity={0.05}
        />
        <Flex
          maxW="1280px"
          mx="auto"
          px={{ base: 6, md: 10, lg: 16 }}
          flexDir="column"
          alignItems="center"
          textAlign="center"
        >
          <Text
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight={900}
            color="brand.200"
            letterSpacing="-0.02em"
            lineHeight={1.15}
            mb={4}
            maxW="600px"
          >
            Take the First Step Towards Better Dental Health
          </Text>
          <Text
            color="brand.200"
            opacity={0.7}
            mb={10}
            maxW="520px"
            lineHeight={1.8}
            fontSize={{ base: "sm", md: "md" }}
          >
            Join hundreds of satisfied patients who trust Dr. Mahmood with their
            smiles. Contact us today.
          </Text>
          <Flex
            flexDir={isMobile ? "column" : "row"}
            gap={4}
            width="100%"
            maxW="480px"
          >
            <Button
              variant="brand-second"
              size="lg"
              flex={1}
              fontWeight={700}
              fontSize="md"
              onClick={navigateToAppointment}
              borderRadius="full"
              _hover={{ transform: "translateY(-3px)", boxShadow: "0 12px 40px rgba(0,0,0,0.2)" }}
              transition="all 0.3s"
            >
              Schedule Appointment
            </Button>
            <Button
              variant="bordered"
              size="lg"
              flex={1}
              fontWeight={700}
              fontSize="md"
              onClick={() => router.push("/home/clinic-services")}
              borderRadius="full"
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