"use client";

import {
  excellence,
  handshake,
  mahmoodImage,
  mindfull,
  teeth1,
  transparency
} from "@/assets/images";
import DigiLayout from "@/components/Layout";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa6";

const AboutUsClient = () => {
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const router = useRouter();

  return (
    <DigiLayout>
      <Box
        height={"60vh"}
        width={"100%"}
        className="locations-bg-image"
        position={"relative"}
      >
        <Flex
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          color={"white.900"}
          flexDir={"column"}
          alignItems={"center"}
          gap={4}
        >
          <Text fontWeight={600} className="heading" as="h2">
            About Us
          </Text>
          <Text fontWeight={900} className="heading" textAlign={"center"} as="h1">
            Your Trusted Partner In Oral Health
          </Text>
        </Flex>
      </Box>
      <Flex flexDir={"column"} color={"black.900"} bg={"brand.200"}>
        <Flex
          className="responsive-dental-section"
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          gap={"0 !important"}
        >
          <Text as={"h3"} mt={8} textAlign={"center"} color={"brand.100"}>
            Smile Experts Dental Clinic provides compassionate, patient-focused care through experienced professionals, modern technology, and clear communication. We prioritize comfort, trust, and lasting results, creating a welcoming environment where every visit supports confidence, wellness, and long-term oral health goals.
          </Text> 
          <Flex width={"100%"} mt={20} flexDir={isLaptop ? "column" : "row"}>
            <Flex
              width={"100%"}
              flexDir={"column"}
              borderRight={isLaptop ? "0" : "1px solid"}
              borderColor={"#d8bdba"}
            >
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={transparency} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Transparency
                  </Text>
                  <Text as={"h5"} color={"brand.100"} fontWeight={600}>
                    We keep you informed every step of the way.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    An educated patient is an empowered patient. Our dental professionals make sure you understand every recommendation, procedure, and cost before we begin. No surprises, no confusion, just honest, upfront communication from start to finish.
                  </Text>
                </Box>
              </Flex>
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={excellence} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Excellence
                  </Text>
                  <Text as={"h5"} color={"brand.100"} fontWeight={600}>
                    World-class dentistry, tailored to you.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    Our experienced dentists stay at the forefront of innovation, continually training and using cutting-edge technology to provide the most accurate diagnoses and comfortable treatments. At Experts Dental Clinic, quality is not a goal—it&apos;s a guarantee.
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Flex width={"100%"} flexDir={"column"}>
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={handshake} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Seamless Service
                  </Text>
                  <Text as={"h5"} color={"brand.100"} fontWeight={600}>
                    From booking to billing, easy, efficient, enjoyable.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    Say goodbye to stress and hello to simplicity. Book online, check in digitally, and receive a clear, itemized invoice without the guesswork. During your appointment, sit back and relax—enjoy Netflix or Hulu while we work on your smile.
                  </Text>
                </Box>
              </Flex>
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={mindfull} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Mindfulness
                  </Text>
                  <Text as={"h5"} color={"brand.100"} fontWeight={600}>
                    A calm mind creates a confident smile.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    Our clinic is more than a dental office, it&apos;s a sanctuary. Designed with soothing elements and your mental well-being in mind, our space encourages relaxation and comfort, ensuring that you feel safe and supported at every visit.
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} gap={10} color={"brand.100"}>
        <Box width={"100%"} bg={"brand.100"} color={"#fff"}>
          <Flex
            className="responsive-dental-section"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={mahmoodImage} height={400} width={400} alt=""></Image>
            <Flex flexDir={"column"} gap={8}>
              <Text className="heading">Our Founder&apos;s Story</Text>
              <Text as={"h4"}>
                Dr. Andleeb Mahmood, founder of Smile Experts Dental Clinic, is a highly accomplished and experienced dentist with over 15 years of clinical excellence. Known for her warm, patient-focused approach, she treats every individual like family, ensuring each visit is comfortable, transparent, and tailored to the patient&apos;s unique needs. Her mission has always been to provide exceptional dental care through compassion, precision, and trust—values that are deeply embedded in every aspect of her practice.
              </Text>
              <Text as={"h4"}>
                Under her leadership, Experts Dental Clinic has grown to include three thriving locations across the DMV area. Dr. Mahmood has built a team of skilled dental professionals who are carefully selected for their expertise, empathy, and dedication to ongoing education. Together, they offer a full range of services from preventive care and cleanings to dental implants and advanced cosmetic treatments, making Smile Experts a trusted destination for comprehensive, high-quality dentistry.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDir={"column"} gap={10} color={"brand.200"}>
        <Box width={"100%"} bg={"brand.200"} color={"brand.100"}>
          <Flex
            className="responsive-dental-section"
            flexDir={"column"}
            gap={"8 !important"}
          >
            <Text textAlign={"center"} width={"100%"} className="heading">
              Our guiding principles
            </Text>
            <Accordion allowToggle variant={"about-us"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        WE INNOVATE FOR THE BEST EXPERIENCE
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      We use advanced tools and gentle techniques to combine prevention and treatment, delivering comfortable care that patients enjoy returning for again.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        WE FOCUS ON RESULTS FIRST
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      The healthiest smiles come first, using researched whitening methods and personalized plans that consider habits, safety, and long-lasting natural results.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        How do we treat patients at our clinic?
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      We treat every patient with compassion, respect, and dignity, prioritizing comfort, ethical care, emergency needs, and overall well-being for all.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        Is patient information confidential, and how do you ensure professionalism?
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      Patient privacy is protected through strict confidentiality, responsible information handling, qualified professionals, ethical conduct, and compliance with all legal standards.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        How do we stay current with dental advancements?
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      Our dentists pursue continuous education, applying modern science with patient-focused care while promoting oral health awareness within the community locally.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDir={"column"} gap={10} color={"brand.100"}>
        <Box width={"100%"} bg={"brand.100"} color={"#fff"} py={6}>
          <Flex
            className="responsive-dental-section"
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={3}
          >
            <Text className="heading" textAlign={"center"}>
              Come Experience the Experts&apos; Difference
            </Text>
            <Text as={"h4"} textAlign={"center"} maxW={"800px"}>
              At Smile Experts Dental Clinic, your smile is our specialty. Whether you&apos;re coming in for a routine cleaning or a full smile makeover, you&apos;ll receive exceptional care from a team that truly listens.
            </Text>
            <Text as={"h3"} fontWeight={700} textAlign={"center"}>
              Ready to love your smile?
            </Text>
            <Button
              size="lg"
              bg={"white"}
              color={"brand.100"}
              _hover={{ bg: "gray.100", transform: "translateY(-2px)" }}
              onClick={() => router.push("/appointment")}
              px={8}
              py={6}
              fontSize={"lg"}
              fontWeight={700}
              minW={isLaptop ? "100%" : "300px"}
              maxW={isLaptop ? "100%" : "400px"}
              boxShadow={"lg"}
              transition={"all 0.3s ease"}
              sx={{
                backgroundColor: "white !important",
                "&:hover": {
                  backgroundColor: "#E0E5F2 !important"
                }
              }}
            >
              Book Your Appointment Today →
            </Button>
          </Flex>
        </Box>
      </Flex>
    </DigiLayout>
  );
};

export default AboutUsClient;
