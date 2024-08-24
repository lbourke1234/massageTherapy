import { nutritionalAdviceService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Nutritional Advice | Expert Guidance from Marta",
  description:
    "Get personalized nutritional advice from Marta to improve your health and well-being. Whether you’re seeking to enhance energy, manage weight, or address specific health concerns, Marta offers expert guidance and practical tips tailored to your needs. Book a consultation today.",
};

const page = () => {
  return (
    <>
      <Services data={nutritionalAdviceService} />
    </>
  );
};

export default page;
