import React from "react";
import { packageData } from "../../data/treatmentData";
import {
  Container,
  ContentContainer,
  Heading,
  PackageHeading,
  SubHeading,
  Text,
} from "./SHowDoesItWork";

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
