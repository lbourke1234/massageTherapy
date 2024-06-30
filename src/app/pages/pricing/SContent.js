import { ContainerFluid } from "@/app/styledComponents/Containers";
import { mainCream } from "@/app/styledComponents/globalStyles";
import styled from "styled-components";

export const Text = styled.p`
  font-size: 1em;
`;
export const Heading = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
`;
export const Container = styled.div`
  width: 60%;
  margin: auto;
  padding: 2em 0;
  @media screen and (max-width: 1500px) {
    width: 90%;
  }
`;
export const Fluid = styled(ContainerFluid)`
  background: ${mainCream};
  color: black;
`;
