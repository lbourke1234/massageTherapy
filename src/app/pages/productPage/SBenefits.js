import styled from "styled-components";

export const Heading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
export const UList = styled.ul``;
export const ListItem = styled.li`
  font-size: 1.2em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
export const ListContainer = styled.div`
  display: flex;
`;
export const Container = styled.div`
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
