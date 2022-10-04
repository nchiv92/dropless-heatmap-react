import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  WelcomePageContainer,
  WelcomePageScrollIcon,
  WelcomePageSocialIcon,
  WelcomePageSocialIconWrapper,
  WelcomePageSubTitle,
  WelcomePageTechnologiesItem,
  WelcomePageTechnologiesWrapper,
  WelcomePageTextWrapper,
  WelcomePageTitle,
  WelcomePageTitleWrapper,
} from "./welcome.styles";

const Welcome = () => {
  const technologies = [
    "React",
    "Angular",
    "SCSS",
    "Styled Components",
    "Redux",
    "RxJs",
    "mobX",
  ];

  // const redirectToUrl = (link: string) => {};

  const onClickHandler = () => {
    console.log("hello");
  };
  return (
    <WelcomePageContainer>
      <WelcomePageTextWrapper>
        <WelcomePageTitleWrapper>
          <WelcomePageTitle>Nathan Chiverton</WelcomePageTitle>
          <WelcomePageSocialIconWrapper href="https://www.linkedin.com/in/nathan-chiverton-3bb509114/">
            <WelcomePageSocialIcon icon={faGithub} />
          </WelcomePageSocialIconWrapper>
          <WelcomePageSocialIconWrapper href="https://github.com/nchiv92">
            <WelcomePageSocialIcon icon={faLinkedin} />
          </WelcomePageSocialIconWrapper>
        </WelcomePageTitleWrapper>
        <WelcomePageSubTitle>
          A Frontend Developer, with 5+ years experience working with modern
          technologies, such as:
        </WelcomePageSubTitle>
        <WelcomePageTechnologiesWrapper>
          {technologies.map((item, index) => {
            return (
              <WelcomePageTechnologiesItem key={index}>
                {item}
              </WelcomePageTechnologiesItem>
            );
          })}
        </WelcomePageTechnologiesWrapper>
      </WelcomePageTextWrapper>

      <WelcomePageScrollIcon icon={faArrowDown} />
    </WelcomePageContainer>
  );
};

export default Welcome;
