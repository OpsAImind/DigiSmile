// components/common/TestimonialReview.tsx
import React from "react";
import Image from "next/image";
import { Box, Card, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface TestimonialProps {
  username: string;
  userImage: string; // external URL
  review: string;
  stars?: number; // default 5
}

const TestimonialReview: React.FC<TestimonialProps> = ({
  username,
  userImage,
  review,
  stars = 5
}) => {
  return (
    <Card
      className="max-w-md mx-auto mb-4 shadow-lg rounded-2xl p-4"
      sx={{
        height: "auto",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(150, 63, 54, 0.1)",
        border: "1px solid",
        borderColor: "gray.100",
        bg: "white"
      }}
    >
      <Flex align="center" gap={4}>
        {/* Use the small avatar without stretching */}
        <Box overflow="hidden" borderRadius="full" flexShrink={0}>
          <Image
            src={userImage}
            alt={username}
            width={64}
            height={64}
            style={{ width: 64, height: 64, objectFit: "cover", borderRadius: "9999px" }}
          />
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg" color="gray.800">
            {username}
          </Text>
          <HStack spacing={1} mt={1} aria-label={`${stars} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                as={FaStar}
                color={i < stars ? "yellow.400" : "gray.300"}
                boxSize={4}
              />
            ))}
          </HStack>
        </Box>
      </Flex>

      <Text mt={4} color="gray.700" lineHeight="tall">
        {review}
      </Text>
    </Card>
  );
};

export default TestimonialReview;
