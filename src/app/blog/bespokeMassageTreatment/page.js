import { treatmentData } from "@/app/data/treatmentData";
import BespokeMassageTreatment from "@/app/pages/blogPosts/BespokeMassageTreatment";
import React from "react";

export const metadata = {
  title: "Signature Massage Treatments: Swedish, Deep Tissue, Sports & More",
  description:
    "Learn about bespoke massage treatments including Swedish, deep tissue, sports, and more. Discover how these specialized techniques can be tailored to your unique needs for optimal wellness.",
};

const page = () => {
  return <BespokeMassageTreatment />;
};

export default page;
