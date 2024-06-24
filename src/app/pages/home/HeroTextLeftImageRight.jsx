"use client";

import React from "react";
import { Col_2, Container, ContainerFluid, Row } from "../../styledComponents/Containers";
import styled from "styled-components";
import { mainBackground, mainCream } from "../../styledComponents/globalStyles";

const StyledContainer = styled(ContainerFluid)`
  background: ${mainCream};
`;
const InnerContainer = styled(Container)`
  padding: 0 2em 0 2em;
  @media only screen and (max-height: 850px) and (min-width: 1051px) {
    padding-top: 6em;
  }
  @media only screen and (max-height: 700px) and (min-width: 1051px) {
    padding-top: 9em;
  }
  @media only screen and (max-height: 650px) and (min-width: 1051px) {
    padding-top: 11em;
    padding-bottom: 1em;
  }
  @media screen and (max-width: 800px) {
    padding: 2em 0 2em 0;
  }
`;
const StyledCol = styled(Col_2)`
  height: 100vh;
  display: flex;

  @media screen and (max-width: 1050px) {
    flex-basis: 100%;
    height: 40vh;
    // padding-bottom: 1em;
    order: 2;
  }
  @media only screen and (max-height: 650px) and (min-width: 1051px) {
    height: auto;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    // width: 100%;
  }
`;
const ImageCol = styled(Col_2)`
  height: 100vh;
  @media screen and (max-width: 1050px) {
    order: 1;
    margin-top: 9em;
    flex-basis: 100%;
    height: 50vh;
  }
  @media only screen and (max-height: 650px) and (min-width: 1051px) {
    height: auto;
  }
  @media screen and (max-width: 992px) {
    margin-top: 3.5em;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    padding: 1em;
    // margin: 1em;
  }
`;
const Heading = styled.h1`
  color: black;
  font-size: 3em;
  @media screen and (max-width: 600px) {
    font-size: 2em;
    // width: 100vw;
  }
`;
const SubHeading = styled.h2`
  color: black;
  font-size: 1.5em;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
  object-position: -210px;
  @media screen and (max-width: 1050px) {
    object-position: 0;
  }
  @media screen and (max-width: 800px) {
    // width: 100vw;
    object-position: 0;
    height: 500px;
    // padding: 1em;
    border-radius: 30px;
    background: ${mainBackground};
  }
  @media screen and (max-width: 450px) {
    object-position: -130px;
  }
  @media screen and (max-width: 380px) {
    // object-position: -100px;
  }
  @media screen and (max-width: 380px) {
    // object-position: -140px;
  }
`;
const StyledExtraButton = styled.button`
  padding: 0.7rem 1.75rem;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 2em 0 0 0;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 1em;
  }
`;
// const InnerImageContainer = styled.div`
//   padding: 1em;
// `;

const HeroTextLeftImageRight = () => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <StyledContainer>
      <Row>
        <StyledCol>
          <InnerContainer>
            <Heading>MASSAGE THERAPY AND NUTRITIONAL ADVICE TAILORED TO YOUR NEEDS</Heading>
            <SubHeading>
              A Central London clinic offering a personalised approach to health
            </SubHeading>
            <div>
              <StyledExtraButton onClick={() => goToExternalSite()}>Book Now!</StyledExtraButton>
            </div>
          </InnerContainer>
        </StyledCol>
        <ImageCol>
          {/* <InnerImageContainer> */}
          <StyledImage
            src="resources/Marta_Osteopath-20.jpg"
            alt="Marta Suchanska, massage therapist based in London"
          />
          {/* </InnerImageContainer> */}
        </ImageCol>
      </Row>
    </StyledContainer>
  );
};

export default HeroTextLeftImageRight;
