import { packageService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Massage Packages | Enhance Your Wellness with Marta",
  description:
    "Explore Marta's curated massage packages designed to maximize your experience and results. Choose from 90 or 120-minute options, combining therapies for personalized care and long-lasting benefits. Book now to elevate your wellness journey.",
};

const page = () => {
  return (
    <>
      <Services data={packageService} />
    </>
  );
};

export default page;
