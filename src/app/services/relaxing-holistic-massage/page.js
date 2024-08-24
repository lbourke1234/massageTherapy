import { relaxingHolistic } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Relaxing Holistic Massage | Deep Relaxation with Marta",
  description:
    "Indulge in Marta's relaxing holistic massage for a comprehensive therapeutic experience. This full-body treatment combines soothing techniques and essential oils to enhance relaxation, reduce stress, and improve well-being. Schedule your session today for ultimate tranquility.",
};

const page = () => {
  return (
    <>
      <Services data={relaxingHolistic} />
    </>
  );
};

export default page;
