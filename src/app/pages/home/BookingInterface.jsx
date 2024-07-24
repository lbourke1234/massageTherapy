"use client";

import React from "react";
import { useEffect, useRef } from "react";

const BookingInterface = () => {
  //   const iframeRef = useRef(null);
  //   useEffect(() => {
  //     const checkIframeHeight = () => {
  //       if (iframeRef.current && iframeRef.current.contentWindow) {
  //         const iframeDocument = iframeRef.current.contentWindow.document;
  //         if (iframeDocument) {
  //           const height = iframeDocument.documentElement.scrollHeight;
  //           iframeRef.current.style.height = `${height}px`;
  //         }
  //       }
  //     };

  //     const intervalId = setInterval(checkIframeHeight, 500); // Check height every 500ms

  //     return () => {
  //       clearInterval(intervalId); // Clear interval on component unmount
  //     };
  //   }, []);

  return (
    <div className="w-3/4 mx-auto py-8 h-full">
      <p id="booking-form-heading" className="text-black text-2em text-center font-medium">
        Booking Form
      </p>
      <iframe
        id="cliniko-82158340"
        src="https://marta-suchanska.uk2.cliniko.com/bookings?embedded=true"
        frameBorder="0"
        scrolling="auto"
        width="100%"
        height="1160px"
        style={{ pointerEvents: "auto" }}
        className="max-w-[51.25rem] mx-auto"
      ></iframe>
    </div>
  );
};

export default BookingInterface;
