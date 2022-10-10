import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

import {
  WelcomePageContainer,
  WelcomePageSocialIcon,
  WelcomePageSocialIconWrapper,
  WelcomePageSubTitle,
  WelcomePageTechnologiesItem,
  WelcomePageTechnologiesWrapper,
  WelcomePageTextWrapper,
  WelcomePageTitleWrapper,
} from "../styles/welcome.styles";
import { CVData } from "../utils/types";
import CharacterShake from "../components/effects/character-shake";
import { selectCvDataState } from "../store/reducers/CVDataReducer";

const Welcome = () => {
  const data: CVData = useSelector(selectCvDataState);

  return (
    <WelcomePageContainer name="welcome">
      <WelcomePageTextWrapper>
        <WelcomePageTitleWrapper>
          {data?.fullName && (
            <CharacterShake
              elements={data?.fullName}
              fontSize={5}
              color={"#98d7c2"}
              hoverColor={"#dcbaa9"}
            />
          )}
          <WelcomePageSocialIconWrapper href={data?.gitHubUrl} target="_blank">
            <WelcomePageSocialIcon icon={faGithub} />
          </WelcomePageSocialIconWrapper>
          <WelcomePageSocialIconWrapper
            href={data?.linkedInUrl}
            target="_blank"
          >
            <WelcomePageSocialIcon icon={faLinkedin} />
          </WelcomePageSocialIconWrapper>
        </WelcomePageTitleWrapper>
        <WelcomePageSubTitle>{data?.position}</WelcomePageSubTitle>
        <WelcomePageTechnologiesWrapper>
          {data?.skills?.map((item, index) => {
            return (
              <WelcomePageTechnologiesItem key={index}>
                {item}
              </WelcomePageTechnologiesItem>
            );
          })}
        </WelcomePageTechnologiesWrapper>
      </WelcomePageTextWrapper>

      {/* <WelcomePageScrollIcon icon={faArrowDown} /> */}
    </WelcomePageContainer>
  );
};

export default Welcome;
