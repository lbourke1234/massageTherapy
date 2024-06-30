import { GrInstagram, GrLinkedin, GrPhone } from "react-icons/gr";
import styled from "styled-components";

export const Instagram = styled(GrInstagram)`
  &:hover {
    cursor: pointer;
  }
`;
export const LinkedIn = styled(GrLinkedin)`
  margin: 0 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const Phone = styled(GrPhone)`
  &:hover {
    cursor: pointer;
  }
`;
export const ContactContainer = styled.a`
  color: black;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const MainContainer = styled.div`
  padding: 1em 0 0 0;
  color: black;
  @media screen and (max-width: 800px) {
    display: flex;
    // justify-content: center;
  }
`;
export const ListElement = styled.li`
  list-style: none;
  padding: 0 0 1em 0;
`;
export const ListHeading = styled.li`
  color: rgb(253, 180, 42);
  list-style: none;
  font-size: 1.4em;
  padding: 0 0 1.5em 0;
`;
export const Copyright = styled.p`
  text-align: center;
  padding-bottom: 1em;
  color: black;
`;
