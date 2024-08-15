"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import HamburgerSvg from "/public/resources/svg/hamburger-menu.svg";
import Image from "next/image";
import Logo from "../Logo";
import MobileLogo from "../reuse/MobileLogo";

const FastNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const [visible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollPosition] = useState(0);

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

  const handleLinkClick = () => {
    setNavOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div
        // style={{ top: visible ? "0" : "-420px" }}
        className={`${
          visible ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 right-0 z-50 bg-navbarColor transition-all duration-300 ease-in-out`}
      >
        {navOpen && (
          <div
            ref={navbarRef}
            className="bg-navbarColor absolute z-20 w-full top-14 text-white px-4 py-4"
          >
            <Link href={"/"} onClick={handleLinkClick}>
              <div className="w-10 pb-6 hover:cursor-pointer">
                <MobileLogo />
              </div>
            </Link>
            <div className="flex flex-col w-full gap-6">
              <Link className="hover:text-gray-200" href={"/"} onClick={handleLinkClick}>
                Home
              </Link>
              <Link className="hover:text-gray-200" href={"/about"} onClick={handleLinkClick}>
                About
              </Link>
              <Link className="hover:text-gray-200" href={"/pricing"} onClick={handleLinkClick}>
                Pricing
              </Link>
              <Link className="hover:text-gray-200" href={"/#services"} onClick={handleLinkClick}>
                Services
              </Link>
              <Link className="hover:text-gray-200" href={"/blog"} onClick={handleLinkClick}>
                Blog
              </Link>
              <Link className="hover:text-gray-200" href={"/#contact"} onClick={handleLinkClick}>
                Contact
              </Link>
            </div>
          </div>
        )}
        {/* mobile below */} {/* mobile below */} {/* mobile below */} {/* mobile below */}{" "}
        <div className="w-[94%] mx-auto flex cm1050:hidden text-white h-14 justify-between items-center ">
          <div
            ref={hamburgerRef}
            className="cm1050:hidden block text-3xl cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          >
            <Image
              className="inline-block cm1050:hidden text-2xl cursor-pointer"
              src={HamburgerSvg}
              alt="hamburger icon"
              height={32}
              width={32}
            />
          </div>
          <div className="cm1050:flex hidden gap-6">
            <Link className="hover:text-gray-200" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-gray-200" href={"/about"}>
              About
            </Link>
            <Link className="hover:text-gray-200" href={"/pricing"}>
              Pricing
            </Link>
            <Link className="hover:text-gray-200" href={"/#services"}>
              Services
            </Link>
            <Link className="hover:text-gray-200" href={"/blog"}>
              Blog
            </Link>
            <Link className="hover:text-gray-200" href={"/#contact"}>
              Contact
            </Link>
          </div>
          <Link href={"/"} onClick={handleLinkClick}>
            <div className=" mr-0 cm1230:mr-[20em] ">
              <MobileLogo />
            </div>
          </Link>
          <Link
            href={"/booking"}
            className="cm320:inline-block cmMobile:hidden cm1050:hidden py-[0.2rem] px-[1rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
          >
            Book Now!
          </Link>

          <Link
            href={"/booking"}
            className="hidden cm1050:block py-[0.7rem] px-[1.75rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
          >
            Book Now!
          </Link>
        </div>
        {/* mobile above */} {/* mobile above */} {/* mobile above */} {/* mobile above */}{" "}
        <div className="w-[94%] mx-auto cm1050:flex hidden text-white h-36 justify-between items-center ">
          <div className="cm1050:flex hidden gap-6">
            <Link className="hover:text-gray-200" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-gray-200" href={"/about"}>
              About
            </Link>
            <Link className="hover:text-gray-200" href={"/pricing"}>
              Pricing
            </Link>
            <Link className="hover:text-gray-200" href={"/#services"}>
              Services
            </Link>
            <Link className="hover:text-gray-200" href={"/blog"}>
              Blog
            </Link>
            <Link className="hover:text-gray-200" href={"/#contact"}>
              Contact
            </Link>
          </div>
          <Link href={"/"} onClick={handleLinkClick}>
            <div className=" mr-0 cm1230:mr-[20em] ">
              <Logo />
            </div>
          </Link>
          <Link
            href={"/booking"}
            className="cm320:inline-block cmMobile:hidden cm1050:hidden py-[0.2rem] px-[1rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
          >
            Book Now!
          </Link>

          <Link
            href={"/booking"}
            className="hidden cm1050:block py-[0.7rem] px-[1.75rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
          >
            Book Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FastNavbar;
