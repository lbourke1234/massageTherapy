import React from "react";
import styled from "styled-components";
import { packageData } from "../../data/treatmentData";
import { mainBackground, mainCream } from "../../styledComponents/globalStyles";

const Text = styled.p`
  font-size: 1.2em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
const Heading = styled.p`
  font-size: 2em;
  // text-align: center;
  // font-weight: 600;
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
const Container = styled.div`
  background: ${mainCream};
  color: black;
  // height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0 1em 0;
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

const PackageHeading = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  // font-style: italic;
  @media screen and (max-width: 800px) {
    font-size: 1em;
    text-decoration: underline;
  }
`;
const SubHeading = styled.p`
  font-size: 1.2em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

const HowDoesItWork = ({ data }) => {
  return (
    <Container key={data.key}>
      <ContentContainer>
        <Heading>How does it work?</Heading>
        <SubHeading>
          I created Packages to help you get the most out of your personal experience. Each bundle
          combines massage therapy with another tool to enhance the many benefits of your session.
        </SubHeading>
        {packageData.map((data, index) => (
          <div key={index}>
            <PackageHeading>{data.heading}</PackageHeading>
            <Text>{data.text}</Text>
          </div>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default HowDoesItWork;
