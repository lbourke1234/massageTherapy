import React from "react";
import styled from "styled-components";

const Heading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
const UList = styled.ul``;
const ListItem = styled.li`
  font-size: 1.2em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
const ListContainer = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 90%;
  margin: auto;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    padding: 2em 0;
    height: auto;
  }
`;

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
