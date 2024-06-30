import { mainCream } from "@/app/styledComponents/globalStyles";
import styled from "styled-components";

export const Heading = styled.h4`
  color: black;
  text-align: center;
  font-size: 2em;
`;
export const StyledContainerFluid = styled.div`
  display: flex;
  flex-direction: column;
  background: ${mainCream};
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 2em 0;
`;
export const Column = styled.div`
  flex-basis: 33.33%;
  @media screen and (max-width: 1300px) {
    flex-basis: 50%;
  }
  @media screen and (max-width: 900px) {
    flex-basis: 100%;
    margin: 0 5em;
  }
  @media screen and (max-width: 700px) {
    flex-basis: 100%;
    margin: 0;
  }
`;
