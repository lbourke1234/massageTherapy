import React from "react";
import { Container, Row } from "../../styledComponents/Containers";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #477e81;
  margin: 0 0 1em 0;
  border-radius: 25px;
  padding: 1.5em;
`;

const LeftCol = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em 0 0;
`;
const RightCol = styled.div`
  flex-basis: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.p`
  font-size: 1.5em;
  text-align: center;
`;
const Text = styled.p``;

const StyledSquareImage = styled.img`
  width: 250px;
  height: 250px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
  border-radius: 8px; /* Adjust border radius as needed */
`;

const CardImageLeftHeadingSubHeading = ({ heading, text, src }) => {
  return (
    <StyledContainer>
      <Row>
        <LeftCol>
          <Heading>{heading}</Heading>
          <Text>{text}</Text>
        </LeftCol>
        <RightCol>
          <StyledSquareImage src={src} alt="nothing yet" />
        </RightCol>
      </Row>
    </StyledContainer>
  );
};

export default CardImageLeftHeadingSubHeading;
