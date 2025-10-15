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
              onClick={() => navigateToSection("home/about-us")}
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
                              path: "/home/clinic-services"
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
              onClick={() => navigateToSection("home/privacy-policy")}
            >
              PRIVACY POLICY
            </Button>
            <Button
              variant={"header"}
              onClick={() => navigateToSection("home/new-patients")}
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

      {/* Drawer for mobile menu */}
      {isMobile && drawerOpen && (
        <Box
          backgroundColor={headerStatus === true ? "#963f36" : "#faf7f5"}
          color={headerStatus === true ? "#fff" : "#963f36"}
          width={"100%"}
          position={"fixed"}
          display={"inherit"}
          top={HEADER_HEIGHT}
          role="presentation"
          onClick={() => setDrawerOpen(!drawerOpen)}
          padding={8}
          className="responsive-header"
        >
          <List
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            gap={4}
          >
            <ListItem onClick={() => navigateToSection("/")} marginY={2}>
              <Text as={"h4"} fontWeight={"bold"}>
                HOME
              </Text>
            </ListItem>
            <ListItem
              onClick={() => navigateToSection("home/about-us")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                ABOUT US
              </Text>
            </ListItem>
            <ListItem
              onClick={() => navigateToSection("home/clinic-services")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                ALL SERVICES
              </Text>
            </ListItem>
            <ListItem onClick={() => navigateToSection("blog")} marginY={2}>
              <Text as={"h4"} fontWeight={"bold"}>
                BLOG
              </Text>
            </ListItem>
            <ListItem marginY={2}>
              <Button variant={"header"}>
                <Link href={"/#footer-section"}>
                  <Text as={"h4"} fontWeight={"bold"}>
                    LOCATIONS
                  </Text>
                </Link>
              </Button>
            </ListItem>
            <ListItem
              onClick={() => navigateToSection("home/new-patients")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                NEW PATIENTS
              </Text>
            </ListItem>
            <ListItem
              onClick={() => navigateToSection("home/privacy-policy")}
              marginY={2}
            >
              <Text as={"h4"} fontWeight={"bold"}>
                PRIVACY POLICY
              </Text>
            </ListItem>
            <ListItem marginY={2}>
              <Button variant={"header"}>
                <Link href={"/#footer-section"}>
                  <Text as={"h4"} fontWeight={"bold"}>
                    CONTACT US
                  </Text>
                </Link>
              </Button>
            </ListItem>

            {isError && (
              <>
                <ListItem
                  onClick={() => navigateToSection("auth/signup")}
                  width={"fit-content"}
                  background={"#963f36"}
                  color={"#fff"}
                  padding={".7rem 5rem"}
                  borderRadius={"lg"}
                  border={"1px #faf7f5 solid"}
                >
                  <Text as={"h4"} fontWeight={"bold"}>
                    Signup
                  </Text>
                </ListItem>
                <ListItem
                  onClick={() => navigateToSection("auth/login")}
                  width={"fit-content"}
                  background={"#fff"}
                  color={"#963f36"}
                  padding={".7rem 5.3rem"}
                  borderRadius={"lg"}
                  border={
                    headerStatus === true ? "1px #fff solid" : "1px black solid"
                  }
                >
                  <Text as={"h4"} fontWeight={"bold"}>
                    Login
                  </Text>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      )}
    </Box>
  );
}
