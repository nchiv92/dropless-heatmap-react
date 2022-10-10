import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Element } from "react-scroll";
import styled from "styled-components";

const WelcomePageContainer = styled(Element)`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const WelcomePageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 5px;
  align-items: center;
`;

const WelcomePageSubTitle = styled.h2`
  font-size: 1.56rem;
  font-weight: 100;
`;

const WelcomePageTechnologiesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

const WelcomePageTechnologiesItem = styled.span`
  //   animation: fa-beat-fade 2s infinite;
  color: #dcbaa9;
`;

const WelcomePageScrollIcon = styled(FontAwesomeIcon)`
  bottom: 0;
`;

const WelcomePageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: sticky;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const WelcomePageSocialIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
  :hover {
    animation: fa-shake 0.2s infinite;
    color: #dcbaa9;
  }
`;

const WelcomePageSocialIconWrapper = styled.a`
  margin-left: 30px;
  color: #167d7f;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export {
  WelcomePageContainer,
  WelcomePageScrollIcon,
  WelcomePageSubTitle,
  WelcomePageTechnologiesItem,
  WelcomePageTechnologiesWrapper,
  WelcomePageTextWrapper,
  WelcomePageSocialIcon,
  WelcomePageTitleWrapper,
  WelcomePageSocialIconWrapper,
};
