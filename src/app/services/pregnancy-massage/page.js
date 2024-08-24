import { pregnancyMassageService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Pregnancy Massage | Safe & Soothing Therapy with Marta",
  description:
    "Experience a soothing pregnancy massage with Marta, designed to reduce stress, ease muscle pain, and improve circulation. Safe for expectant mothers after the 12th week, this therapy promotes relaxation and well-being. Book your appointment today.",
};

const page = () => {
  return (
    <>
      <Services data={pregnancyMassageService} />
    </>
  );
};

export default page;
