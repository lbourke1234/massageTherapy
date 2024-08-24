import { signatureMassageService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Signature Massage | Personalized Therapy with Marta",
  description:
    "Discover Marta's Signature Massage, a customized therapy combining various techniques to meet your unique needs. Enjoy a tailored experience that offers deep relaxation, targeted relief, and long-lasting benefits. Book your personalized session today.",
};

const page = () => {
  return (
    <>
      <Services data={signatureMassageService} />
    </>
  );
};

export default page;
