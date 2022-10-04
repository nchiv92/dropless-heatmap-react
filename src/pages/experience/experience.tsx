import { useState } from "react";
import { useSelector } from "react-redux";
import dropless from "../../assets/images/dropless.png";
import sgdigital from "../../assets/images/sgdigital.png";
import siliconrhino from "../../assets/images/siliconrhino.png";

import { CVData, JobExperienceData } from "../../utils/types";
import {
  ExperiencePageContainer,
  ExperiencePageItem,
  ExperiencePageItemRole,
  ExperiencePageItemRoleDates,
  ExperiencePageItemRoleImage,
  ExperiencePageItemRoleTitle,
  ExperiencePageItemTechnologies,
} from "./experience.styles";
import { RootState } from "../../store";

interface ItemProps {
  item: JobExperienceData;
  index: number;
}

const ExperienceItem = (props: ItemProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const { item } = props;

  const getLogo = () => {
    switch (item?.companyName) {
      case "Silicon Rhino":
        return siliconrhino;
        break;
      case "Dropless":
        return dropless;
        break;
      case "SG Digital":
        return sgdigital;
        break;
      default:
        return undefined;
    }
  };

  return (
    <ExperiencePageItem
      key={props.index}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => setShowDescription(!showDescription)}
    >
      {showDescription ? (
        item?.duties.map((duty, index) => {
          return (
            <ExperiencePageItemTechnologies
              data-testid={`experience-technologies-text-${index}`}
              key={index}
            >
              {duty}
            </ExperiencePageItemTechnologies>
          );
        })
      ) : (
        <ExperiencePageItemRole
          data-testid={`experience-companies-text-${props.index}`}
        >
          <ExperiencePageItemRoleImage
            src={getLogo()}
            alt={item?.companyName}
          />
          <ExperiencePageItemRoleTitle>
            {item?.jobTitle}
          </ExperiencePageItemRoleTitle>
          <ExperiencePageItemRoleDates>
            {item?.beginDate} - {item?.endDate}
          </ExperiencePageItemRoleDates>
        </ExperiencePageItemRole>
      )}
    </ExperiencePageItem>
  );
};

const Experience = () => {
  const data: CVData = useSelector((state: RootState) => {
    return state.cvData.data;
  });
  return (
    <ExperiencePageContainer data-testid={"experience-section"} id="experience">
      {data?.jobExperience.map((item, i) => {
        return <ExperienceItem key={i} item={item} index={i} />;
      })}
    </ExperiencePageContainer>
  );
};

export default Experience;
