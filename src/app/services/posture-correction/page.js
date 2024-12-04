import { postureCorrectionService } from "@/app/data/servicesData";
import React from "react";
import PostureServices from "./PostureServices";

export const metadata = {
  title: "Pregnancy Massage | Safe & Soothing Therapy with Marta",
  description:
    "Experience a soothing pregnancy massage with Marta, designed to reduce stress, ease muscle pain, and improve circulation. Safe for expectant mothers after the 12th week, this therapy promotes relaxation and well-being. Book your appointment today.",
};

const page = () => {
  return <PostureServices data={postureCorrectionService} />;
};

export default page;
