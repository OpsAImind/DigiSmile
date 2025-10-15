"use client";

import React, { ReactNode, useEffect } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { useDispatch } from "react-redux";
import themes from "./themes";
import { toggleHeader } from "@/redux/SharedSlice";
import CustomToastComponent from "@/components/common/Toast";
import { smoothScrollToSection } from "@/utils/smoothScroll";

export default function AppWrappers({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  const handleScroll = (e: any) => {
    if (e.target.scrollTop > 50) {
      dispatch(toggleHeader(true));
    } else {
      dispatch(toggleHeader(false));
    }
  };

  useEffect(() => {
    // Handle hash navigation on mount and hash change
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        setTimeout(() => {
          smoothScrollToSection(sectionId, 100);
        }, 100);
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <CacheProvider>
      <ChakraProvider theme={themes}>
        <CustomToastComponent />
        <Box onScroll={(e) => handleScroll(e)} className="container">
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
}
