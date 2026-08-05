"use client";

import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import LeadCaptureForm from "./LeadCaptureForm";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaCheckCircle, FaUserMd } from "react-icons/fa";

const MotionBox = motion(Box);

const socialProofItems = [
  "Same-day appointments available",
  "Two convenient DMV locations",
  "15+ years of trusted care",
];

const recentBookings = [
  { name: "Sarah M.", time: "2 mins ago", treatment: "Check-up" },
  { name: "James T.", time: "18 mins ago", treatment: "Whitening" },
  { name: "Priya K.", time: "1 hr ago", treatment: "Root Canal" },
];

const LeadCapturePopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeBooking, setActiveBooking] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const popupShown = sessionStorage.getItem("leadPopupShown");
    if (popupShown === "true") return;

    const timer = setTimeout(() => {
      onOpen();
      sessionStorage.setItem("leadPopupShown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [onOpen]);

  // Cycle through recent bookings for social proof
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveBooking((prev) => (prev + 1) % recentBookings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleSuccess = () => {
    setTimeout(onClose, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          size="4xl"
          closeOnOverlayClick
          closeOnEsc
        >
          {/* Blurred overlay */}
          <ModalOverlay
            bg="blackAlpha.600"
            backdropFilter="blur(6px)"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <ModalContent
            as={motion.div}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            // @ts-ignore framer-motion transition
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            borderRadius="20px"
            overflow="hidden"
            mx={4}
            maxH="90vh"
            overflowY="auto"
            boxShadow="0 40px 120px rgba(0,0,0,0.3)"
          >
            {/* Close button */}
            <IconButton
              aria-label="Close"
              icon={<CloseIcon w={2.5} h={2.5} />}
              position="absolute"
              top={4}
              right={4}
              zIndex={20}
              bg="blackAlpha.200"
              color="white"
              borderRadius="full"
              size="sm"
              onClick={onClose}
              _hover={{ bg: "blackAlpha.400" }}
              backdropFilter="blur(4px)"
            />

            <ModalBody p={0}>
              <Flex flexDir={{ base: "column", md: "row" }} minH="520px">

                {/* ── LEFT PANEL: Brand / Social Proof ─────── */}
                <Box
                  bg="brand.100"
                  flex="0 0 42%"
                  p={{ base: 8, md: 10 }}
                  position="relative"
                  overflow="hidden"
                  display="flex"
                  flexDir="column"
                  justifyContent="space-between"
                >
                  {/* Decorative circles */}
                  <Box
                    position="absolute"
                    top="-60px"
                    right="-60px"
                    w="220px"
                    h="220px"
                    borderRadius="full"
                    bg="brand.200"
                    opacity={0.07}
                  />
                  <Box
                    position="absolute"
                    bottom="-40px"
                    left="-40px"
                    w="160px"
                    h="160px"
                    borderRadius="full"
                    bg="brand.200"
                    opacity={0.05}
                  />

                  {/* Top: heading */}
                  <Box position="relative" zIndex={1}>
                    {/* Rating pill */}
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      gap={1.5}
                      bg="brand.200"
                      px={3}
                      py={1}
                      borderRadius="full"
                      mb={5}
                    >
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Icon key={s} as={FaStar} color="yellow.400" boxSize={3} />
                      ))}
                      <Text fontSize="11px" fontWeight={700} color="brand.100" ml={1}>
                        4.5 / 5 · 204 reviews
                      </Text>
                    </Box>

                    <Text
                      fontWeight={900}
                      fontSize={{ base: "xl", md: "2xl" }}
                      color="brand.200"
                      lineHeight={1.15}
                      letterSpacing="-0.02em"
                      mb={3}
                    >
                      Free Consultation — No Commitment
                    </Text>
                    <Text fontSize="sm" color="brand.200" opacity={0.65} lineHeight={1.7} mb={8}>
                      Join hundreds of DMV patients who trust Dr. Mahmood for their dental care.
                    </Text>

                    {/* Checklist */}
                    <VStack align="flex-start" spacing={3} mb={8}>
                      {socialProofItems.map((item) => (
                        <HStack key={item} spacing={3}>
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
                          <Text fontSize="sm" color="brand.200" fontWeight={500}>
                            {item}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>

                    {/* Doctor badge */}
                    <Flex
                      alignItems="center"
                      gap={3}
                      bg="brand.200"
                      borderRadius="12px"
                      p={4}
                    >
                      <Box
                        w={10}
                        h={10}
                        bg="brand.100"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                      >
                        <Icon as={FaUserMd} color="brand.200" boxSize={5} />
                      </Box>
                      <Box>
                        <Text fontWeight={800} fontSize="sm" color="brand.100">
                          Dr. Andleeb Mahmood
                        </Text>
                        <Text fontSize="xs" color="brand.100" opacity={0.55}>
                          15+ yrs · DMV&apos;s trusted dentist
                        </Text>
                      </Box>
                    </Flex>
                  </Box>

                  {/* Bottom: live activity ticker */}
                  <Box position="relative" zIndex={1} mt={6}>
                    <Text
                      fontSize="10px"
                      fontWeight={700}
                      color="brand.200"
                      opacity={0.4}
                      letterSpacing="0.12em"
                      textTransform="uppercase"
                      mb={2}
                    >
                      Recent Bookings
                    </Text>
                    <AnimatePresence mode="wait">
                      <MotionBox
                        key={activeBooking}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                      >
                        <Flex
                          alignItems="center"
                          gap={3}
                          bg="blackAlpha.200"
                          borderRadius="10px"
                          p={3}
                        >
                          <Box w={2} h={2} bg="green.400" borderRadius="full" flexShrink={0} />
                          <Text fontSize="xs" color="brand.200" fontWeight={600}>
                            {recentBookings[activeBooking].name}
                          </Text>
                          <Text fontSize="xs" color="brand.200" opacity={0.5}>
                            booked &nbsp;{recentBookings[activeBooking].treatment}
                          </Text>
                          <Text fontSize="10px" color="brand.200" opacity={0.35} ml="auto">
                            {recentBookings[activeBooking].time}
                          </Text>
                        </Flex>
                      </MotionBox>
                    </AnimatePresence>
                  </Box>
                </Box>

                {/* ── RIGHT PANEL: Form ─────────────────────── */}
                <Box
                  flex={1}
                  bg="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <LeadCaptureForm variant="popup" onSuccess={handleSuccess} />
                </Box>

              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default LeadCapturePopup;