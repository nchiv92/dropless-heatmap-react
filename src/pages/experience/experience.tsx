import { useState } from "react";
import { JobExperienceData } from "../../utils/types";
import { experienceData } from "./experience-data";
import {
  ExperiencePageContainer,
  ExperiencePageItem,
  ExperiencePageItemRole,
  ExperiencePageItemRoleDates,
  ExperiencePageItemRoleImage,
  ExperiencePageItemRoleTitle,
  ExperiencePageItemTechnologies,
} from "./experience.styles";

interface ItemProps {
  item: JobExperienceData;
  index: number;
}

const ExperienceItem = (props: ItemProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const { item } = props;

  return (
    <ExperiencePageItem
      key={props.index}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => setShowDescription(!showDescription)}
    >
      {showDescription ? (
        item.duties.map((duty, index) => {
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
            src={item.logoUrl}
            alt={item.companyName}
          />
          <ExperiencePageItemRoleTitle>
            {item.jobTitle}
          </ExperiencePageItemRoleTitle>
          <ExperiencePageItemRoleDates>
            {item.beginDate} - {item.endDate}
          </ExperiencePageItemRoleDates>
        </ExperiencePageItemRole>
      )}
    </ExperiencePageItem>
  );
};

const Experience = () => {
  return (
    <ExperiencePageContainer data-testid={"experience-section"}>
      {experienceData.map((item, i) => {
        return <ExperienceItem key={i} item={item} index={i} />;
      })}
    </ExperiencePageContainer>
  );
};

export default Experience;
