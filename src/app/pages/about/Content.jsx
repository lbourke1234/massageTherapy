"use client";

import React from "react";
import styled from "styled-components";
import TextColumn from "./TextColumn";
import { mainCream } from "../../styledComponents/globalStyles";

const FirstRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 3em 0;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 470px) {
    display: block;
  }
`;
const MainContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

const Bespoke = styled.p`
  font-size: 1.5em;
  @media screen and (max-width: 1000px) {
    text-align: left;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 1500px) {
  }
  @media screen and (max-width: 500px) {
    width: 70%;
    margin: auto;
    align-items: flex-start;
  }
`;
const BottomRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed
  border-radius: 8px; /* Adjust border radius as needed 
  @media screen and (max-width: 470px) {
    height: 400px;
  }
`;
const ImageCol = styled.div`
  display: flex;
  flex-basis: 40%;
  @media screen and (max-width: 1050px) {
    margin: auto;
  }
  @media screen and (max-width: 800px) {
  }
`;

const StyledLogo = styled.img`
  width: 100px;
  margin-right: 1em;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
  border-radius: 8px; /* Adjust border radius as needed */
  @media screen and (max-width: 470px) {
    display: block;
  }
`;
const BottomRow = styled.div`
  background: #efebe0;
  display: flex;
  flex-wrap: wrap;

  color: black;
  padding: 2em 0 2em 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    padding: 2em 0;
    height: auto;
  }
`;

const BottomCols = styled.div`
  flex-basis: 50%;
  @media screen and (max-width: 1000px) {
    flex-basis: 100%;
  }
`;
const Content = () => {
  return (
    <MainContainer>
      <FirstRow>
        <ImageCol>
          <StyledImage src="resources/Marta_Osteopath-205.jpg" alt="Marta giving a back massage " />
        </ImageCol>
        <TextColumn />
      </FirstRow>
      <BottomRow>
        <BottomCols>
          <BottomContainer>
            <Bespoke>
              My goal is not only to get to the root of the problem but to equip you with knowledge
              on how to overcome it.
            </Bespoke>
          </BottomContainer>
        </BottomCols>
        <BottomCols>
          <BottomRightContainer>
            <StyledLogo
              src="resources/logo1.jpeg"
              alt="British College of BCOM Osteopathic Medicine Logo"
            />
            <StyledLogo src="resources/logo2.jpeg" alt="The Institute of Osteopathy Logo" />
          </BottomRightContainer>
        </BottomCols>
      </BottomRow>
    </MainContainer>
  );
};

export default Content;
