import { mainBackground, mainCream } from "@/app/styledComponents/globalStyles";
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${mainCream};
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 0 2em 0 2em;
  @media only screen and (max-height: 850px) and (min-width: 1051px) {
    padding-top: 6em;
  }
  @media only screen and (max-height: 700px) and (min-width: 1051px) {
    padding-top: 9em;
  }
  @media only screen and (max-height: 650px) and (min-width: 1051px) {
    padding-top: 11em;
    padding-bottom: 1em;
  }
  @media screen and (max-width: 800px) {
    padding: 2em 0 2em 0;
  }
`;
export const StyledCol = styled.div`
  flex-basis: 50%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 1050px) {
    flex-basis: 100%;
    height: 40vh;
    order: 2;
  }
  @media only screen and (max-height: 650px) and (min-width: 1051px) {
    height: auto;
  }
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;
export const ImageCol = styled.div`
  flex-basis: 50%;
  height: 100vh;
  @media screen and (max-width: 1050px) {
    order: 1;
    margin-top: 9em;
    flex-basis: 100%;
    height: 50vh;
  }
  @media only screen and (max-height: 650px) and (min-width: 1051px) {
    height: auto;
  }
  @media screen and (max-width: 992px) {
    margin-top: 3.5em;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    padding: 1em;
  }
`;
export const Heading = styled.h1`
  color: black;
  font-size: 3em;
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;
export const SubHeading = styled.h2`
  color: black;
  font-size: 1.5em;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
  object-position: -210px;
  @media screen and (max-width: 1050px) {
    object-position: 0;
  }
  @media screen and (max-width: 800px) {
    object-position: 0;
    height: 500px;
    border-radius: 30px;
    background: ${mainBackground};
  }
  @media screen and (max-width: 450px) {
    object-position: -130px;
  }
`;
