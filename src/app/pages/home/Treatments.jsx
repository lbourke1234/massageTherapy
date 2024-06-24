"use client";

import React from "react";
import styled from "styled-components";
import CardHeadingTextBtn from "../../components/reuse/CardHeadingTextBtn";
import { Col_2, ContainerFluid, Row } from "../../styledComponents/Containers";
import { treatmentData } from "../../data/treatmentData";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
const StyledCol = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  padding: 0 1em 1em 1em;
  transition: transform 0.3s;
  height: 100%;
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
  @media screen and (max-width: 1160px) {
    flex-basis: 100%;
  }
`;
const StyledHeading = styled.h4`
  text-align: center;
  margin: 0;
  padding: 1em 0;
  font-size: 2em;
  @media screen and (max-width: 1050px) {
    // text-align: left;
    // padding: 0;
    // text-decoration: underline;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  // padding: 4em 0 0 0;
  @media screen and (max-width: 1200px) {
    // padding: 2em 0 0 0;
  }
`;

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
