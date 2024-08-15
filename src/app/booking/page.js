import React from "react";
import BookingInterface from "../pages/home/BookingInterface";
import Space from "../pages/about/Space";
import Script from "next/script";
import ContactInfo from "../pages/contactInfo/ContactInfo";
import FastNavbar from "../components/nav/FastNavbar";

export const metadata = {
  title: "Book Your Massage Therapy Session Online | Relax & Rejuvenate",
  description:
    "Book your massage therapy appointment online. Choose from deep tissue, sports massage, or relaxation therapy. Secure your appointment today for ultimate rejuvenation.",
};

const page = () => {
  return (
    <>
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
      ;
      <FastNavbar />
      <Space />
      <BookingInterface />
      <ContactInfo />
    </>
  );
};

export default page;
