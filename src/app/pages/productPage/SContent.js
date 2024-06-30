import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  color: black;
`;
export const Heading = styled.h2`
  text-align: center;
  padding: 0 0 1em 0;
  font-size: 2em;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const Button = styled(Link)`
  position: absolute;
  top: 150px;
  left: 15px;
  padding: 0.7rem 1.75rem;
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
  // margin: 0 0 0 7em;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
  @media screen and (max-width: 992px) {
    top: 65px;
    left: 15px;
    position: static;
  }
`;
export const LastMinuteButton = styled.button`
  // position: absolute;
  // top: 150px;
  // left: 15px;
  padding: 0.7rem 1.75rem;
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
  // margin: 0 0 0 7em;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
  @media screen and (max-width: 992px) {
    top: 65px;
    left: 15px;
    position: static;
  }
`;
export const LastMinuteContainer = styled.div`
  width: 70%;
  margin: auto;
  padding: 1em 0;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 1em;
`;
