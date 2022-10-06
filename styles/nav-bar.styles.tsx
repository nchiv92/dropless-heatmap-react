import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavBarElement = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  top: 0;
  justify-content: flex-end;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  background: #0a192f;
  height: 75px;
`;

const NavBarButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: inherit;
`;

const NavBarButton = styled(Link)`
  border: none;
  font-size: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  outline: none;
  color: #ddffe7;
  font-weight: 600;
  transition: transform 3s ease-in-out;
  text-decoration: none;
  opacity: 0.8;
  &.active {
    border-bottom: 5px solid #ddffe7;
  }
  :hover {
    animation: fa-beat-fade 2s infinite;
    color: #ddffe7;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBarButtonText = styled.span``;

const NavBarButtonIcon = styled(FontAwesomeIcon)`
  color: #167d7f;
`;

const NavBarMobileIcon = styled.a`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-size: 2.8rem;
    cursor: pointer;
    color: #ddffe7;
  }
`;

const NavBarMobileSocialIconWrapper = styled.a`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 2.8rem;
    cursor: pointer;
    color: #ddffe7;
  }
`;

export {
  NavBarElement,
  NavBarButtons,
  NavBarButton,
  NavBarButtonIcon,
  NavBarButtonText,
  NavBarMobileIcon,
  NavBarMobileSocialIconWrapper,
};
