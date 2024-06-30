"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import { Row } from "../../styledComponents/Containers";
import MobileLogo from "../reuse/MobileLogo";
import Link from "next/link";
import {
  IconsContainer,
  MobileLogoContainer,
  NavContent,
  NavbarContainer,
  StyledExtraButton,
  StyledExtraButtonMobile,
  StyledNav,
  Text,
  MobileMainContainer,
  HamburgerMenuStyled,
} from "./SNavbar";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false); // State to track menu visibility
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setVisible(prevScrollpos > currentPosition);
      setPrevScrollPosition(currentPosition);
      if (currentPosition === 0) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const handleToggleNavbar = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <StyledNav top={visible ? 0 : -320} className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid" style={{ top: "0px" }}>
        <NavContent>
          <MobileMainContainer>
            <div ref={hamburgerRef} onClick={(e) => handleToggleNavbar(e)}>
              <HamburgerMenuStyled />
            </div>
            <Link href={"/"}>
              <MobileLogoContainer>
                <MobileLogo />
              </MobileLogoContainer>
            </Link>
            <StyledExtraButtonMobile onClick={() => goToExternalSite()}>
              Book Now!
            </StyledExtraButtonMobile>
          </MobileMainContainer>
          <NavbarContainer
            showMenu={showMenu}
            ref={navbarRef}
            className={`navbar-collapse text-white`}
            id="navbarNav"
          >
            <Row>
              <ul className="navbar-nav align-items-center">
                <Link href={"/"} className="nav-item">
                  <Text className="nav-link cursor text-white">Home</Text>
                </Link>
                <Link href={"/about"} className="nav-item">
                  <Text className="nav-link cursor text-white">About</Text>
                </Link>
                <Link href={"/pricing"} className="nav-item">
                  <Text className="nav-link cursor text-white">Pricing</Text>
                </Link>
                <Link href={"/#services"} className="nav-item">
                  <Text className="nav-link cursor text-white">Services</Text>
                </Link>
                <Link href={"/blog"} className="nav-item">
                  <Text className="nav-link cursor text-white">Blog</Text>
                </Link>
                <Link href={"/#contact"} className="nav-item">
                  <Text className="nav-link cursor text-white">Contact</Text>
                </Link>
              </ul>
            </Row>
            <Link href={"/"}>
              <IconsContainer>
                <Logo />
              </IconsContainer>
            </Link>
            <StyledExtraButton onClick={() => goToExternalSite()}>Book Now!</StyledExtraButton>
          </NavbarContainer>
        </NavContent>
      </div>
    </StyledNav>
  );
};

export default Navbar;
