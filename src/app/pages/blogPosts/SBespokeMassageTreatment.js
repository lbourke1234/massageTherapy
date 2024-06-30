import styled from "styled-components";

export const SubHeading = styled.h3`
  font-size: 2em;
  font-weight: 600;
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`;
export const Text = styled.p`
  font-size: 1.1em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
export const ListItem = styled.li`
  font-size: 1.2em;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
export const Image = styled.img`
  height: 50vh;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
`;
export const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  color: black;
  width: 70%;
  margin: auto;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;
export const ContentContainer = styled.div`
  padding-top: 1em;
`;
export const Button = styled.button`
  padding: 0.7rem 2.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 1em 0 0 0;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
`;
