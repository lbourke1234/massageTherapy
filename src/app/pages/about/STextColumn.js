import styled from "styled-components";

export const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  text-align: justify;
  flex-basis: 60%;
  @media screen and (max-width: 1050px) {
    flex-basis: 100%;
    padding: 1em 0 0 0;
    height: auto;
  }
`;

export const Text = styled.p`
  font-size: 1.1em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

export const Line = styled.hr`
  width: 25em;
  margin: 10px auto 30px;
  @media screen and (max-width: 500px) {
    width: 10em;
  }
`;
export const Heading = styled.h4`
  text-align: center;
  padding: 0 0 0 0;
`;
