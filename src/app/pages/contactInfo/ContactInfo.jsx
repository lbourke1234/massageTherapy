import React from "react";

import ContactIcon from "./ContactIcon";
import LinkedInIcon from "./LinkedInIcon";
import InstagramIcon from "./InstagramIcon";

const ContactInfo = () => {
  return (
    <>
      <div className="flex flex-col cm800:flex-row pt-4 px-4 text-black justify-around">
        <ul>
          <li className="text-customYellow pb-6 text-[1.4em] list-none">Location</li>
          <li className="list-none pb-4">Consulting Rooms</li>
          <li className="list-none pb-4">104 Harley St</li>
          <li className="list-none pb-4">London</li>
          <li className="list-none pb-4">W1G 7JD</li>
        </ul>
        <ul>
          <li className="text-customYellow pb-6 text-[1.4em] list-none">Hours</li>
          <li className="list-none pb-4">Mon - Tue - Thu 9am - 8pm</li>
          <li className="list-none pb-4">Wed - Fri - Sat Closed</li>
          <li className="list-none pb-4">Sun 9am - 3pm</li>
        </ul>
        <ul>
          <li className="text-customYellow pb-6 text-[1.4em] list-none">Contact</li>
          <li className="list-none pb-4">020 805 09335 </li>
          <li className="list-none pb-4">marta@massagetherapy.london</li>
          <li className="list-none pb-4">
            <div className="flex">
              <InstagramIcon />
              <LinkedInIcon />
              <a className="text-black" href="tel:02080509335">
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
