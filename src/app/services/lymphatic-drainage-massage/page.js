import { lymphaticDrainageMassageService } from "@/app/data/servicesData";
import Services from "@/app/pages/services/Services";
import React from "react";

export const metadata = {
  title: "Lymphatic Drainage Massage | Detox and Revitalize with Marta",
  description:
    "Boost your wellness with Marta’s lymphatic drainage massage. This gentle therapy reduces swelling, removes toxins, and improves circulation. Schedule your session today to enhance your body's natural detoxification and overall health.",
};

const page = () => {
  return (
    <>
      <Services data={lymphaticDrainageMassageService} />
    </>
  );
};

export default page;
