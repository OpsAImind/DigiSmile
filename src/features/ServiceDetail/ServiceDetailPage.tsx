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
      <Box as="main" bg={theme.primary}>
      <Navbar />
        {/* Hero */}
        <Box
          as={motion.section}
          position="relative"
          overflow="hidden"
          color={theme.primaryForeground}
          {...fadeUp}
        >
        <Container maxW="6xl" py={{ base: 12, sm: 16, md: 20, lg: 24 }} px={{ base: 4, sm: 6, md: 8 }}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={{ base: 6, md: 8, lg: 12 }} alignItems="center">
            <Box as={motion.div} {...fadeUp}>
              <Heading 
                as="h1" 
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold" 
                mb={{ base: 3, md: 4 }} 
                lineHeight={"1.2"}
              >
                {title} in {location}
              </Heading>
              <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} mb={{ base: 4, md: 6 }} opacity={0.95} lineHeight="1.7">
                {intro}
              </Text>
              <HStack spacing={{ base: 2, sm: 3 }} flexWrap="wrap" gap={{ base: 2, sm: 3 }}>
                <Button
                  as="a"
                  href="/appointment"
                  size={{ base: "md", md: "lg" }}
                  bg={card}
                  color={theme.foreground}
                  _hover={{ opacity: 0.9 }}
                  boxShadow="sm"
                  border="1px solid"
                  textColor={theme.primaryForeground}
                  borderColor={border}
                  fontSize={{ base: "sm", md: "md" }}
                  px={{ base: 4, md: 6 }}
                >
                  Book Appointment
                </Button>
                <Button
                  as="a"
                  href={`tel:${ctaSection.phone}`}
                  size={{ base: "md", md: "lg" }}
                  variant="outline"
                  borderColor={theme.primaryForeground}
                  color={theme.primaryForeground}
                  _hover={{ bg: "whiteAlpha.200" }}
                  fontSize={{ base: "sm", md: "md" }}
                  px={{ base: 4, md: 6 }}
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
                maxH={{ base: "280px", sm: "320px", md: "360px", lg: "400px" }}
                objectFit="cover"
                borderRadius={{ base: "lg", md: "xl" }}
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
        <Container maxW="6xl" py={{ base: 10, sm: 12, md: 16 }} px={{ base: 4, sm: 6, md: 8 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="bold" 
            color={theme.foreground} 
            mb={{ base: 3, md: 4 }}
          >
            {whatIsSection.title}
          </Heading>
          <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} color="rgba(2,6,23,0.75)" lineHeight="1.7">
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
        <Container maxW="6xl" py={{ base: 10, sm: 12, md: 16 }} px={{ base: 4, sm: 6, md: 8 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="bold" 
            lineHeight={"1.2"} 
            color={theme.foreground} 
            mb={{ base: 6, md: 8 }}
          >
            Why Choose {title} in {location}?
          </Heading>
          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={{ base: 4, sm: 5, md: 6 }}>
            {benefits.map((b, i) => (
              <Box
                as={motion.article}
                key={i}
                bg={card}
                p={{ base: 4, sm: 5, md: 6 }}
                borderRadius={{ base: "lg", md: "xl" }}
                boxShadow="sm"
                border="1px solid"
                borderColor={border}
                variants={item}
              >
                <Text fontSize={{ base: "xs", sm: "sm" }} fontWeight="semibold" color={accent} mb={2}>
                  {"0".concat(String(i + 1)).slice(-2)}
                </Text>
                <Heading 
                  as="h3" 
                  fontSize={{ base: "sm", sm: "md" }}
                  fontWeight="bold" 
                  color={theme.foreground} 
                  mb={{ base: 1.5, md: 2 }}
                >
                  {b.title}
                </Heading>
                <Text fontSize={{ base: "sm", sm: "md" }} color="rgba(2,6,23,0.75)" lineHeight="1.6">
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
          <Container maxW="5xl" py={{ base: 10, sm: 12, md: 16 }} px={{ base: 4, sm: 6, md: 8 }}>
            <Heading 
              as="h2" 
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontWeight="bold" 
              lineHeight={"1.2"} 
              color={theme.foreground} 
              mb={{ base: 6, md: 8 }}
            >
              What to Expect During Your {title}
            </Heading>
            <VStack spacing={{ base: 3, md: 4 }} align="stretch">
              {procedure.map((step) => (
                <Flex key={step.step} gap={{ base: 3, sm: 4 }} as={motion.li} {...fadeUp} flexDir={{ base: "column", sm: "row" }}>
                  <Flex
                    w={{ base: "36px", sm: "40px" }}
                    h={{ base: "36px", sm: "40px" }}
                    flexShrink={0}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="full"
                    bg={theme.primary}
                    color={theme.primaryForeground}
                    fontWeight="semibold"
                    fontSize={{ base: "sm", sm: "md" }}
                  >
                    {step.step}
                  </Flex>
                  <Box
                    flex={1}
                    bg={card}
                    p={{ base: 3, sm: 4 }}
                    borderRadius={{ base: "md", md: "lg" }}
                    border="1px solid"
                    borderColor={border}
                  >
                    <Heading 
                      as="h3" 
                      fontSize={{ base: "sm", sm: "md" }}
                      fontWeight="bold" 
                      color={theme.foreground} 
                      mb={{ base: 1, md: 1 }}
                    >
                      {step.title}
                    </Heading>
                    <Text fontSize={{ base: "sm", sm: "md" }} color="rgba(2,6,23,0.75)" lineHeight="1.6">
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
          <Container maxW="4xl" py={{ base: 10, sm: 12, md: 16 }} px={{ base: 4, sm: 6, md: 8 }} textAlign="center">
            <Heading 
              as="h2" 
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
              fontWeight="bold" 
              color={theme.foreground} 
              mb={{ base: 3, md: 4 }}
            >
              {whoCandidateSection.title}
            </Heading>
            <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} color="rgba(2,6,23,0.75)" lineHeight="1.7">
              {whoCandidateSection.content}
            </Text>
          </Container>
        </Box>
      ) : null}

      {/* FAQs */}
      <Box as={motion.section} bg={theme.muted} {...fadeUp}>
        <Container maxW="3xl" py={{ base: 10, sm: 12, md: 16 }} px={{ base: 4, sm: 6, md: 8 }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="bold" 
            color={theme.foreground} 
            textAlign="center" 
            mb={{ base: 6, md: 8 }}
          >
            Frequently Asked Questions
          </Heading>
          <Accordion allowToggle>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                bg={card}
                borderRadius={{ base: "md", md: "lg" }}
                border="1px solid"
                borderColor={border}
                mb={{ base: 3, md: 4 }}
              >
                <AccordionButton py={{ base: 2.5, md: 3 }} px={{ base: 3, sm: 4 }}>
                  <Box flex="1" textAlign="left" pr={2}>
                    <Text 
                      fontSize={{ base: "sm", sm: "md", md: "lg" }} 
                      fontWeight="bold" 
                      color={theme.foreground}
                      lineHeight="1.4"
                    >
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon color={accent} boxSize={{ base: 4, md: 5 }} />
                </AccordionButton>
                <AccordionPanel pb={{ base: 3, md: 4 }} pt={0} px={{ base: 3, sm: 4 }}>
                  <Text fontSize={{ base: "sm", sm: "md" }} color="rgba(2,6,23,0.75)" lineHeight="1.6">
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
        <Container maxW="5xl" py={{ base: 10, sm: 12, md: 16 }} px={{ base: 4, sm: 6, md: 8 }} textAlign="center">
          <Heading 
            as="h2" 
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
            fontWeight="bold" 
            mb={{ base: 2, md: 3 }}
          >
            {ctaSection.title}
          </Heading>
          <Text 
            fontSize={{ base: "sm", sm: "md", md: "lg" }} 
            maxW="2xl" 
            mx="auto" 
            mb={{ base: 5, md: 6 }} 
            opacity={0.95}
            lineHeight="1.7"
          >
            {ctaSection.description}
          </Text>
          <HStack spacing={{ base: 2, sm: 3 }} justify="center" flexWrap="wrap" gap={{ base: 2, sm: 3 }}>
            <Button
              as="a"
              href="/appointment"
              size={{ base: "md", md: "lg" }}
              bg={card}
              color={theme.foreground}
              _hover={{ opacity: 0.9 }}
              boxShadow="sm"
              textColor={theme.primaryForeground}
              border="1px solid"
              borderColor={border}
              fontSize={{ base: "sm", md: "md" }}
              px={{ base: 4, md: 6 }}
            >
              Book Online Now
            </Button>
            <Button
              as="a"
              href={`tel:${ctaSection.phone}`}
              size={{ base: "md", md: "lg" }}
              variant="outline"
              borderColor={theme.primaryForeground}
              color={theme.primaryForeground}
              _hover={{ bg: "whiteAlpha.200" }}
              fontSize={{ base: "sm", md: "md" }}
              px={{ base: 4, md: 6 }}
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
