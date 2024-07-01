import React from "react";
import CardHeadingTextBtn from "../../components/reuse/CardHeadingTextBtn";
import { treatmentData } from "../../data/treatmentData";

const Treatments = () => {
  return (
    <div className="text-black flex flex-col" id="services">
      <h4 className="text-center py-4 text-2em font-medium">Services</h4>
      <div className="flex flex-wrap w-[90%] m-auto justify-between">
        {treatmentData.map((treatment, index) => {
          return (
            <div
              className="basis-full cm1160:basis-1/2 flex justify-center px-4 pr-4 h-full hover:z-10 hover:scale-100 transition-transform duration-300"
              key={index}
            >
              <CardHeadingTextBtn
                src={treatment.mainImage}
                alt={treatment.mainImageAlt}
                heading={treatment.name}
                link={treatment.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Treatments;
