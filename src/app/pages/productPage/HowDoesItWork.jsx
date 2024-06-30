"use client";

import React from "react";
import { Container, ContentContainer, Heading, Text } from "./SHowDoesItWork";

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
