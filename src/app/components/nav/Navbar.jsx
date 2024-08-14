"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import MobileLogo from "../reuse/MobileLogo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false); // State to track menu visibility
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

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
    <div
      style={{ top: visible ? "0" : "-360px" }}
      className="navbar navbar-expand-lg fixed-top bg-navbarColor fixed transition-all duration-300 ease-in-out w-full"
    >
      <div className="container-fluid " style={{ top: "0px" }}>
        <div className="w-[94%] m-auto">
          <div className="flex justify-between items-center w-full">
            <div ref={hamburgerRef} onClick={(e) => handleToggleNavbar(e)}>
              <GiHamburgerMenu className="cm991:hidden text-2xl cursor-pointer cmMobile:inline-block" />
            </div>
            <Link href={"/"}>
              <div className="cmMobile:inline-block cm991:hidden">
                <MobileLogo />
              </div>
            </Link>
            <Link
              href={"/booking"}
              className="cm320:inline-block cmMobile:hidden cm991:hidden py-[0.2rem] px-[1rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
            >
              Book Now!
            </Link>
          </div>
          <div
            ref={navbarRef}
            className={`${
              showMenu ? "flex" : "hidden"
            } navbar-collapse text-white w-full cmMobile:items-start cm991:items-center cmMobile:flex-col cm991:flex-row cmMobile:h-auto cm991:h-32 justify-between`}
            id="navbarNav"
          >
            <div className="flex flex-wrap">
              <ul className="navbar-nav align-items-center">
                <Link href={"/"} className="nav-item">
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Home
                  </li>
                </Link>
                <Link href={"/about"} className="nav-item">
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    About
                  </li>
                </Link>
                <Link href={"/pricing"} className="nav-item">
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Pricing
                  </li>
                </Link>
                <Link href={"/#services"} className="nav-item">
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Services
                  </li>
                </Link>
                <Link href={"/blog"} className="nav-item">
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Blog
                  </li>
                </Link>
                <Link href={"/#contact"} className="nav-item">
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <Link href={"/"}>
              <div className="cmMobile:mr-0 cm1230:mr-[20em] cmMobile:hidden cm991:block">
                <Logo />
              </div>
            </Link>
            <Link
              href={"/booking"}
              className="py-[0.7rem] px-[1.75rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
