import React from "react";
import Product from "../pages/productPage/Product";
import { treatmentData } from "../data/treatmentData";

const page = () => {
  return <Product data={treatmentData[2]} />;
};

export default page;
