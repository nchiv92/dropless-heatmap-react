import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCodeBranch,
  faUser,
  faHand,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CVData } from "../utils/types";
import {
  NavBarButton,
  NavBarButtonIcon,
  NavBarButtons,
  NavBarButtonText,
  NavBarElement,
  NavBarMobileIcon,
  NavBarMobileSocialIconWrapper,
} from "../styles/nav-bar.styles";

const NavBar = (props: any) => {
  const data: CVData = useSelector((state: RootState) => {
    return state.cvData.data;
  });
  return (
    <NavBarElement>
      <NavBarButtons>
        <NavBarButton
          to={"welcome"}
          spy={true}
          smooth={true}
          duration={500}
          activeClass={"active"}
        >
          <NavBarButtonText>{"Welcome"}</NavBarButtonText>
          <NavBarButtonIcon icon={faHand} />
        </NavBarButton>
        <NavBarButton
          to={"experience"}
          spy={true}
          smooth={true}
          duration={500}
          activeClass={"active"}
        >
          <NavBarButtonText>{"Experience"}</NavBarButtonText>
          <NavBarButtonIcon icon={faUser} />
        </NavBarButton>
        <NavBarButton
          to={"side-projects"}
          spy={true}
          smooth={true}
          duration={500}
          activeClass={"active"}
        >
          <NavBarButtonText>{"Side Projects"}</NavBarButtonText>
          <NavBarButtonIcon icon={faCodeBranch} />
        </NavBarButton>
        <NavBarMobileSocialIconWrapper>
          <FontAwesomeIcon
            icon={faGithub}
            href={data?.gitHubUrl}
            target="_blank"
          />
        </NavBarMobileSocialIconWrapper>
        <NavBarMobileSocialIconWrapper>
          <FontAwesomeIcon
            icon={faLinkedin}
            href={data?.linkedInUrl}
            target="_blank"
          />
        </NavBarMobileSocialIconWrapper>
      </NavBarButtons>
      <NavBarMobileIcon>
        <FontAwesomeIcon icon={faBars} />
      </NavBarMobileIcon>
    </NavBarElement>
  );
};

export default NavBar;
