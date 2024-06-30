"use client";

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
  // height: 40vh;
  //   width: 70%;
  padding-top: 1em;
  margin: auto;
  background: ${mainCream};
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 543px) {
    padding: 2em 0;
    height: auto;
  }
`;
const ContentContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const WhoCanBenefit = ({ data }) => {
  return (
    <Container key={data.key}>
      <ContentContainer>
        <Heading>Who can benefit from it?</Heading>
        {/* {data.whoCanBenefit.map((bullet) => (
          <Text>{bullet}</Text>
        ))} */}
        {data.whoCanBenefit.map((bullet, inx) => {
          const index = bullet.indexOf("Happy guts package");
          if (index !== -1) {
            return (
              <Text key={inx}>
                {bullet.substring(0, index)}
                <strong>Happy guts package</strong>
                {bullet.substring(index + "Happy guts package".length)}
              </Text>
            );
          }
          return <Text key={inx}>{bullet}</Text>;
        })}
      </ContentContainer>
    </Container>
  );
};

export default WhoCanBenefit;
