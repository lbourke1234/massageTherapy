import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #0056b3;
  }
`;
export const StyledExtraButton = styled.button`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #6c757d;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
`;
export const StyledSquareImage = styled.img`
  ${(props) => ("width: " + props.width ? props.width : "100%")}
  ${(props) => (props.height ? "width: " + props.height : "")}
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
  border-radius: 8px; /* Adjust border radius as needed */
`;
export const MassageLogo = styled.span`
  font-family: "Inter", sans-serif;
`;
export const ListItem = styled.li`
  font-size: 1.2em;
`;
