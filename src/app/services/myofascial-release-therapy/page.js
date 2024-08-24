import { myofascialReleaseTherapyService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Myofascial Release Therapy | Restore Flexibility with Marta",
  description:
    "Experience the benefits of myofascial release therapy with Marta. This specialized treatment relieves muscle tightness, improves range of motion, and promotes overall relaxation. Book your session now for effective pain relief and enhanced flexibility.",
};

const page = () => {
  return (
    <>
      <Services data={myofascialReleaseTherapyService} />
    </>
  );
};

export default page;
