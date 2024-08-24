import { sportsMassageService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Sports Massage | Enhance Performance with Marta",
  description:
    "Optimize your athletic performance with Marta's sports massage. Ideal for relieving muscle tension, preventing injuries, and speeding up recovery. Book your session to experience targeted relief and improved flexibility for peak performance.",
};

const page = () => {
  return (
    <>
      <Services data={sportsMassageService} />
    </>
  );
};

export default page;
