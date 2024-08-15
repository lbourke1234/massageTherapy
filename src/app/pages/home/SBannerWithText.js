import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  background-image: url("resources/webp/Marta_Osteopath-276.webp");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 400px) {
    height: auto;
  }
`;
export const ContentContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Text = styled.h3`
  font-size: 3em;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;

export const Button = styled.button`
  padding: 0.7rem 1.75rem;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #477e81;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 2em 0 0 0;
  background: white;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
`;
export const Author = styled.p`
  font-size: 1.5em;
  color: white;
  margin-block: 0;
  font-style: italic;
  @media screen and (max-width: 800px) {
    font-size: 1em;
  }
`;
export const BackgroundColor = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1300px) {
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    padding: 1em 0;
  }
`;
