import { backNeckShoulderService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Back, Neck, and Shoulders Massage | Marta's Expert Therapy",
  description:
    "Experience relief with Marta's back, neck, and shoulders massage. Ideal for easing tension, reducing pain, and improving range of motion. Book a personalized session today for targeted care and deep relaxation.",
};

const page = () => {
  return (
    <>
      <Services data={backNeckShoulderService} />
    </>
  );
};

export default page;
