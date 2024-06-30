import { Row } from "@/app/styledComponents/Containers";
import styled from "styled-components";

export const StyledContainer = styled(Row)`
  color: black;
  padding-bottom: 1em;
  width: 75%;
  margin: auto;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;
export const Heading = styled.h2`
  font-size: 2em;
  text-align: center;
  padding: 1em 0;
  margin: 0;
  color: black;
`;
