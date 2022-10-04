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
        <NavBarButton
          to={"/"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          activeClass="active"
        >
          <NavBarButtonText>{"Welcome"}</NavBarButtonText>
          <NavBarButtonIcon icon={faHand} />
        </NavBarButton>
        <NavBarButton
          to={"experience"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          activeClass="active"
        >
          <NavBarButtonText>{"Experience"}</NavBarButtonText>
          <NavBarButtonIcon icon={faUser} />
        </NavBarButton>
        <NavBarButton
          to={"side-projects"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          activeClass="active"
        >
          <NavBarButtonText>{"Side Projects"}</NavBarButtonText>
          <NavBarButtonIcon icon={faCodeBranch} />
        </NavBarButton>
      </NavBarButtons>
    </NavBarElement>
  );
};

export default NavBar;
