import { faArrowDown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  LoadingSpinner,
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
import { CVData } from "../../utils/types";
import { RootState } from "../../store";
import { fetchCvData } from "../../store/reducers/CVDataReducer";

const Welcome = () => {
  const [fetching, setFetching] = useState(true);
  const data: CVData = useSelector((state: RootState) => {
    return state.cvData.data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCvData());
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [data]);

  console.log(data);

  return (
    <WelcomePageContainer id="/">
      {fetching ? (
        <LoadingSpinner icon={faSpinner} />
      ) : (
        <WelcomePageTextWrapper>
          <WelcomePageTitleWrapper>
            <WelcomePageTitle>{data?.fullName}</WelcomePageTitle>
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
            {data?.skills?.map((item, index) => {
              return (
                <WelcomePageTechnologiesItem key={index}>
                  {item}
                </WelcomePageTechnologiesItem>
              );
            })}
          </WelcomePageTechnologiesWrapper>
        </WelcomePageTextWrapper>
      )}

      <WelcomePageScrollIcon icon={faArrowDown} />
    </WelcomePageContainer>
  );
};

export default Welcome;
