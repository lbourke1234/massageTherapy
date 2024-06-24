import React from "react";
import PackagesProduct from "../pages/packagesPage/PackagesProduct";
import { treatmentData } from "../data/treatmentData";

const page = () => {
  return <PackagesProduct data={treatmentData[3]} />;
};

export default page;
