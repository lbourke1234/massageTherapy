"use client";

import React from "react";
import styled from "styled-components";
import { Col_2, Row } from "../../styledComponents/Containers";

const StyledImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  @media screen and (max-width: 800px) {
    flex-basis: 100%;
    width: 100%;
    height: 550px;
  }
`;
const RightContainer = styled(Col_2)`
  padding-right: 16px;
  @media screen and (max-width: 800px) {
    flex-basis: 100%;
    width: 100%;
    order: 1;
    padding: 1em;
  }
`;
const LeftContainer = styled(Col_2)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-basis: 100%;
    width: 100%;
    order: 2;
  }
`;

const Text = styled.p`
  font-size: 1.2em;
  font-style: italic;
  @media screen and (max-width: 800px) {
    // padding: 0 0 2em 0;
    font-size: 1em;
  }
`;
const Heading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 800px) {
    padding: 1em 0 0 0;
    font-size: 2em;
  }
`;
const ContentContainer = styled.div`
  width: 70%;
`;

const StyledRow = styled(Row)`
  padding-bottom: 1em;
`;

const Top = ({ data }) => {
  return (
    <StyledRow>
      <LeftContainer>
        <ContentContainer>
          <Heading>{data.heading}</Heading>
          <Text>{data.subHeading}</Text>
        </ContentContainer>
      </LeftContainer>
      <RightContainer>
        <StyledImage src={data.subImage} alt={data.subImageAlt} />
      </RightContainer>
    </StyledRow>
  );
};

export default Top;
