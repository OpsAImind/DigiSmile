"use client";

import DigiLayout from "@/components/Layout";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { FaEnvelopeOpenText, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

const BRAND = "#963f36";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
// Matches the Navbar's rendered height (70px logo + vertical padding)
const NAVBAR_HEIGHT = "86px";

const NEXT_STEPS = [
  {
    icon: FaEnvelopeOpenText,
    title: "Check your inbox",
    text: "We've sent a confirmation email with your request details."
  },
  {
    icon: FaPhoneAlt,
    title: "We'll give you a call",
    text: "Our team will reach out within a few hours to confirm a time."
  },
  {
    icon: FaCalendarCheck,
    title: "See you soon",
    text: "Arrive a few minutes early so we can get you settled in."
  }
];

// Pure CSS animations: they start on first paint from the server-rendered
// HTML instead of waiting for JS hydration.
const popIn = keyframes`
  0% { transform: scale(0) rotate(-45deg); }
  70% { transform: scale(1.08) rotate(0deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const drawCheck = keyframes`
  to { stroke-dashoffset: 0; }
`;

const ripple = keyframes`
  0% { transform: scale(0.85); opacity: 0.35; }
  100% { transform: scale(1.6); opacity: 0; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glowIn = keyframes`
  from { opacity: 0; transform: translateX(-50%) scale(0.6); }
  to { opacity: 1; transform: translateX(-50%) scale(1); }
`;

const noMotion = {
  "@media (prefers-reduced-motion: reduce)": { animation: "none" }
};

const reveal = (delayMs: number) => ({
  animation: `${fadeUp} 0.5s ${EASE} ${delayMs}ms both`,
  ...noMotion
});

const AnimatedCheck = () => (
  <Box position="relative" w="120px" h="120px" mb={2}>
    {[0, 1].map((i) => (
      <Box
        key={i}
        position="absolute"
        inset={0}
        borderRadius="full"
        border={`2px solid ${BRAND}`}
        opacity={0}
        sx={{
          animation: `${ripple} 2.4s ease-out ${600 + i * 1200}ms infinite`,
          "@media (prefers-reduced-motion: reduce)": { display: "none" }
        }}
      />
    ))}
    <Box
      position="absolute"
      inset={0}
      borderRadius="full"
      bg={BRAND}
      boxShadow="0 18px 45px rgba(150,63,54,0.35)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ animation: `${popIn} 0.45s ${EASE} both`, ...noMotion }}
    >
      <svg width="56" height="56" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <Box
          as="path"
          d="M14 27 l8 8 l16 -18"
          stroke="#faf7f5"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          sx={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: `${drawCheck} 0.3s ease-out 0.3s forwards`,
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              strokeDashoffset: 0
            }
          }}
        />
      </svg>
    </Box>
  </Box>
);

const ThankYou = () => {
  return (
    <DigiLayout>
      {/* Solid band behind the fixed, transparent navbar so its white links stay readable */}
      <Box h={NAVBAR_HEIGHT} bg={BRAND} />
      <Flex
        minH={`calc(75vh - ${NAVBAR_HEIGHT})`}
        alignItems="center"
        justifyContent="center"
        px={4}
        py={{ base: 12, md: 16 }}
        bg="brand.200"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-25%"
          left="50%"
          w={{ base: "480px", md: "760px" }}
          h={{ base: "480px", md: "760px" }}
          borderRadius="full"
          bg="radial-gradient(circle, rgba(150,63,54,0.14) 0%, rgba(150,63,54,0) 70%)"
          pointerEvents="none"
          transform="translateX(-50%)"
          sx={{ animation: `${glowIn} 0.9s ${EASE} both`, ...noMotion }}
        />

        <Flex
          flexDir="column"
          alignItems="center"
          textAlign="center"
          gap={4}
          maxW="640px"
          w="100%"
          position="relative"
        >
          <AnimatedCheck />

          <Box sx={reveal(450)}>
            <Text
              fontSize="xs"
              fontWeight={800}
              letterSpacing="0.16em"
              textTransform="uppercase"
              color={BRAND}
              mb={2}
            >
              Request received
            </Text>
            <Text
              as="h1"
              fontWeight={900}
              fontSize={{ base: "2xl", md: "4xl" }}
              color="brand.100"
              lineHeight={1.15}
              letterSpacing="-0.02em"
            >
              Thank you! You&apos;re all set.
            </Text>
          </Box>

          <Box sx={reveal(550)}>
            <Text fontSize={{ base: "sm", md: "md" }} color="brand.100" opacity={0.7} lineHeight={1.7} maxW="480px">
              Your appointment request is in. Our team will contact you shortly to confirm the details.
            </Text>
          </Box>

          <Flex w="100%" mt={4} gap={3} flexDir={{ base: "column", md: "row" }}>
            {NEXT_STEPS.map((step, i) => (
              <Box key={step.title} flex={1} sx={reveal(650 + i * 80)}>
                <Box
                  h="100%"
                  bg="white"
                  borderRadius="14px"
                  p={5}
                  textAlign="left"
                  boxShadow="0 6px 24px rgba(0,0,0,0.06)"
                  transition="transform 0.25s ease, box-shadow 0.25s ease"
                  _hover={{ transform: "translateY(-4px)", boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                >
                  <Flex alignItems="center" gap={3} mb={2}>
                    <Flex
                      w={9}
                      h={9}
                      borderRadius="full"
                      bg="rgba(150,63,54,0.1)"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Icon as={step.icon} color={BRAND} boxSize={4} />
                    </Flex>
                    <Text fontSize="10px" fontWeight={800} color={BRAND} opacity={0.6} letterSpacing="0.1em">
                      STEP {i + 1}
                    </Text>
                  </Flex>
                  <Text fontWeight={800} fontSize="sm" color="brand.100" mb={1}>
                    {step.title}
                  </Text>
                  <Text fontSize="xs" color="brand.100" opacity={0.65} lineHeight={1.6}>
                    {step.text}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>

          <Flex gap={3} mt={4} flexWrap="wrap" justifyContent="center" sx={reveal(900)}>
            <Button
              as="a"
              href="tel:+12025456336"
              px={6}
              h="48px"
              borderRadius="full"
              fontWeight={700}
              transition="all 0.25s"
              sx={{
                backgroundColor: `${BRAND} !important`,
                color: "#faf7f5 !important",
                textDecoration: "none",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 26px rgba(150,63,54,0.35)",
                  textDecoration: "none"
                }
              }}
            >
              📞 Call (202) 545-6336
            </Button>
            <Button
              as={Link}
              href="/"
              px={6}
              h="48px"
              borderRadius="full"
              fontWeight={700}
              variant="outline"
              borderColor={BRAND}
              color={BRAND}
              _hover={{ bg: "rgba(150,63,54,0.06)" }}
            >
              Back to Home
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </DigiLayout>
  );
};

export default ThankYou;
