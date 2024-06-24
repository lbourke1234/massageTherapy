import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 2em;
  text-align: center;
  padding: 0.2em;
  color: #0ae061;
`;

const Toast = ({ message }) => {
  return <Text>{message}</Text>;
};

export default Toast;
