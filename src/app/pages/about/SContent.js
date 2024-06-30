const { default: styled } = require("styled-components");

export const FirstRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 3em 0;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 470px) {
    display: block;
  }
`;
export const MainContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

export const Bespoke = styled.p`
  font-size: 1.5em;
  @media screen and (max-width: 800px) {
    text-align: left;
    // font-size: 1em;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 1500px) {
  }
  @media screen and (max-width: 500px) {
    width: 70%;
    margin: auto;
    align-items: flex-start;
  }
`;
export const BottomRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed
  border-radius: 8px; /* Adjust border radius as needed 
  @media screen and (max-width: 470px) {
    height: 400px;
  }
`;
export const ImageCol = styled.div`
  display: flex;
  flex-basis: 40%;
  @media screen and (max-width: 1050px) {
    margin: auto;
  }
  @media screen and (max-width: 800px) {
  }
`;

export const StyledLogo = styled.img`
  width: 100px;
  margin-right: 1em;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
  border-radius: 8px; /* Adjust border radius as needed */
  @media screen and (max-width: 470px) {
    display: block;
  }
`;
export const BottomRow = styled.div`
  background: #efebe0;
  display: flex;
  flex-wrap: wrap;

  color: black;
  padding: 2em 0 2em 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    padding: 2em 0;
    height: auto;
  }
`;

export const BottomCols = styled.div`
  flex-basis: 50%;
  @media screen and (max-width: 1000px) {
    flex-basis: 100%;
  }
`;
