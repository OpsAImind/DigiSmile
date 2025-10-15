"use client";

import React from "react";
import { Box, Flex, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { blogPosts, BlogPost } from "@/utils/blogData";

export default function BlogPageClient() {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box position="relative">
      
      {/* Hero Section - Modern Design */}
      <Box
        className="home-section"
      
        background="linear-gradient(135deg, #963f36 0%, #b85450 100%)"
        color="white"
        textAlign="center"
      >
      <Navbar />
        <Box maxW="1200px" alignContent={"center"} height={"50vh"} mx="auto" px={8}>
          <Text
            as="h1"
            className="heading"
            mb={4}
            fontWeight="bold"
          >
            Dental Health Blog
          </Text>
          <Text fontSize="xl" maxW="800px" mx="auto" opacity={0.9}>
    Stay informed with expert dental tips, oral care advice, and the latest insights from 
    <strong> Smile Experts Dental in Washington, D.C.</strong>. Our blog helps you understand treatments, 
    maintain a healthy smile, and make confident choices about your dental health.
  </Text>
        </Box>
      </Box>

      {/* Blog Posts Grid */}
      <Box className="home-section" background="#F7F7F7">
        <Box maxW="1200px" mx="auto" px={8}>
          <Flex
            gap={8}
            flexWrap="wrap"
            justifyContent="center"
          >
            {blogPosts.map((post: BlogPost) => (
              <Box
                key={post.slug}
                maxW={isLaptop ? "100%" : "calc(50% - 16px)"}
                bg="white"
                borderRadius="20px"
                overflow="hidden"
                boxShadow="0 10px 30px rgba(150, 63, 54, 0.1)"
                border="1px solid"
                borderColor="gray.100"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(150, 63, 54, 0.15)"
                }}
                onClick={() => router.push(`/blog/${post.slug}`)}
              >
                <Box position="relative" height="250px">
                  <Image
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                    width={100}
                    height={250}
                    objectFit="cover"
                  />
                </Box>
                <Box p={6}>
                  <Box
                    bg="brand.200"
                    px={3}
                    py={1}
                    borderRadius="full"
                    display="inline-block"
                    mb={3}
                  >
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      color="brand.100"
                      textTransform="uppercase"
                    >
                      {post.category}
                    </Text>
                  </Box>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.800"
                    mb={3}
                  >
                    {post.title}
                  </Text>
                  <Text fontSize="md" color="gray.600" mb={4}>
                    {post.excerpt}
                  </Text>
                  <Flex gap={3} fontSize="sm" color="gray.500" mb={4}>
                    <Text>{post.author}</Text>
                    <Text>•</Text>
                    <Text>{post.date}</Text>
                    {post.readTime && (
                      <>
                        <Text>•</Text>
                        <Text>{post.readTime}</Text>
                      </>
                    )}
                  </Flex>
                  <Button
                    variant="link"
                    color="brand.100"
                    fontWeight="bold"
                    _hover={{ textDecoration: "none", transform: "translateX(4px)" }}
                    transition="all 0.3s ease"
                  >
                    Read More →
                  </Button>
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
