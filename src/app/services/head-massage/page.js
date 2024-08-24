import { headMassageService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Head Massage | Relax and Relieve Stress with Marta",
  description:
    "Discover the calming effects of a head massage with Marta. Perfect for reducing stress, easing tension, and enhancing relaxation. Book your appointment today for a soothing experience that revitalizes your mind and body.",
};

const page = () => {
  return (
    <>
      <Services data={headMassageService} />
    </>
  );
};

export default page;
