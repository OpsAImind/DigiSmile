"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Box, Container, Heading, Text, Button, Grid, GridItem, VStack, HStack, Flex, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"

type FAQ = { question: string; answer: string }
type Benefit = { title: string; description: string }
type ProcedureStep = { step: number; title: string; description: string }

type Theme = {
  // Keep to 3-5 distinct colors; derive the rest internally
  primary: string
  primaryForeground: string
  background: string
  foreground: string
  muted: string
}

export interface ServiceDetailPageProps {
  title: string
  location: string
  intro: string
  heroImageSrc: string
  heroImageAlt: string
  whatIsSection: {
    title: string
    content: string
  }
  benefits: Benefit[]
  procedure?: ProcedureStep[]
  whoCandidateSection?: {
    title: string
    content: string
  }
  faqs: FAQ[]
  ctaSection: {
    title: string
    description: string
    phone: string
  }
  // Optional per-page theme override
  theme?: Partial<Theme>
}

// ---- Theming utilities ----
function hashString(str: string) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

function hsl(h: number, s: number, l: number) {
  return `hsl(${h} ${s}% ${l}%)`
}

function pickThemeFromSeed(seed: string): Theme {
  // Use consistent brand colors for all service pages
  const primary = "#963f36" // Brand primary color
  const primaryForeground = "#ffffff"
  const background = "#ffffff"
  const foreground = "#0b0d10"
  const muted = "#faf7f5" // Brand light background
  return { primary, primaryForeground, background, foreground, muted }
}

function isLight(hexOrHsl: string) {
  // Naive luminance check; assumes hex when starting with #
  if (!hexOrHsl.startsWith("#")) return true
  const hex = hexOrHsl.replace("#", "")
  const bigint = Number.parseInt(
    hex.length === 3
      ? hex
          .split("")
          .map((c) => c + c)
          .join("")
      : hex,
    16,
  )
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  // Relative luminance approximation
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 165
}

export default function ServiceDetailPage({
  title,
  location,
  intro,
  heroImageSrc,
  heroImageAlt,
  whatIsSection,
  benefits,
  procedure,
  whoCandidateSection,
  faqs,
  ctaSection,
  theme: themeOverride,
}: ServiceDetailPageProps) {
  const [expanded, setExpanded] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  // Compute a distinct theme for each page automatically based on title+location.
  const baseTheme = useMemo(() => pickThemeFromSeed(`${title}-${location}`), [title, location])
  const theme = useMemo<Theme>(() => {
    return {
      primary: themeOverride?.primary ?? baseTheme.primary,
      primaryForeground: themeOverride?.primaryForeground ?? baseTheme.primaryForeground,
      background: themeOverride?.background ?? baseTheme.background,
      foreground: themeOverride?.foreground ?? baseTheme.foreground,
      muted: themeOverride?.muted ?? baseTheme.muted,
    }
  }, [baseTheme, themeOverride])

  // Derive subtle tokens from the 3-5 base colors
  const card = theme.background
  const border = isLight(theme.background) ? "rgba(2, 6, 23, 0.12)" : "rgba(255, 255, 255, 0.16)"
  const accent = theme.primary

  // Animation presets
  const fadeUp = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    viewport: { once: true, margin: "-80px" },
  }

  const staggerParent = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.08 },
    },
    viewport: { once: true, margin: "-60px" },
  }

  const item = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <Box position="relative">
      <Navbar />
      <Box as="main" mt="80px">
        {/* Hero */}
        <Box
          as={motion.section}
          position="relative"
          overflow="hidden"
          bg={theme.primary}
          color={theme.primaryForeground}
          {...fadeUp}
        >
        <Container maxW="6xl" py={{ base: 12, md: 16 }}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={{ base: 8, md: 12 }} alignItems="center">
            <Box as={motion.div} {...fadeUp}>
              <Heading as="h1" size="3xl" fontWeight="bold" mb={4}>
                {title} in {location}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} mb={6} opacity={0.95}>
                {intro}
              </Text>
              <HStack spacing={3} flexWrap="wrap">
                <Button
                  as="a"
                  href="/appointment"
                  size="lg"
                  bg={card}
                  color={theme.foreground}
                  _hover={{ opacity: 0.9 }}
                  boxShadow="sm"
                  border="1px solid"
                  borderColor={border}
                >
                  Book Appointment
                </Button>
                <Button
                  as="a"
                  href={`tel:${ctaSection.phone}`}
                  size="lg"
                  variant="outline"
                  borderColor={theme.primaryForeground}
                  color={theme.primaryForeground}
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  Call {ctaSection.phone}
                </Button>
              </HStack>
            </Box>

            <Box
              as={motion.div}
              order={{ base: -1, md: 1 }}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <Image
                src={heroImageSrc || "/placeholder.svg?height=600&width=900&query=service hero image"}
                alt={heroImageAlt}
                w="full"
                maxH="400px"
                objectFit="cover"
                borderRadius="xl"
                boxShadow="lg"
                border="1px solid"
                borderColor={border}
              />
            </Box>
          </Grid>
        </Container>

        {/* Decorative underline */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="4px"
          bgGradient={`linear(to-r, ${card}, ${accent})`}
        />
      </Box>

      {/* What Is */}
      <Box as={motion.section} bg={theme.muted} {...fadeUp}>
        <Container maxW="6xl" py={{ base: 12, md: 16 }}>
          <Heading as="h2" size="2xl" fontWeight="bold" color={theme.foreground} mb={4}>
            {whatIsSection.title}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="rgba(2,6,23,0.75)">
            {whatIsSection.content}
          </Text>
        </Container>
      </Box>

      {/* Benefits */}
      <Box
        as={motion.section}
        bg={theme.background}
        variants={staggerParent}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <Container maxW="6xl" py={{ base: 12, md: 16 }}>
          <Heading as="h2" size="2xl" fontWeight="bold" color={theme.foreground} mb={8}>
            Why Choose {title} in {location}?
          </Heading>
          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
            {benefits.map((b, i) => (
              <Box
                as={motion.article}
                key={i}
                bg={card}
                p={6}
                borderRadius="xl"
                boxShadow="sm"
                border="1px solid"
                borderColor={border}
                variants={item}
              >
                <Text fontSize="sm" fontWeight="semibold" color={accent} mb={2}>
                  {"0".concat(String(i + 1)).slice(-2)}
                </Text>
                <Heading as="h3" size="md" fontWeight="bold" color={theme.foreground} mb={2}>
                  {b.title}
                </Heading>
                <Text fontSize="md" color="rgba(2,6,23,0.75)">
                  {b.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Procedure */}
      {procedure && procedure.length > 0 ? (
        <Box as={motion.section} bg={theme.muted} {...fadeUp}>
          <Container maxW="5xl" py={{ base: 12, md: 16 }}>
            <Heading as="h2" size="2xl" fontWeight="bold" color={theme.foreground} mb={8}>
              What to Expect During Your {title}
            </Heading>
            <VStack spacing={4} align="stretch">
              {procedure.map((step) => (
                <Flex key={step.step} gap={4} as={motion.li} {...fadeUp}>
                  <Flex
                    w="40px"
                    h="40px"
                    flexShrink={0}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="full"
                    bg={theme.primary}
                    color={theme.primaryForeground}
                    fontWeight="semibold"
                  >
                    {step.step}
                  </Flex>
                  <Box
                    flex={1}
                    bg={card}
                    p={4}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor={border}
                  >
                    <Heading as="h3" size="md" fontWeight="bold" color={theme.foreground} mb={1}>
                      {step.title}
                    </Heading>
                    <Text fontSize="md" color="rgba(2,6,23,0.75)">
                      {step.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Container>
        </Box>
      ) : null}

      {/* Candidate */}
      {whoCandidateSection ? (
        <Box as={motion.section} bg={theme.background} {...fadeUp}>
          <Container maxW="4xl" py={{ base: 12, md: 16 }} textAlign="center">
            <Heading as="h2" size="2xl" fontWeight="bold" color={theme.foreground} mb={4}>
              {whoCandidateSection.title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="rgba(2,6,23,0.75)">
              {whoCandidateSection.content}
            </Text>
          </Container>
        </Box>
      ) : null}

      {/* FAQs */}
      <Box as={motion.section} bg={theme.muted} {...fadeUp}>
        <Container maxW="3xl" py={{ base: 12, md: 16 }}>
          <Heading as="h2" size="2xl" fontWeight="bold" color={theme.foreground} textAlign="center" mb={8}>
            Frequently Asked Questions
          </Heading>
          <Accordion allowToggle>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                bg={card}
                borderRadius="lg"
                border="1px solid"
                borderColor={border}
                mb={4}
              >
                <AccordionButton py={3} px={4}>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight="bold" color={theme.foreground}>
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon color={accent} />
                </AccordionButton>
                <AccordionPanel pb={4} pt={0} px={4}>
                  <Text fontSize="md" color="rgba(2,6,23,0.75)">
                    {faq.answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>

      {/* CTA */}
      <Box as={motion.section} bg={theme.primary} color={theme.primaryForeground} {...fadeUp}>
        <Container maxW="5xl" py={{ base: 12, md: 16 }} textAlign="center">
          <Heading as="h2" size="2xl" fontWeight="bold" mb={3}>
            {ctaSection.title}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} maxW="2xl" mx="auto" mb={6} opacity={0.95}>
            {ctaSection.description}
          </Text>
          <HStack spacing={3} justify="center" flexWrap="wrap">
            <Button
              as="a"
              href="/appointment"
              size="lg"
              bg={card}
              color={theme.foreground}
              _hover={{ opacity: 0.9 }}
              boxShadow="sm"
              border="1px solid"
              borderColor={border}
            >
              Book Online Now
            </Button>
            <Button
              as="a"
              href={`tel:${ctaSection.phone}`}
              size="lg"
              variant="outline"
              borderColor={theme.primaryForeground}
              color={theme.primaryForeground}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Call {ctaSection.phone}
            </Button>
          </HStack>
        </Container>
      </Box>
      </Box>
      <Footer />
    </Box>
  )
}
