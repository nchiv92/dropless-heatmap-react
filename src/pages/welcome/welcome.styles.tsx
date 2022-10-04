import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WelcomePageContainer = styled.div``;

const WelcomePageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-left: 50px;
  text-align: left;
  line-height: 5px;
`;

const WelcomePageTitle = styled.h1`
  font-size: 100px;
  font-weight: 600;
`;

const WelcomePageSubTitle = styled.h2`
  font-size: 25px;
  font-weight: 100;
`;

const WelcomePageTechnologiesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;

const WelcomePageTechnologiesItem = styled.span`
  animation: fa-beat-fade 2s infinite;
`;

const WelcomePageScrollIcon = styled(FontAwesomeIcon)`
  bottom: 0;
`;

const WelcomePageTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const WelcomePageSocialIcon = styled(FontAwesomeIcon)`
  font-size: 100px;
`;

const WelcomePageSocialIconWrapper = styled.a`
  margin-left: 30px;
`;

const LoadingSpinner = styled(FontAwesomeIcon)`
  animate: fa-spin 1s infinite;
  font-size: 100px;
`;

export {
  WelcomePageContainer,
  WelcomePageScrollIcon,
  WelcomePageSubTitle,
  WelcomePageTechnologiesItem,
  WelcomePageTechnologiesWrapper,
  WelcomePageTextWrapper,
  WelcomePageTitle,
  WelcomePageSocialIcon,
  WelcomePageTitleWrapper,
  WelcomePageSocialIconWrapper,
  LoadingSpinner,
};
