// "use client";

import React from "react";

import { GrInstagram, GrLinkedin, GrPhone } from "react-icons/gr";
import ContactIcon from "./ContactIcon";
import LinkedInIcon from "./LinkedInIcon";
import InstagramIcon from "./InstagramIcon";
// import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <div className="flex flex-col cm800:flex-row pt-4 px-4 text-black justify-around">
        <ul>
          <li className="text-customYellow pb-6 text-[1.4em] list-none">Location</li>
          <li className="list-none pb-4">Light Centre Marylebone</li>
          <li className="list-none pb-4">Lower Ground</li>
          <li className="list-none pb-4">49 Marylebone High Street</li>
          <li className="list-none pb-4">London</li>
          <li className="list-none pb-4">W1U 5HJ</li>
        </ul>
        <ul>
          <li className="text-customYellow pb-6 text-[1.4em] list-none">Hours</li>
          <li className="list-none pb-4">Mon - Fri 9am - 8pm</li>
          <li className="list-none pb-4">Sat 9am - 3pm</li>
        </ul>
        <ul>
          <li className="text-customYellow pb-6 text-[1.4em] list-none">Contact</li>
          <li className="list-none pb-4">0750 2287 115 </li>
          <li className="list-none pb-4">marta@massagetherapy.london</li>
          <li className="list-none pb-4">
            <div className="flex">
              <InstagramIcon />
              <LinkedInIcon />
              <a className="text-black" href="tel:07502287115">
                <ContactIcon />
              </a>
            </div>
          </li>
          <li className="list-none pb-4"></li>
          <li className="list-none pb-4"></li>
        </ul>
      </div>
      <p className="text-center pb-4 text-black">
        Copyright ©2024 <span className="font-inter">MɅSSɅGE</span>
      </p>
    </>
  );
};

export default ContactInfo;
