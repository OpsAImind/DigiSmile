"use client";

import React from "react";
import { Box, Flex, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { blogPosts, BlogPost } from "@/utils/blogData";

export default function BlogPage() {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box position="relative">
      <Navbar />
      
      {/* Hero Section - Modern Design */}
      <Box
        className="home-section"
        mt="80px"
        background="linear-gradient(135deg, #963f36 0%, #b85450 100%)"
        color="white"
        textAlign="center"
      >
        <Box maxW="1200px" mx="auto" px={8}>
          <Text
            as="h1"
            className="heading"
            mb={6}
            fontWeight="bold"
          >
            Dental Health Blog
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"} maxW="800px" mx="auto" opacity={0.9}>
            Expert tips, advice, and insights on dental health, treatments, and maintaining a beautiful smile.
          </Text>
        </Box>
      </Box>

      {/* Blog Posts Grid */}
      <Box className="home-section" background="#F7F7F7">
        <Box maxW="1400px" mx="auto" px={8}>
          <Flex
            flexWrap="wrap"
            gap={8}
            justifyContent="center"
          >
            {blogPosts.map((post: BlogPost) => (
              <Box
                key={post.slug}
                bg="white"
                borderRadius="20px"
                boxShadow="0 10px 30px rgba(150, 63, 54, 0.1)"
                overflow="hidden"
                maxW="400px"
                flex="1"
                minW="320px"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{ 
                  transform: "translateY(-12px)",
                  boxShadow: "0 20px 40px rgba(150, 63, 54, 0.15)"
                }}
                onClick={() => router.push(`/blog/${post.slug}`)}
                border="1px solid"
                borderColor="gray.100"
              >
                <Box position="relative" height="250px" overflow="hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    position="absolute"
                    top={4}
                    left={4}
                    bg="brand.100"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    {post.category}
                  </Box>
                </Box>
                <Box p={6}>
                  <Text
                    as="h3"
                    fontSize="xl"
                    fontWeight="bold"
                    mb={3}
                    color="brand.100"
                    lineHeight="short"
                  >
                    {post.title}
                  </Text>
                  <Text color="gray.600" mb={4} noOfLines={3} lineHeight="tall">
                    {post.excerpt}
                  </Text>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="sm" color="gray.500">
                      {post.date}
                    </Text>
                    <Button
                      variant="link"
                      color="brand.100"
                      fontWeight="bold"
                      _hover={{ textDecoration: "none", transform: "translateX(4px)" }}
                      transition="all 0.3s ease"
                    >
                      Read More →
                    </Button>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
