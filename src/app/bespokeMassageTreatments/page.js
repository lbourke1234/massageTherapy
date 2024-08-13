import React from "react";
import { treatmentData } from "../data/treatmentData";
import Product from "../pages/productPage/Product";

export const metadata = {
  title: "Bespoke Massage with Marta: Swedish, Deep Tissue, Sports, and More",
  description:
    "Experience tailored massage therapy with Marta, a certified therapist offering Swedish, deep tissue, sports, and other specialized treatments in London. Discover a customized approach for your needs.",
};

const page = () => {
  return <Product data={treatmentData[0]} />;
};

export default page;
