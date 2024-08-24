import React from "react";
import Product from "@/app/pages/productPage/Product";
import { buccalMassageService } from "@/app/data/servicesData";

export const metadata = {
  title: "Buccal Massage in London, Enhance Your Jawline",
  description:
    "Buccal massage is a specialized technique that involves the manual manipulation of facial muscles through the inside of the mouth.",
};

const page = () => {
  return <Product data={buccalMassageService} />;
};

export default page;
