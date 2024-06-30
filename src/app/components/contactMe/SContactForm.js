import { Col_2 } from "@/app/styledComponents/Containers";
import { mainCream } from "@/app/styledComponents/globalStyles";
import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 80%;
  margin: 0 auto;
  padding: 2em 0;
  @media screen and (max-width: 700px) {
    padding: 0 0 2em 0;
  }
`;

export const FormField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.9em;
  @media screen and (max-width: 700px) {
    font-size: 0.8em;
  }
`;

export const Button = styled.button`
  padding: 0.7rem 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
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
export const StyledH3 = styled.h5`
  text-align: center;
  padding: 0 0 1em 0;
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1.5em;
  }
`;
export const MainContainer = styled.div`
  background: ${mainCream};
  color: black;
  display: flex;
  flex-wrap: wrap;
`;
export const Heading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1em;
    margin: 0;
  }
`;
export const SubHeading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1em;
  }
`;
export const LeftCol = styled(Col_2)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-basis: 100%;
    padding: 2em 0 0 0;
  }
`;
export const RightCol = styled(Col_2)`
  @media screen and (max-width: 700px) {
    flex-basis: 100%;
  }
`;
export const ContentContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 700px) {
    width: 90%;
    text-align: center;
  }
`;
export const ToastContainer = styled.div`
  display: flex: 
  justify-content: center;
  border-radius: 25px;
`;
