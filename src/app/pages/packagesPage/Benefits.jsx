import React from "react";
import styled from "styled-components";
import { Container, Heading, ListContainer, ListItem, UList } from "./SBenefits";

const Benefits = ({ data }) => {
  return (
    <Container key={data.key}>
      <Heading>Benefits:</Heading>
      <ListContainer>
        <UList>
          {data.benefits.map((benefit, key) => (
            <ListItem key={key}>{benefit} </ListItem>
          ))}
        </UList>
      </ListContainer>
    </Container>
  );
};

export default Benefits;
