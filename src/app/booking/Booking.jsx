import Navbar from "@/app/components/nav/Navbar";
import React from "react";
import BookingHeading from "./BookingHeading";
import Space from "../pages/about/Space";
import ContactInfo from "../pages/contactInfo/ContactInfo";

const Booking = () => {
  return (
    <>
      <Navbar />
      <Space />
      <BookingHeading />
      <iframe
        id="cliniko-82158340"
        src="https://marta-suchanska.uk2.cliniko.com/bookings?embedded=true"
        frameBorder="0"
        scrolling="auto"
        width="100%"
        height="1195px"
        style={{ pointerEvents: "auto" }}
        className="max-w-[51.25rem] mx-auto max-h-[1195px]"
      ></iframe>
      <ContactInfo />
    </>
  );
};

export default Booking;
