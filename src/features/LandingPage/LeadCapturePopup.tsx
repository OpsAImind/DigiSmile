"use client";

import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Box,
  useDisclosure
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import LeadCaptureForm from "./LeadCaptureForm";
import { motion, AnimatePresence } from "framer-motion";

const LeadCapturePopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    if (typeof window !== "undefined") {
      const popupShown = sessionStorage.getItem("leadPopupShown");
      if (popupShown === "true") {
        setHasShown(true);
        return;
      }

      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        onOpen();
        setHasShown(true);
        sessionStorage.setItem("leadPopupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [onOpen]);

  const handleSuccess = () => {
    // Close popup after successful submission
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          size="xl"
          closeOnOverlayClick={true}
          closeOnEsc={true}
        >
          <ModalOverlay
            bg="blackAlpha.700"
            backdropFilter="blur(4px)"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <ModalContent
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            borderRadius="lg"
            overflow="hidden"
            mx={4}
          >
            <Box position="relative">
              <IconButton
                aria-label="Close"
                icon={<CloseIcon />}
                position="absolute"
                top={4}
                right={4}
                zIndex={10}
                bg="white"
                borderRadius="full"
                size="sm"
                onClick={onClose}
                _hover={{ bg: "gray.100" }}
              />
              <ModalBody p={0}>
                <LeadCaptureForm variant="popup" onSuccess={handleSuccess} />
              </ModalBody>
            </Box>
          </ModalContent>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default LeadCapturePopup;
