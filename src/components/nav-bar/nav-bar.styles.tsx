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
  position: sticky;
  z-index: 999;
  background: rgba(5, 7, 22, 0.899);
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
  height: 75px;
  color: lightblue;
  font-weight: 600;
  transition: transform 3s ease-in-out;
  text-decoration: none;
  opacity: 0.8;
  &.active {
    border: 2px solid lightblue;
  }
  :hover {
    animation: fa-beat-fade 2s infinite;
    color: lightblue;
    text-decoration: none;
  }
`;

const NavBarButtonText = styled.span``;

const NavBarButtonIcon = styled(FontAwesomeIcon)``;

export {
  NavBarElement,
  NavBarButtons,
  NavBarButton,
  NavBarButtonIcon,
  NavBarButtonText,
};
