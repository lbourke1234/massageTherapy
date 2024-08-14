import React from "react";

const BookingInterface = () => {
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
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default BookingInterface;
