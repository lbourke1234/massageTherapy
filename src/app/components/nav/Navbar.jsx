"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import MobileLogo from "../reuse/MobileLogo";
import Link from "next/link";
import HamburgerSvg from "/public/resources/svg/hamburger-menu.svg";
import Image from "next/image";

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
      className=" bg-navbarColor fixed top-0 right-0 left-0 transition-all duration-300 ease-in-out w-full cm1050:flex justify-center items-center"
    >
      <div className="container mx-auto " style={{ top: "0px" }}>
        <div className="w-[94%] m-auto">
          {/* mobile styles */}
          <div
            className={` flex cm1050:hidden h-16 justify-between items-center w-full fixed top-0 right-0 left-0 bg-navbarColor`}
          >
            <div
              className={`${
                showMenu ? "flex" : "hidden"
              } container mx-auto justify-between items-center flex w-[94%]`}
            >
              <div ref={hamburgerRef} onClick={(e) => handleToggleNavbar(e)}>
                <Image
                  className="inline-block cm1050:hidden text-2xl cursor-pointer"
                  src={HamburgerSvg}
                  alt="hamburger icon"
                  height={24}
                  width={24}
                />
              </div>
              <Link href={"/"}>
                <div className="inline-block cm1050:hidden">
                  <MobileLogo />
                </div>
              </Link>
              <Link
                href={"/booking"}
                className="cm320:inline-block cmMobile:hidden cm1050:hidden py-[0.2rem] px-[1rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
              >
                Book Now!
              </Link>
            </div>
          </div>
          {/* mobile styles */}
          {/* className={`${
              showMenu ? "flex" : "hidden"
            }  text-white w-full cmMobile:items-start cm1050:items-center cmMobile:flex-col cm992:flex-row cmMobile:h-auto cm992:h-32 justify-between`}
            id="navbarNav"
          > */}
          <div
            ref={navbarRef}
            className={`cm1050:flex hidden text-white w-full cmMobile:items-start cm1050:items-center cmMobile:flex-col cm1050:flex-row cmMobile:h-auto cm1050:h-32 justify-between`}
            id="navbarNav"
          >
            <div className="flex flex-wrap">
              <ul className="flex cm1050:flex-row flex-col items-center">
                <Link href={"/"}>
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Home
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    About
                  </li>
                </Link>
                <Link href={"/pricing"}>
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Pricing
                  </li>
                </Link>
                <Link href={"/#services"}>
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Services
                  </li>
                </Link>
                <Link href={"/blog"}>
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Blog
                  </li>
                </Link>
                <Link href={"/#contact"}>
                  <li className="nav-link cursor text-white hover:underline hover:cursor-pointer mx-2 font-normal">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <Link href={"/"}>
              <div className="cmMobile:mr-0 cm1230:mr-[20em] cmMobile:hidden cm1050:block">
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
