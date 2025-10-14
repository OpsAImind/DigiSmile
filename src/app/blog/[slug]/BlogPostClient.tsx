"use client";

import React from "react";
import { Box, Flex, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { getBlogPostBySlug, blogPosts } from "@/utils/blogData";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/SEO/JsonLd";

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const post = getBlogPostBySlug(slug);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post?.category)
    .slice(0, 2);

  if (!post) {
    return (
      <Box position="relative">
        <Navbar />
        <Box mt="80px" px={8} py={16} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Blog Post Not Found
          </Text>
          <Button onClick={() => router.push("/blog")} variant="appointment">
            Back to Blog
          </Button>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`https://www.smilexpertsdental.com/blog/${post.slug}`}
        datePublished={new Date(post.date).toISOString()}
        authorName={post.author}
        image={post.image}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.smilexpertsdental.com/" },
          { name: "Blog", url: "https://www.smilexpertsdental.com/blog/" },
          {
            name: post.title,
            url: `https://www.smilexpertsdental.com/blog/${post.slug}`
          }
        ]}
      />
      <Box position="relative">
        <Navbar />

        {/* Hero Section - Modern Design */}
        <Box 
          className="home-section"
          pt="120px"
          position="relative" 
          minHeight="60vh"
          background="linear-gradient(135deg, #963f36 0%, #b85450 100%)"
          display="flex"
          alignItems="center"
        >
          <Flex
            width="100%"
            maxW="1200px"
            mx="auto"
            px={8}
            alignItems="center"
            gap={12}
            flexDirection={isLaptop ? "column" : "row"}
          >
            <Box flex={1} color="white" textAlign={isLaptop ? "center" : "left"}>
              <Box
                bg="whiteAlpha.200"
                px={4}
                py={2}
                borderRadius="full"
                display="inline-block"
                mb={4}
              >
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {post.category}
                </Text>
              </Box>
              <Text
                as="h1"
                className="heading"
                mb={6}
                fontWeight="bold"
              >
                {post.title}
              </Text>
              <Flex
                gap={4}
                fontSize="lg"
                opacity={0.9}
                justifyContent={isLaptop ? "center" : "flex-start"}
                mb={6}
                flexWrap="wrap"
              >
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
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <Flex gap={2} flexWrap="wrap" justifyContent={isLaptop ? "center" : "flex-start"}>
                  {post.tags.map((tag, index) => (
                    <Box
                      key={index}
                      bg="whiteAlpha.300"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      {tag}
                    </Box>
                  ))}
                </Flex>
              )}
            </Box>
            
            {!isMobile && (
              <Box flex={1} position="relative">
                <Box
                  position="relative"
                  borderRadius="20px"
                  overflow="hidden"
                  boxShadow="2xl"
                  transform="rotate(-3deg)"
                  _hover={{ transform: "rotate(0deg)" }}
                  transition="all 0.5s ease"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    style={{ 
                      width: "100%", 
                      height: "350px", 
                      objectFit: "cover"
                    }}
                    width={600}
                    height={350}
                  />
                </Box>
              </Box>
            )}
          </Flex>
        </Box>

        {/* Article Content */}
        <Box className="home-section" background="#F7F7F7">
          <Box maxW="900px" mx="auto" px={8}>
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="0 10px 30px rgba(150, 63, 54, 0.1)"
              border="1px solid"
              borderColor="gray.100"
            >
              <Box
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
                sx={{
                  // Headings
                  "& h1": {
                    fontSize: isMobile ? "2xl" : "3xl",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "brand.100",
                    mt: 8,
                    mb: 4
                  },
                  "& h2": {
                    fontSize: isMobile ? "xl" : "2xl",
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: "brand.100",
                    mt: 8,
                    mb: 3
                  },
                  "& h3": {
                    fontSize: isMobile ? "lg" : "xl",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "brand.100",
                    mt: 6,
                    mb: 2
                  },
                  // Paragraphs
                  "& p": {
                    fontSize: "lg",
                    color: "gray.700",
                    lineHeight: 1.8,
                    mb: 5
                  },
                  // Lists
                  "& ul": {
                    listStyleType: "disc",
                    pl: 6,
                    mb: 5
                  },
                  "& ol": {
                    listStyleType: "decimal",
                    pl: 6,
                    mb: 5
                  },
                  "& li": {
                    fontSize: "lg",
                    color: "gray.700",
                    lineHeight: 1.8,
                    mb: 2
                  },
                  "& li::marker": {
                    color: "brand.100",
                    fontWeight: 700
                  },
                  // Inline elements
                  "& a": {
                    color: "brand.100",
                    textDecoration: "underline",
                    _hover: { opacity: 0.9 }
                  },
                  "& strong": {
                    color: "brand.100",
                    fontWeight: 700
                  },
                  "& em": {
                    fontStyle: "italic"
                  },
                  // Media
                  "& img": {
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "md",
                    my: 4
                  },
                  // Blockquotes
                  "& blockquote": {
                    borderLeft: "4px solid",
                    borderColor: "brand.100",
                    bg: "brand.200",
                    color: "gray.800",
                    p: 4,
                    my: 6,
                    borderRadius: "md"
                  },
                  // Tables (basic)
                  "& table": {
                    width: "100%",
                    borderCollapse: "collapse",
                    my: 6
                  },
                  "& th, & td": {
                    border: "1px solid",
                    borderColor: "gray.200",
                    p: 3,
                    textAlign: "left"
                  },
                  // Spacing normalizers
                  "& > *:first-child": { mt: 0 },
                  "& > *:last-child": { mb: 0 }
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box 
          className="home-section"
          background="linear-gradient(135deg, #963f36 0%, #b85450 100%)"
          color="white"
        >
          <Flex
            maxW="1000px"
            mx="auto"
            px={8}
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap={6}
          >
            <Text
              as="h2"
              className="heading"
              mb={4}
            >
              Ready to Improve Your Smile?
            </Text>
            <Text fontSize="xl" maxW="700px" opacity={0.9} mb={4}>
              Schedule an appointment with Smile Experts Dental in Washington, D.C. today.
            </Text>
            <Flex gap={6} flexWrap="wrap" justifyContent="center">
              <Button
                variant="appointment"
                size="lg"
                bg="white"
                color="brand.100"
                _hover={{ 
                  transform: "translateY(-3px)",
                  boxShadow: "xl"
                }}
                transition="all 0.3s ease"
                onClick={() => {
                  const userId = localStorage.getItem("userId");
                  if (!userId) {
                    router.push("/appointment?clinic=dc");
                  } else {
                    router.push(
                      `/profile/${userId}/quick-appointment?tabId=2&clinic=dc`
                    );
                  }
                }}
              >
                Book Appointment
              </Button>
              <Button
                as="a"
                href="tel:(202) 545-6336"
                size="lg"
                bg="transparent"
                color="white"
                border="2px solid white"
                _hover={{ 
                  bg: "whiteAlpha.200",
                  transform: "translateY(-3px)"
                }}
                transition="all 0.3s ease"
              >
                Call (202) 545-6336
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Box className="home-section" background="#F7F7F7">
            <Box maxW="1200px" mx="auto" px={8}>
              <Text
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="brand.100"
                mb={8}
                textAlign="center"
              >
                Related Articles
              </Text>
              <Flex gap={8} flexDirection={isLaptop ? "column" : "row"}>
                {relatedPosts.map((relatedPost) => (
                  <Box
                    key={relatedPost.slug}
                    flex={1}
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
                    onClick={() => router.push(`/blog/${relatedPost.slug}`)}
                  >
                    <Box position="relative" height="200px">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                        width={600}
                        height={200}
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
                        <Text fontSize="xs" fontWeight="bold" color="brand.100" textTransform="uppercase">
                          {relatedPost.category}
                        </Text>
                      </Box>
                      <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
                        {relatedPost.title}
                      </Text>
                      <Text fontSize="md" color="gray.600" mb={4}>
                        {relatedPost.excerpt}
                      </Text>
                      <Flex gap={2} fontSize="sm" color="gray.500">
                        <Text>{relatedPost.date}</Text>
                        {relatedPost.readTime && (
                          <>
                            <Text>•</Text>
                            <Text>{relatedPost.readTime}</Text>
                          </>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        )}

        {/* Back to Blog */}
        <Box className="home-section" background="white" textAlign="center">
          <Box maxW="600px" mx="auto" px={8}>
            <Button
              variant="link"
              color="brand.100"
              fontSize="lg"
              _hover={{ 
                textDecoration: "none", 
                transform: "translateX(-4px)" 
              }}
              transition="all 0.3s ease"
              onClick={() => router.push("/blog")}
            >
              ← Back to Blog
            </Button>
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
}
