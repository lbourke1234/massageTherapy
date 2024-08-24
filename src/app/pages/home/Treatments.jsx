import React from "react";
import TreatmentsCard from "./components/TreatmentsCard";
import { homePageServicesMap } from "@/app/data/servicesData";

const Treatments = () => {
  return (
    <div className="text-black flex flex-col" id="services">
      <h2 className="text-center pt-8 pb-4 text-2xl lg:text-2em font-medium">
        Massage Therapy Services
      </h2>
      <div className="flex flex-wrap  mx-auto justify-between pb-8 sm:container">
        {homePageServicesMap.map((treatment, index) => {
          return (
            <TreatmentsCard
              src={treatment.mainImage}
              alt={treatment.mainImageAlt}
              heading={treatment.name}
              link={treatment.link}
              index={index}
              key={index}
              className={treatment.className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Treatments;
