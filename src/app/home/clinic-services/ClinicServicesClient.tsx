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
  Divider,
  Flex,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { clinicServices } from "@/utils";
import { useRouter } from "next/navigation";

type ClinicService = {
  heading: string;
  time: string;
  price: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
  title?: string;
  services?: string[];
  link?: string;
};

const ClinicServicesClient = () => {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <DigiLayout>
      <Box
        height={"60vh"}
        width={"100%"}
        position={"relative"}
        className="locations-bg-image"
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
          SERVICES
        </Text>
      </Box>
      <Flex
        className="responsive-dental-section"
        flexDir={"column"}
        gap={8}
        bg={"brand.200"}
      >
        <Text className="heading" textAlign={"center"} color={"brand.100"}>
          Dental Services
        </Text>
        <Accordion allowToggle variant={"services"}>
          {(clinicServices as ClinicService[]).map((service, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box
                  as="h3"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                  gap={4}
                >
                  {service.icon && service.icon}
                  {service.title ?? service.heading}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Flex
                  flexDir={isLaptop ? "column" : "row"}
                  gap={8}
                  alignItems={"flex-start"}
                >
                  <Box flex={1}>
                    <Text as={"h5"} mb={4}>
                      {service.description}
                    </Text>
                    <Divider my={4} />
                    {service.services && service.services.length > 0 && (
                      <>
                        <Text as={"h5"} fontWeight={600} mb={2}>
                          Services Include:
                        </Text>
                        <Box as="ul" pl={6}>
                          {service.services.map((item: string, idx: number) => (
                            <Text as="li" key={idx} mb={2}>
                              {item}
                            </Text>
                          ))}
                        </Box>
                      </>
                    )}
                  </Box>
                  {service.link && (
                    <Button
                      variant="appointment"
                      onClick={() => navigateToSection(service.link!)}
                      alignSelf={isLaptop ? "stretch" : "flex-start"}
                    >
                      Learn More
                    </Button>
                  )}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </DigiLayout>
  );
};

export default ClinicServicesClient;

