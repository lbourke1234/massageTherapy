import React from "react";
import styled from "styled-components";
import { mainBackground, mainCream } from "../../styledComponents/globalStyles";

const Text = styled.p`
  font-size: 1.2em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
const Heading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
const Container = styled.div`
  background: ${mainCream};
  padding-top: 1em;
  color: black;
  // height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    height: auto;
  }
  @media screen and (max-width: 400px) {
    height: 100%;
  }
`;
const ContentContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const HowDoesItWork = ({ data }) => {
  return (
    <Container key={data.key}>
      <ContentContainer>
        <Heading>How does it work?</Heading>
        {data.howDoesItWork.map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default HowDoesItWork;
