"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { digismileLogoImage, logo } from "@/assets/images";
import { useRouter } from "next/navigation";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";
import useAuthToken from "@/hooks/useAuthToken";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { HEADER_HEIGHT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getHeaderStatus, toggleHeader } from "@/redux/SharedSlice";
import Link from "next/link";
import { FaTooth, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const { data, isError } = useGetUserDetailsQuery();
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const [scrolled, setScrolled] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  const headerStatus = useSelector(getHeaderStatus);

  const { clearAuthToken } = useAuthToken();

  const navigateToSection = (url: string) => {
    router.push(`/${url}`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
    }
  }, []);

  const handleProfileVisit = () => {
    if (data?.user_type === "staff") {
      navigateToSection(`profile/${userId}/add-medical-records?tabId=6`);
    } else {
      navigateToSection(`profile/${userId}/profile?tabId=0`);
    }
  };

  const handleChangePassword = () => {
    navigateToSection(`profile/${userId}/change-password?tabId=5`);
  };

  const handleLogout = () => {
    clearAuthToken();
    location.reload();
  };

  useEffect(() => {
    return () => {
      dispatch(toggleHeader(false));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.6; // 60vh
      setScrolled(scrollY > triggerPoint);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <Box
      className={`header-container ${isMobile ? "mobile-header" : "desktop-header"} ${headerStatus === true ? "sticky-header" : ""}`}
      position={"fixed"}
      top={0}
      zIndex={4}
      width={"100%"}
      bg={scrolled ? "#963f36" : "transparent"}
      transition="background-color 0.4s ease"
      borderBottom={isMobile ? "1px white solid" : "unset"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        px={8}
        py={2}
      >
        <Image
          id="header-sticky-image"
          onClick={() => navigateToSection("/")}
          src={headerStatus === true ? logo : digismileLogoImage}
          width={110}
          height={70}
          alt="digismile"
          style={{ cursor: "pointer" }}
        />

        {!isMobile ? (
          // Desktop view
          <Flex alignItems={"center"} gap={8}>
            <Button
              variant={"header"}
              onClick={() => navigateToSection("about-us")}
            >
              ABOUT
            </Button>
            <Menu variant={"header"}>
              <Box
                position="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Flex align="center" cursor="pointer" gap={1}>
                  <Button
                    variant="header"
                    rightIcon={<FaChevronDown />}
                    _hover={{ color: "brand.100" }}
                  >
                    SERVICES
                  </Button>
                </Flex>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        position: "absolute",
                        top: "50px",
                        left: 0,
                        zIndex: 100,
                        width: "600px"
                      }}
                    >
                      <Box
                        bg="white"
                        p={6}
                        borderRadius="xl"
                        boxShadow="xl"
                        backdropFilter="blur(10px)"
                        border="1px solid rgba(0,0,0,0.05)"
                      >
                        <Flex wrap="wrap" gap={4}>
                          {[
                            {
                              label: "All Services",
                              path: "/clinic-services"
                            },
                            {
                              label: "Root Canal",
                              path: "/root-canal-washington-dc/"
                            },
                            {
                              label: "General Dentistry",
                              path: "/general-dentistry-washington-dc/"
                            },
                            {
                              label: "Comprehensive Care",
                              path: "/comprehensive-dental-care-washington-dc/"
                            },
                            {
                              label: "Cosmetic Dentistry",
                              path: "/cosmetic-dentistry-washington-dc/"
                            },
                            {
                              label: "Dental Veneers",
                              path: "/dental-veneers-washington-dc/"
                            },
                            {
                              label: "Teeth Whitening",
                              path: "/teeth-whitening-washington-dc/"
                            },
                            {
                              label: "Affordable Dentures",
                              path: "/affordable-dentures-washington-dc/"
                            },
                            {
                              label: "Tooth-Colored Fillings",
                              path: "/tooth-colored-fillings-washington-dc/"
                            },
                            {
                              label: "Dental Fillings",
                              path: "/dental-fillings-washington-dc/"
                            }
                          ].map((service, index) => (
                            <Box
                              key={index}
                              width="calc(50% - 8px)"
                              color="brand.100"
                              cursor="pointer"
                              _hover={{
                                transform: "translateX(4px)"
                              }}
                              alignItems={"left"}
                              transition="all 0.2s"
                              onClick={() => router.push(service.path)}
                            >
                              <Flex align="left" gap={2}>
                                <Icon as={FaTooth} color="#963f36" />
                                <Text>{service.label}</Text>
                              </Flex>
                            </Box>
                          ))}
                        </Flex>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Menu>
            <Button variant={"header"}>
              <Link href={"/#home-location"}>LOCATIONS</Link>
            </Button>
            <Button variant={"header"}>
              <Link href={"/#footer-section"}>CONTACT US</Link>
            </Button>
            <Button
              variant={"header"}
              onClick={() => navigateToSection("privacy-policy")}
            >
              PRIVACY POLICY
            </Button>
            <Button
              variant={"header"}
              onClick={() => navigateToSection("new-patients")}
            >
              NEW PATIENTS
            </Button>
            <Button
              variant={"header"}
              onClick={() => navigateToSection("blog")}
            >
              BLOG
            </Button>
            {isError && (
              <>
                <Button
                  variant={"header"}
                  className="font-bold capitalize text-[1rem]"
                  onClick={() => router.push(`/auth/signup`)}
                >
                  SIGNUP
                </Button>
                <Button
                  variant={"header"}
                  onClick={() => router.push(`/auth/login`)}
                >
                  LOGIN
                </Button>
              </>
            )}
            <Box>
              {data?.user_type && (
                <>
                  {data?.user_type !== "staff" ? (
                    <Button
                      variant="appointment"
                      onClick={() =>
                        navigateToSection(
                          `profile/${userId}/quick-appointment?tabId=2`
                        )
                      }
                    >
                      Request Appointment
                    </Button>
                  ) : (
                    <Button
                      variant="appointment"
                      // sx={{
                      //   backgroundColor: "white",
                      //   color: "#1E285F",
                      //   padding: "8px 16px",
                      //   display: isMobile ? "none" : "block"
                      // }}
                      onClick={() =>
                        navigateToSection(
                          `profile/${userId}/add-medical-records?tabId=6`
                        )
                      }
                    >
                      Add Medical Record
                    </Button>
                  )}
                </>
              )}
            </Box>
            {data && (
              <Menu variant={"header"}>
                <MenuButton>{data.name.slice(0, 2).toUpperCase()}</MenuButton>
                <MenuList>
                  <Flex flexDirection="column" p="10px">
                    <MenuItem onClick={handleProfileVisit}>
                      <Text as={"h6"}>Visit Profile</Text>
                    </MenuItem>
                    {data?.user_type && (
                      <>
                        {data?.user_type === "staff" ? (
                          <MenuItem
                            onClick={() =>
                              navigateToSection(
                                `profile/${userId}/add-medical-records?tabId=6`
                              )
                            }
                          >
                            <Text as={"h6"}>Add Medical Record</Text>
                          </MenuItem>
                        ) : (
                          <MenuItem
                            onClick={() =>
                              navigateToSection(
                                `profile/${userId}/quick-appointment?tabId=2`
                              )
                            }
                          >
                            <Text as={"h6"}>Request Appointment</Text>
                          </MenuItem>
                        )}
                      </>
                    )}
                    <MenuItem onClick={handleChangePassword}>
                      <Text as={"h6"}>Change Password</Text>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Text as={"h6"}>Logout</Text>
                    </MenuItem>
                  </Flex>
                </MenuList>
              </Menu>
            )}
          </Flex>
        ) : (
          <Flex alignItems={"center"}>
            {data && (
              <Menu variant={"header"}>
                <MenuButton
                  height={"30px"}
                  width={"30px"}
                  backgroundColor={
                    headerStatus === true ? "brand.100" : "white"
                  }
                  color={headerStatus === true ? "white" : "brand.100"}
                >
                  {data.name.slice(0, 2).toUpperCase()}
                </MenuButton>
                <MenuList>
                  <Flex flexDirection="column" p="10px">
                    <MenuItem onClick={handleProfileVisit}>
                      <Text as={"h6"}>Visit Profile</Text>
                    </MenuItem>
                    {data?.user_type && (
                      <>
                        {data?.user_type === "staff" ? (
                          <MenuItem
                            onClick={() =>
                              navigateToSection(
                                `profile/${userId}/add-medical-records?tabId=6`
                              )
                            }
                          >
                            <Text as={"h6"}>Add Medical Record</Text>
                          </MenuItem>
                        ) : (
                          <MenuItem
                            onClick={() =>
                              navigateToSection(
                                `profile/${userId}/quick-appointment?tabId=2`
                              )
                            }
                          >
                            <Text as={"h6"}>Request Appointment</Text>
                          </MenuItem>
                        )}
                      </>
                    )}
                    <MenuItem onClick={handleChangePassword}>
                      <Text as={"h6"}>Change Password</Text>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Text as={"h6"}>Logout</Text>
                    </MenuItem>
                  </Flex>
                </MenuList>
              </Menu>
            )}
            <IconButton
              aria-label="menu"
              color={headerStatus === true ? "brand.100" : "brand.200"}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            {/* <GiHamburgerMenu
              cursor={"pointer"}
              color={headerStatus === true ? "brand.100" : "brand.200"}
              onClick={() => setDrawerOpen(!drawerOpen)}
            /> */}
          </Flex>
        )}
      </Flex>

      {/* Drawer for mobile menu - Modern Sidebar */}
      {isMobile && (
        <AnimatePresence>
          {drawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 998,
                }}
                onClick={() => setDrawerOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "75%",
                  maxWidth: "320px",
                  height: "100%",
                  backgroundColor: "#5F6B7A",
                  zIndex: 999,
                  boxShadow: "4px 0 20px rgba(0, 0, 0, 0.3)",
                  overflowY: "auto",
                }}
              >
                <Box
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  paddingTop={HEADER_HEIGHT}
                >
                  <List
                    display="flex"
                    flexDir="column"
                    gap={0}
                    padding={0}
                    margin={0}
                    width="100%"
                  >
                    {/* Close button */}
                    <Flex justifyContent="space-between" alignItems="center" padding={4} borderBottom="1px solid rgba(255,255,255,0.1)">
                      <Text color="white" fontSize="xl" fontWeight="bold">MENU</Text>
                      <IconButton
                        aria-label="close"
                        onClick={() => setDrawerOpen(false)}
                        color="white"
                        bg="transparent"
                        _hover={{ bg: "rgba(255,255,255,0.1)" }}
                      >
                        <Text fontSize="2xl">×</Text>
                      </IconButton>
                    </Flex>

                    {/* Navigation Items - Matching Desktop Menu */}
                    <Box>
                      {/* ABOUT */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0, duration: 0.3 }}
                      >
                        <ListItem
                          borderBottom="1px solid rgba(255,255,255,0.05)"
                          _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                          transition="background-color 0.2s"
                          padding={3}
                          cursor="pointer"
                          onClick={() => {
                            navigateToSection("about-us");
                            setDrawerOpen(false);
                          }}
                        >
                          <Text
                            as="h5"
                            color="white"
                            fontWeight="normal"
                            fontSize="md"
                            letterSpacing="0.5px"
                            _hover={{ color: "#963f36" }}
                            transition="color 0.2s"
                          >
                            ABOUT
                          </Text>
                        </ListItem>
                      </motion.div>

                      {/* SERVICES - Collapsible */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05, duration: 0.3 }}
                      >
                        <ListItem
                          borderBottom="1px solid rgba(255,255,255,0.15)"
                          _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                          transition="background-color 0.2s"
                          padding={3}
                          cursor="pointer"
                          onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                        >
                          <Flex alignItems="center" justifyContent="space-between">
                            <Text
                              as="h5"
                              color="white"
                              fontWeight="bold"
                              fontSize="md"
                              letterSpacing="0.5px"
                              _hover={{ color: "#963f36" }}
                              transition="color 0.2s"
                            >
                              SERVICES
                            </Text>
                            <motion.div
                              animate={{ rotate: isServicesExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronDown color="white" />
                            </motion.div>
                          </Flex>
                        </ListItem>
                      </motion.div>

                      {/* Services Submenu - Collapsible */}
                      <AnimatePresence>
                        {isServicesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}
                          >
                            {[
                              { label: "ALL SERVICES", path: "clinic-services" },
                              { label: "Root Canal", path: "root-canal-washington-dc/" },
                              { label: "General Dentistry", path: "general-dentistry-washington-dc/" },
                              { label: "Comprehensive Care", path: "comprehensive-dental-care-washington-dc/" },
                              { label: "Cosmetic Dentistry", path: "cosmetic-dentistry-washington-dc/" },
                              { label: "Dental Veneers", path: "dental-veneers-washington-dc/" },
                              { label: "Teeth Whitening", path: "teeth-whitening-washington-dc/" },
                              { label: "Affordable Dentures", path: "affordable-dentures-washington-dc/" },
                              { label: "Tooth-Colored Fillings", path: "tooth-colored-fillings-washington-dc/" },
                              { label: "Dental Fillings", path: "dental-fillings-washington-dc/" },
                            ].map((service, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03, duration: 0.2 }}
                              >
                                <ListItem
                                  borderBottom="1px solid rgba(255,255,255,0.05)"
                                  _hover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                  transition="background-color 0.2s"
                                  padding={3}
                                  cursor="pointer"
                                  onClick={() => {
                                    navigateToSection(service.path);
                                    setDrawerOpen(false);
                                  }}
                                >
                                  <Flex alignItems="center" gap={2} marginLeft={4}>
                                    <Icon as={FaTooth} color="#963f36" fontSize="sm" />
                                    <Text
                                      as="h5"
                                      color="white"
                                      fontWeight="normal"
                                      fontSize="md"
                                      letterSpacing="0.5px"
                                      _hover={{ color: "#963f36" }}
                                      transition="color 0.2s"
                                    >
                                      {service.label}
                                    </Text>
                                  </Flex>
                                </ListItem>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Other menu items */}
                      {[
                        { label: "LOCATIONS", path: "/#home-location", divider: true },
                        { label: "CONTACT US", path: "/#footer-section" },
                        { label: "PRIVACY POLICY", path: "privacy-policy" },
                        { label: "NEW PATIENTS", path: "new-patients" },
                        { label: "BLOG", path: "blog", divider: true },
                      ].map((item, index) => {
                        const adjustedIndex = index + 2; // Offset for ABOUT and SERVICES items
                        return (
                          <motion.div
                            key={adjustedIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: adjustedIndex * 0.05, duration: 0.3 }}
                          >
                        <ListItem
                          borderBottom={item.divider ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.05)"}
                          _hover={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          }}
                          transition="background-color 0.2s"
                          padding={3}
                          cursor="pointer"
                          onClick={() => {
                            if (item.path?.startsWith("#")) {
                              navigateToSection(item.path.substring(1));
                            } else {
                              navigateToSection(item.path);
                            }
                            setDrawerOpen(false);
                          }}
                        >
                          <Text
                            as="h5"
                            color="white"
                            fontWeight="normal"
                            fontSize="md"
                            letterSpacing="0.5px"
                            _hover={{ color: "#963f36" }}
                            transition="color 0.2s"
                          >
                            {item.label}
                          </Text>
                        </ListItem>
                          </motion.div>
                        );
                      })}
                    </Box>

                    {/* Login/Signup buttons */}
                    {isError && (
                      <>
                        <Box padding={4} borderTop="1px solid rgba(255,255,255,0.15)" marginTop="auto">
                          <Button
                            width="100%"
                            background="#963f36"
                            color="white"
                            padding={3}
                            borderRadius="md"
                            marginBottom={2}
                            onClick={() => {
                              navigateToSection("auth/signup");
                              setDrawerOpen(false);
                            }}
                            _hover={{ background: "#7a2f2a" }}
                            transition="all 0.2s"
                          >
                            <Text as="h5" fontWeight="bold">SIGNUP</Text>
                          </Button>
                          <Button
                            width="100%"
                            background="transparent"
                            color="white"
                            padding={3}
                            borderRadius="md"
                            border="1px solid white"
                            onClick={() => {
                              navigateToSection("auth/login");
                              setDrawerOpen(false);
                            }}
                            _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
                            transition="all 0.2s"
                          >
                            <Text as="h5" fontWeight="bold">LOGIN</Text>
                          </Button>
                        </Box>
                      </>
                    )}
                  </List>
                </Box>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </Box>
  );
}
