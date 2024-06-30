const { ContainerFluid } = require("@/app/styledComponents/Containers");
const { default: styled } = require("styled-components");

export const StyledContainer = styled(ContainerFluid)`
  background-color: white;
  padding: 2.5rem;
  box-shadow: 2px 2px 10px 3px rgb(225, 225, 225);
  margin: 2em;
  height: 40em;
  color: black;
  border-radius: 15px;
  @media screen and (max-width: 900px) {
    height: auto;
    padding: 1em;
    margin: 2em 0;
  }
`;

export const StyledName = styled.p`
  font-size: 2em;
  text-align: center;
  margin-block: 0;
  // height: 3em;
  @media screen and (max-width: 800px) {
    font-size: 1.4em;
  }
`;
export const StyledTitle = styled.p`
  // height: 4em;
`;
// export const NameContainer = styled.div`
//   height: 6em;
// `;
export const Text = styled.p`
  text-align: justify;
`;
