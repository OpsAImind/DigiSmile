"use client";

import React from "react";
import DigiLayout from "@/components/Layout";
import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery
} from "@chakra-ui/react";
import Map from "@/components/common/Map";

const NewPatientsClient = () => {
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");

  return (
    <DigiLayout>
      <Box
        height={"60vh"}
        width={"100%"}
        className="locations-bg-image"
        position={"relative"}
      >
        <Text
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          color={"white.900"}
          fontWeight={900}
          className="heading"
        >
          NEW PATIENTS
        </Text>
      </Box>
      <Flex
        className="home-section location-section"
        flexDir={"column"}
        gap={10}
      >
        <Flex
          flexDir={"column"}
          className="responsive-services-section"
          justifyContent={"center"}
          width={"100%"}
        >
          <Text className="heading" textAlign={"center"}>
            Welcome to Smile Experts Dental
          </Text>
          <Text className="heading" textAlign={"center"} fontWeight={700} mt={2}>
            Your Hometown Dental Care!
          </Text>
          <Text mt={4} as={"h4"}>
            Thank you for visiting Smile Experts Dental. We welcome new patients and focus on making every first visit comfortable and reassuring. From routine dental exams to advanced treatments, our caring team supports your oral health at every stage. We proudly serve Burke and Washington, providing high-quality, affordable dentistry in a warm, modern environment designed around patient comfort and trust for families and individuals of all ages.
          </Text>
          <Text
            as={"h2"}
            fontWeight={700}
            color={"brand.100"}
            my={6}
            borderTop={"1px solid #d3d3d3"}
            py={4}
            textAlign={"center"}
          >
            Your First Visit
          </Text>
          <Text as={"h4"} textAlign={"center"} mt={3}>
            During your first visit, you will meet an experienced dental professional for a personalized interview and complete exam. We listen to concerns, review oral health goals, and explain care options suited to your needs. From preventive checkups to complex procedures, our team provides trusted dental services with compassion, transparency, and patient-focused support throughout every stage.
          </Text>
          <Text
            as={"h2"}
            fontWeight={700}
            color={"brand.100"}
            my={6}
            borderTop={"1px solid #d3d3d3"}
            py={4}
            textAlign={"center"}
          >
            Compassionate Dental Care at Fair Prices
          </Text>
          <Text as={"h4"} textAlign={"center"} mt={3}>
            At Smile Experts Dental, we believe quality dentistry should also be affordable. Our pricing stays below regional averages, making care accessible. From routine checkups and cleanings to advanced treatments, we focus on removing financial barriers while delivering dependable, patient-centered dental services for healthy, confident smiles.
          </Text>
          <Text
            as={"h2"}
            fontWeight={700}
            color={"brand.100"}
            my={6}
            borderTop={"1px solid #d3d3d3"}
            py={4}
            textAlign={"center"}
          >
            We Accept Most Dental Insurances
          </Text>
          <Text as={"h4"} textAlign={"center"} mt={3}>
            We proudly accept most major dental insurance plans, including Healthy Michigan Plans, helping make dental checkups and treatments more affordable for our patients. In many cases, treatment can begin the same day as your consultation for added convenience.
          </Text>
          <Text as={"h4"} mt={3} textAlign={"center"}>
            For more complex needs or patients with detailed medical histories, a follow-up appointment may be scheduled to ensure safe, thorough, and well-planned dental care.
          </Text>
          <Text
            as={"h2"}
            fontWeight={700}
            color={"brand.100"}
            my={6}
            borderTop={"1px solid #d3d3d3"}
            py={4}
            textAlign={"center"}
          >
            Flexible Appointment Scheduling
          </Text>
          <Text as={"h4"} textAlign={"center"} mt={3}>
            Life is busy—we get it! That&apos;s why we offer flexible appointment times and easy rescheduling. For many of our patients, <strong>dental treatment</strong> can begin during the same visit as their <strong>initial dental exam</strong>, helping you save time and avoid extra trips to the dentist. Complex care may require additional visits, which we&apos;ll clearly explain during your consultation.
          </Text>
          <Text
            as={"h2"}
            fontWeight={700}
            color={"brand.100"}
            my={6}
            borderTop={"1px solid #d3d3d3"}
            py={4}
            textAlign={"center"}
          >
            Special Offers for New Patients
          </Text>
          <Text as={"h4"} textAlign={"center"} mt={3}>
            To show our appreciation, we provide exclusive <strong>new patient specials</strong> and promotions. It&apos;s just one of the many ways we make quality <strong>dentistry services</strong> even more affordable.
          </Text>
          <Text
            as={"h2"}
            fontWeight={700}
            color={"brand.100"}
            my={6}
            borderTop={"1px solid #d3d3d3"}
            py={4}
            textAlign={"center"}
          >
            Preparing for Your First Dental Appointment
          </Text>
          <Text as={"h4"} mt={3}>
            To help us serve you better during your first dental checkup and exam, please bring:
          </Text>
          <Flex>
            <UnorderedList>
              <ListItem>Any x-rays from your previous dentist</ListItem>
              <ListItem>
                A list of your current medications
              </ListItem>
              <ListItem>
                Your dental insurance card and information
              </ListItem>
              <ListItem>
                A list of any dental concerns or questions you&apos;d like to discuss
              </ListItem>
            </UnorderedList>
          </Flex>
          <Text as={"h4"} mt={4}>
            Please note: Patients under 18 must be accompanied by a parent or guardian.
          </Text>
        </Flex>
        <Flex flexWrap={isLaptop ? "wrap" : "nowrap"} gap={8} px={8}>
          <Map
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.409163489179!2d-77.0414735!3d38.8995466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c2a1c9be4f%3A0x6e4e3b4cf4df9d76!2s1747%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20DC%2020006%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
          />
          <Map
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.189827641261!2d-77.2698365!3d38.7932255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a1b300c64f1%3A0xb83ff2c0bb7d5473!2s9570%20Burke%20Rd%20Unit%20A%2C%20Burke%2C%20VA%2022015%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
          />
        </Flex>
      </Flex>
    </DigiLayout>
  );
};

export default NewPatientsClient;
