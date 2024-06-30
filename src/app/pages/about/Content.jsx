"use client";

import React from "react";
import styled from "styled-components";
import TextColumn from "./TextColumn";
import { mainCream } from "../../styledComponents/globalStyles";
import {
  Bespoke,
  BottomCols,
  BottomContainer,
  BottomRightContainer,
  BottomRow,
  FirstRow,
  ImageCol,
  MainContainer,
  StyledImage,
  StyledLogo,
} from "./SContent";

const Content = () => {
  return (
    <MainContainer className="text-black flex flex-col">
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
