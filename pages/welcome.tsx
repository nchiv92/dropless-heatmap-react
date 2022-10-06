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
  WelcomePageTitle,
  WelcomePageTitleName,
  WelcomePageTitleNameLetter,
  WelcomePageTitleWrapper,
} from "../styles/welcome.styles";
import { CVData } from "../utils/types";
import { RootState } from "../store";

interface FullNameProps {
  fullName: string;
}

const FullName = (props: FullNameProps) => {
  const nameArray = props.fullName?.split(" ");
  const array1 = nameArray[0]?.split("");
  const array2 = nameArray[1]?.split("");

  return (
    <WelcomePageTitle>
      <WelcomePageTitleName>
        {array1.map((letter, index) => {
          return (
            <WelcomePageTitleNameLetter key={index}>
              {letter}
            </WelcomePageTitleNameLetter>
          );
        })}
      </WelcomePageTitleName>
      <WelcomePageTitleName>
        {array2.map((letter, index) => {
          return (
            <WelcomePageTitleNameLetter key={index}>
              {letter}
            </WelcomePageTitleNameLetter>
          );
        })}
      </WelcomePageTitleName>
    </WelcomePageTitle>
  );
};

const Welcome = () => {
  const data: CVData = useSelector((state: RootState) => {
    return state.cvData.data;
  });

  return (
    <WelcomePageContainer id="welcome">
      <WelcomePageTextWrapper>
        <WelcomePageTitleWrapper>
          {data.fullName && <FullName fullName={data?.fullName} />}
          <WelcomePageSocialIconWrapper href={data.gitHubUrl} target="_blank">
            <WelcomePageSocialIcon icon={faGithub} />
          </WelcomePageSocialIconWrapper>
          <WelcomePageSocialIconWrapper href={data.linkedInUrl} target="_blank">
            <WelcomePageSocialIcon icon={faLinkedin} />
          </WelcomePageSocialIconWrapper>
        </WelcomePageTitleWrapper>
        <WelcomePageSubTitle>{data.position}</WelcomePageSubTitle>
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
