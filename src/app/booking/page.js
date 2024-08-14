import React from "react";
import BookingHeading from "./BookingHeading";
import BookingInterface from "../pages/home/BookingInterface";
import Booking from "./Booking";
import Navbar from "../components/nav/Navbar";
import Space from "../pages/about/Space";
import Head from "next/head";
import Script from "next/script";
import ContactInfo from "../pages/contactInfo/ContactInfo";

const page = () => {
  <Head>
    <Script async id="cliniko-script">
      {`
          window.addEventListener('message', function handleIFrameMessage (e) {
            var clinikoBookings = document.getElementById('cliniko-82158340');
            if (typeof e.data !== 'string') return;
            if (e.data.search('cliniko-bookings-resize') > -1) {
              var height = Number(e.data.split(':')[1]);
              clinikoBookings.style.height = height + 'px';
            }
            e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
          });
        `}
    </Script>
  </Head>;

  return (
    <div>
      <Navbar />
      <Space />
      <BookingInterface />
      <ContactInfo />
    </div>
  );
};

export default page;
