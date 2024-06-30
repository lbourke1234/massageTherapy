import { GiHamburgerMenu } from "react-icons/gi";

const { default: styled } = require("styled-components");

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8em;
  @media only screen and (max-width: 991px) {
    height: auto;
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Text = styled.li`
  font-weight: 400;
  margin: 0 0.5em;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const IconsContainer = styled.div`
  margin-right: 20em;
  @media screen and (max-width: 1230px) {
    margin: 0;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const StyledExtraButton = styled.button`
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
  margin: 0;
  background: white;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const StyledExtraButtonMobile = styled.button`
  display: none;
  color: black;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #477e81;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 0;
  background: white;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  @media screen and (max-width: 991px) {
    display: inline-block;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export const NavContent = styled.nav`
  width: 94%;
  margin: auto;
`;

export const StyledNav = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: ${(props) => props.top}px;
  transition: all 300ms ease-in-out;
  width: 100%;
`;

export const MobileLogoContainer = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    display: inline-block;
  }
`;

export const MobileMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HamburgerMenuStyled = styled(GiHamburgerMenu)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: inline-block;
  }
`;
