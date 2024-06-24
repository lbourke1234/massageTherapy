"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { Row } from "../../styledComponents/Containers";
import MobileLogo from "../reuse/MobileLogo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8em;
  @media only screen and (max-width: 991px) {
    height: auto;
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const Text = styled.li`
  font-weight: 400;
  margin: 0 0.5em;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const IconsContainer = styled.div`
  margin-right: 20em;
  @media screen and (max-width: 1230px) {
    margin: 0;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const StyledExtraButton = styled.button`
  padding: 0.7rem 1.75rem;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #477e81;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 0;
  background: white;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const StyledExtraButtonMobile = styled.button`
  display: none;
  color: black;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #477e81;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 0;
  background: white;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  @media screen and (max-width: 991px) {
    display: inline-block;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

const NavContent = styled.nav`
  width: 94%;
  margin: auto;
`;

const StyledNav = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: ${(props) => props.top}px;
  transition: all 300ms ease-in-out;
  width: 100%;
`;

const MobileLogoContainer = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    display: inline-block;
  }
`;

const MobileMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HamburgerMenuStyled = styled(GiHamburgerMenu)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: inline-block;
  }
`;

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
    console.log("clicked");
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
            <MobileLogoContainer>
              <MobileLogo />
            </MobileLogoContainer>
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
            <IconsContainer>
              <Logo />
            </IconsContainer>
            <StyledExtraButton>Book Now!</StyledExtraButton>
          </NavbarContainer>
        </NavContent>
      </div>
    </StyledNav>
  );
};

export default Navbar;
