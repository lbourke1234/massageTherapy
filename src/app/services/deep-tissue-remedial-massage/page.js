import { deepTissueMassageService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Deep Tissue Remedial Massage | Expert Therapy by Marta",
  description:
    "Experience the benefits of deep tissue remedial massage with Marta. This targeted therapy helps alleviate chronic pain, reduce muscle tension, and enhance recovery. Book your session now for effective relief and improved well-being.",
};

const page = () => {
  return (
    <>
      <Services data={deepTissueMassageService} />
    </>
  );
};

export default page;
