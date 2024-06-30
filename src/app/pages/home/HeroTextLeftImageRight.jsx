"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  Heading,
  ImageCol,
  InnerContainer,
  Row,
  StyledCol,
  StyledContainer,
  StyledImage,
  SubHeading,
} from "./SHeroTextLeftImageRight";

// Dynamically import the client-side button component
const ExternalClientButton = dynamic(() => import("./components/ExternalClientButton"), {
  ssr: false,
});

const HeroTextLeftImageRight = () => {
  return (
    <StyledContainer>
      <Row>
        <StyledCol>
          <InnerContainer>
            <Heading>MASSAGE THERAPY AND NUTRITIONAL ADVICE TAILORED TO YOUR NEEDS</Heading>
            <SubHeading>
              A Central London clinic offering a personalised approach to health
            </SubHeading>
            <ExternalClientButton />
          </InnerContainer>
        </StyledCol>
        <ImageCol>
          <StyledImage
            src="resources/Marta_Osteopath-20.jpg"
            alt="Marta Suchanska, massage therapist based in London"
          />
        </ImageCol>
      </Row>
    </StyledContainer>
  );
};

export default HeroTextLeftImageRight;
