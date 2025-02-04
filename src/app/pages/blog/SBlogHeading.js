import styled from "styled-components";

export const Container = styled.div`
  height: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;
export const Heading = styled.p`
  font-size: 2em;
  // font-weight: 600;
`;
export const Line = styled.hr`
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
  width: 25em;
  margin: 10px auto 30px;
  @media screen and (max-width: 500px) {
    width: 10em;
  }
`;
