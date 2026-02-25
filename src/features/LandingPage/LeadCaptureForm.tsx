"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, Text, FormControl, FormLabel, FormErrorMessage, Textarea } from "@chakra-ui/react";
import { emailValidation, requiredCharField, contactNumberValidation } from "@/validations";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import { SubmitLeadAction } from "@/app/actions/leadAction";
import { useSearchParams } from "next/navigation";
import FormField from "@/components/common/FormField";

const validationSchema = Yup.object({
  name: requiredCharField("Name"),
  email: emailValidation,
  phone: contactNumberValidation,
  message: Yup.string().trim().optional()
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

interface LeadCaptureFormProps {
  variant?: "hero" | "popup";
  onSuccess?: () => void;
}

const LeadCaptureForm = ({ variant = "hero", onSuccess }: LeadCaptureFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    // Extract UTM parameters from URL
    const utmParams = {
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_term: searchParams.get("utm_term") || "",
      utm_content: searchParams.get("utm_content") || "",
      page_url: typeof window !== "undefined" ? window.location.href : ""
    };

    const payload = {
      ...values,
      ...utmParams
    };

    const response = await SubmitLeadAction(payload);
    
    if (response.error && !response.success) {
      await dispatch(
        showToastWithTimeout({
          message: response.error || "Something went wrong. Please try again.",
          status: "error"
        })
      );
    } else {
      await dispatch(
        showToastWithTimeout({
          message: response.data?.message || "Thank you! We'll contact you soon.",
          status: "success"
        })
      );
      resetForm();
      if (onSuccess) {
        onSuccess();
      }
    }
    setSubmitting(false);
  };

  return (
    <Box
      bg={variant === "popup" ? "white" : "brand.200"}
      p={variant === "popup" ? 6 : { base: 6, md: 8 }}
      borderRadius="lg"
      boxShadow={variant === "popup" ? "xl" : "md"}
      width="100%"
      maxW={variant === "popup" ? "500px" : "600px"}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Text
              as="h2"
              fontSize={variant === "popup" ? "xl" : { base: "2xl", md: "3xl" }}
              fontWeight={900}
              color="brand.100"
              textAlign="center"
              mb={6}
            >
              {variant === "popup" 
                ? "Get Your Free Consultation!" 
                : "Request Your Emergency Appointment"}
            </Text>
            
            <Text
              as="h4"
              fontSize="md"
              color="brand.100"
              textAlign="center"
              mb={6}
              opacity={0.8}
            >
              {variant === "popup"
                ? "Fill out the form and we'll get back to you within 24 hours."
                : "Fill out the form below and our team will contact you shortly."}
            </Text>

            <Box mb={4}>
              <FormField
                label="Full Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                error={errors.name}
                touched={touched.name}
              />
            </Box>

            <Box mb={4}>
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                error={errors.email}
                touched={touched.email}
              />
            </Box>

            <Box mb={4}>
              <FormField
                label="Phone Number"
                name="phone"
                type="text"
                placeholder="(123) 456-7890"
                error={errors.phone}
                touched={touched.phone}
              />
            </Box>

            <Box mb={6}>
              <FormControl>
                <FormLabel color="brand.100" fontWeight={600}>
                  Message (Optional)
                </FormLabel>
                <Field name="message">
                  {({ field }: { field: any }) => (
                    <Textarea
                      {...field}
                      placeholder="Tell us about your dental needs"
                      bg="white"
                      borderColor="gray.300"
                      _focus={{ borderColor: "brand.100", boxShadow: "0 0 0 1px #963f36" }}
                      rows={3}
                      resize="vertical"
                    />
                  )}
                </Field>
                <ErrorMessage name="message" component={FormErrorMessage} />
              </FormControl>
            </Box>

            <Button
              type="submit"
              variant="brand"
              width="100%"
              size="lg"
              fontSize="lg"
              isLoading={isSubmitting}
              loadingText="Submitting..."
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              transition="all 0.3s"
            >
              {variant === "popup" ? "Get Free Consultation" : "Request Appointment Now"}
            </Button>

            <Text
              fontSize="xs"
              color="brand.100"
              textAlign="center"
              mt={4}
              opacity={0.7}
            >
              By submitting, you agree to be contacted by our team.
            </Text>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LeadCaptureForm;
