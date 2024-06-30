"use client";

import React from "react";
import CardHeadingTextBtn from "../../components/reuse/CardHeadingTextBtn";
import { treatmentData } from "../../data/treatmentData";
import { StyledCol, StyledContainer, StyledHeading, StyledRow } from "./STreatments";

const Treatments = () => {
  return (
    <StyledContainer id="services">
      <StyledHeading>Services</StyledHeading>
      <StyledRow>
        {treatmentData.map((treatment, index) => {
          return (
            <StyledCol key={index}>
              <CardHeadingTextBtn
                src={treatment.mainImage}
                alt={treatment.mainImageAlt}
                heading={treatment.name}
                link={treatment.link}
              />
            </StyledCol>
          );
        })}
      </StyledRow>
    </StyledContainer>
  );
};

export default Treatments;
