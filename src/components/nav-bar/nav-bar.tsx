import {
  faCodeBranch,
  faUser,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavBarButton,
  NavBarButtonIcon,
  NavBarButtons,
  NavBarButtonText,
  NavBarElement,
} from "./nav-bar.styles";

const NavBar = (props: any) => {
  return (
    <NavBarElement>
      <NavBarButtons>
        <NavBarButton end to={"/"}>
          <NavBarButtonText>{"Welcome"}</NavBarButtonText>
          <NavBarButtonIcon icon={faHand} />
        </NavBarButton>
        <NavBarButton to={"experience"}>
          <NavBarButtonText>{"Experience"}</NavBarButtonText>
          <NavBarButtonIcon icon={faUser} />
        </NavBarButton>
        <NavBarButton to={"side-projects"}>
          <NavBarButtonText>{"Side Projects"}</NavBarButtonText>
          <NavBarButtonIcon icon={faCodeBranch} />
        </NavBarButton>
      </NavBarButtons>
    </NavBarElement>
  );
};

export default NavBar;
