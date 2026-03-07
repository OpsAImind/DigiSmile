"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Flex,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { emailValidation, requiredCharField, contactNumberValidation } from "@/validations";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import { SubmitLeadAction } from "@/app/actions/leadAction";
import { useSearchParams } from "next/navigation";
import FormField from "@/components/common/FormField";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaClock, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { sendBusinessNotificationEmail, sendThankYouEmail } from "@/utils/emailjs";

const MotionBox = motion(Box);

const validationSchema = Yup.object({
  name: requiredCharField("Name"),
  email: emailValidation,
  phone: contactNumberValidation,
  message: Yup.string().trim().optional(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

interface LeadCaptureFormProps {
  variant?: "hero" | "popup";
  onSuccess?: () => void;
}

// Shared input style overrides passed via inputStyles prop
const inputStyleBase = {
  background: "white",
  border: "1.5px solid #e2e8f0",
  borderRadius: "10px",
  height: "48px",
  fontSize: "14px",
  fontWeight: 500,
  color: "#2d3748",
  padding: "0 14px",
  transition: "border-color 0.2s, box-shadow 0.2s",
  outline: "none",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
};

const labelStyleBase = {
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  marginBottom: "6px",
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const LeadCaptureForm = ({ variant = "hero", onSuccess }: LeadCaptureFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const isPopup = variant === "popup";

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    console.log("🚀 [Form] Form submission started");
    console.log("🚀 [Form] Form values:", values);

    const utmParams = {
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_term: searchParams.get("utm_term") || "",
      utm_content: searchParams.get("utm_content") || "",
      page_url: typeof window !== "undefined" ? window.location.href : "",
    };

    console.log("🚀 [Form] UTM params:", utmParams);

    try {
      // First, log the lead on the server
      const serverResponse = await SubmitLeadAction({ ...values, ...utmParams });
      console.log("✅ [Form] Server response:", serverResponse);

      // Format date for email
      const submissionDate = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      });

      const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@smilexpertsdental.com";

      // Prepare template parameters for business notification email
      const businessEmailParams = {
        to_email: businessEmail,
        to_name: "Smile Experts Dental Team",
        from_name: values.name,
        from_email: values.email,
        phone: values.phone || "Not provided",
        message: values.message || "No message provided",
        submission_date: submissionDate,
        utm_source: utmParams.utm_source || "Direct",
        utm_medium: utmParams.utm_medium || "N/A",
        utm_campaign: utmParams.utm_campaign || "N/A",
        utm_term: utmParams.utm_term || "N/A",
        utm_content: utmParams.utm_content || "N/A",
        page_url: utmParams.page_url || "N/A"
      };

      // Prepare template parameters for thank you email
      const thankYouEmailParams = {
        to_email: values.email,
        to_name: values.name,
        from_name: "Dr. Andleeb Mahmood",
        from_email: businessEmail
      };

      console.log("📧 [Form] Sending emails via EmailJS...");

      // Send both emails in parallel
      const [businessResult, thankYouResult] = await Promise.allSettled([
        sendBusinessNotificationEmail(businessEmailParams),
        sendThankYouEmail(thankYouEmailParams)
      ]);

      // Log results
      if (businessResult.status === "fulfilled") {
        if (businessResult.value.success) {
          console.log("✅ [Form] Business email sent successfully");
        } else {
          console.error("❌ [Form] Business email failed:", businessResult.value.error);
        }
      } else {
        console.error("❌ [Form] Business email error:", businessResult.reason);
      }

      if (thankYouResult.status === "fulfilled") {
        if (thankYouResult.value.success) {
          console.log("✅ [Form] Thank you email sent successfully");
        } else {
          console.error("❌ [Form] Thank you email failed:", thankYouResult.value.error);
        }
      } else {
        console.error("❌ [Form] Thank you email error:", thankYouResult.reason);
      }

      // Show success message regardless of email status (for better UX)
      setSubmitted(true);
      await dispatch(
        showToastWithTimeout({
          message: serverResponse.data?.message || "Thank you! We'll contact you soon.",
          status: "success",
        })
      );
      resetForm();
      if (onSuccess) setTimeout(onSuccess, 1800);
    } catch (error: any) {
      console.error("❌ [Form] Form submission error:", error);
      await dispatch(
        showToastWithTimeout({
          message: "Something went wrong. Please try again or contact us directly.",
          status: "error",
        })
      );
    } finally {
      setSubmitting(false);
      console.log("🏁 [Form] Form submission completed");
    }
  };

  // ── Success State ──────────────────────────────────────────
  if (submitted) {
    return (
      <MotionBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        bg={isPopup ? "white" : "brand.200"}
        borderRadius={isPopup ? "0" : { base: "14px", md: "16px" }}
        p={isPopup ? { base: 6, md: 10 } : { base: 6, sm: 8, md: 10 }}
        textAlign="center"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        minH={{ base: "280px", md: "340px" }}
        gap={4}
        width="100%"
        maxW="100%"
      >
        <Box
          w={16}
          h={16}
          bg="green.50"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <Text fontSize="2xl">✅</Text>
        </Box>
        <Text fontWeight={900} fontSize="xl" color="brand.100">
          Request Received!
        </Text>
        <Text fontSize="sm" color="brand.100" opacity={0.65} maxW="280px" lineHeight={1.7}>
          Our team will reach out within a few hours to confirm your appointment.
        </Text>
        <Button
          as="a"
          href="tel:+12025456336"
          px={5}
          py={2}
          borderRadius="full"
          fontSize="sm"
          fontWeight={700}
          mt={2}
          cursor="pointer"
          transition="all 0.2s"
          sx={{
            backgroundColor: "#963f36 !important",
            color: "#faf7f5 !important",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "#963f36 !important",
              color: "#faf7f5 !important",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(150,63,54,0.3)",
              textDecoration: "none",
            },
            "&:active": {
              transform: "translateY(0)",
              backgroundColor: "#963f36 !important",
              color: "#faf7f5 !important",
            },
            "&:visited": {
              backgroundColor: "#963f36 !important",
              color: "#faf7f5 !important",
            }
          }}
        >
          📞 Or call us directly
        </Button>
      </MotionBox>
    );
  }

  // ── Form ──────────────────────────────────────────────────
  return (
    <Box
      bg={isPopup ? "white" : "brand.200"}
      borderRadius={isPopup ? "0" : { base: "14px", md: "16px" }}
      p={isPopup ? { base: 4, sm: 6, md: 8 } : { base: 4, sm: 6, md: 8 }}
      width="100%"
      overflow="hidden"
      position="relative"
      maxW="100%"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, values }) => {
          // Progress: count filled required fields
          const filled = [values.name, values.email, values.phone].filter(Boolean).length;
          const progress = Math.round((filled / 3) * 100);

          return (
            <Form>
              <MotionBox
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {/* Header */}
                <MotionBox variants={fadeUp} mb={{ base: 5, md: 6 }}>
                  <Text
                    fontWeight={900}
                    fontSize={isPopup ? "xl" : { base: "lg", sm: "xl", md: "2xl" }}
                    color="brand.100"
                    lineHeight={1.2}
                    letterSpacing="-0.02em"
                    mb={1.5}
                  >
                    {isPopup
                      ? "Get Your Free Consultation"
                      : "Request Your Emergency Appointment"}
                  </Text>
                  <Text fontSize={{ base: "11px", sm: "xs" }} color="brand.100" opacity={0.55} lineHeight={1.6}>
                    {isPopup
                      ? "We'll get back to you within 24 hours."
                      : "Our team will contact you shortly to confirm."}
                  </Text>
                </MotionBox>

                {/* Progress bar */}
                <MotionBox variants={fadeUp} mb={{ base: 5, md: 6 }}>
                  <Flex justifyContent="space-between" mb={1.5}>
                    <Text fontSize="10px" fontWeight={700} color="brand.100" opacity={0.5} letterSpacing="0.1em" textTransform="uppercase">
                      Form Progress
                    </Text>
                    <Text fontSize="10px" fontWeight={700} color="brand.100" opacity={0.5}>
                      {progress}%
                    </Text>
                  </Flex>
                  <Box h="3px" bg="blackAlpha.100" borderRadius="full" overflow="hidden">
                    <MotionBox
                      h="100%"
                      bg="brand.100"
                      borderRadius="full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </Box>
                </MotionBox>

                {/* Fields */}
                <MotionBox variants={fadeUp} mb={{ base: 3, md: 4 }}>
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    error={errors.name}
                    touched={touched.name}
                    labelStyles={{ ...labelStyleBase, color: "#963f36" }}
                    inputStyles={inputStyleBase}
                  />
                </MotionBox>

                <MotionBox variants={fadeUp} mb={{ base: 3, md: 4 }}>
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    error={errors.email}
                    touched={touched.email}
                    labelStyles={{ ...labelStyleBase, color: "#963f36" }}
                    inputStyles={inputStyleBase}
                  />
                </MotionBox>

                <MotionBox variants={fadeUp} mb={{ base: 3, md: 4 }}>
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="text"
                    placeholder="(123) 456-7890"
                    error={errors.phone}
                    touched={touched.phone}
                    labelStyles={{ ...labelStyleBase, color: "#963f36" }}
                    inputStyles={inputStyleBase}
                  />
                </MotionBox>

                {/* Message */}
                <MotionBox variants={fadeUp} mb={{ base: 5, md: 6 }}>
                  <FormControl>
                    <FormLabel
                      style={{ ...labelStyleBase, color: "#963f36" }}
                      htmlFor="message"
                    >
                      Tell us more{" "}
                      <Box as="span" fontWeight={400} opacity={0.5} textTransform="none" letterSpacing="normal">
                        (optional)
                      </Box>
                    </FormLabel>
                    <Field name="message">
                      {({ field }: { field: any }) => (
                        <Textarea
                          {...field}
                          id="message"
                          placeholder="Describe your dental concern or emergency…"
                          style={{
                            ...inputStyleBase,
                            height: "auto",
                            padding: "12px 14px",
                            resize: "vertical",
                          }}
                          rows={3}
                          _focus={{
                            borderColor: "brand.100",
                            boxShadow: "0 0 0 3px rgba(150, 63, 54, 0.12)",
                          }}
                        />
                      )}
                    </Field>
                    <ErrorMessage name="message" component={FormErrorMessage} />
                  </FormControl>
                </MotionBox>

                {/* Submit */}
                <MotionBox variants={fadeUp} mt={{ base: 3, md: 4 }} mb={2}>
                  <Button
                    type="submit"
                    width="100%"
                    size="lg"
                    isLoading={isSubmitting}
                    loadingText="Submitting…"
                    borderRadius="10px"
                    fontWeight={800}
                    fontSize={{ base: "xs", sm: "sm" }}
                    letterSpacing="0.03em"
                    h={{ base: "48px", md: "52px" }}
                    cursor="pointer"
                    position="relative"
                    zIndex={1}
                    transition="all 0.25s cubic-bezier(0.22,1,0.36,1)"
                    sx={{
                      backgroundColor: "#963f36 !important",
                      color: "#faf7f5 !important",
                      "&:hover": {
                        backgroundColor: "#963f36 !important",
                        color: "#faf7f5 !important",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 30px rgba(150,63,54,0.35)",
                      },
                      "&:active": {
                        transform: "translateY(0)",
                        backgroundColor: "#963f36 !important",
                        color: "#faf7f5 !important",
                      },
                      "&:disabled": {
                        backgroundColor: "#963f36 !important",
                        color: "#faf7f5 !important",
                        opacity: 0.7,
                      },
                      "&[data-loading]": {
                        backgroundColor: "#963f36 !important",
                        color: "#faf7f5 !important",
                      }
                    }}
                  >
                    {isPopup ? "Get Free Consultation →" : "Request Appointment Now →"}
                  </Button>
                </MotionBox>

                {/* Trust row */}
                <MotionBox variants={fadeUp} mt={{ base: 4, md: 5 }}>
                  <Flex
                    gap={{ base: 3, md: 4 }}
                    justifyContent="center"
                    flexWrap="wrap"
                  >
                    {[
                      { icon: FaShieldAlt, label: "100% Private" },
                      { icon: FaClock, label: "24hr Response" },
                      { icon: FaPhone, label: "No Spam Calls" },
                    ].map((t) => (
                      <HStack key={t.label} spacing={1.5}>
                        <Icon as={t.icon} color="brand.100" opacity={0.4} boxSize={3} />
                        <Text fontSize="10px" color="brand.100" opacity={0.45} fontWeight={600} letterSpacing="0.05em" whiteSpace="nowrap">
                          {t.label}
                        </Text>
                      </HStack>
                    ))}
                  </Flex>
                </MotionBox>
              </MotionBox>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default LeadCaptureForm;