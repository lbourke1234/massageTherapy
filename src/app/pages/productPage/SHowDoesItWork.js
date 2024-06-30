import { mainCream } from "@/app/styledComponents/globalStyles";
import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.2em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
export const Heading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
export const Container = styled.div`
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
export const ContentContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
