import React from "react";
import PackagesProduct from "../pages/packagesPage/PackagesProduct";
import { treatmentData } from "../data/treatmentData";

export const metadata = {
  title: "Massage Packages: Tailored Therapies for Every Need",
  description:
    "Explore our massage packages, offering tailored therapies for relaxation, sports recovery, and more. Find the perfect package to meet your needs and enhance your wellness journey.",
};

const page = () => {
  return <PackagesProduct data={treatmentData[3]} />;
};

export default page;
