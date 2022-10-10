import React, { useState } from "react";
import { useSelector } from "react-redux";
import droplessImg from "../public/assets/images/dropless.png";
import sgdigitalImg from "../public/assets/images/sgdigital.png";
import siliconrhinoImg from "../public/assets/images/siliconrhino.png";

import { CVData, JobExperienceData } from "../utils/types";
import {
  ExperiencePageContainer,
  ExperiencePageItem,
  ExperiencePageItemRole,
  ExperiencePageItemRoleDates,
  ExperiencePageItemRoleImage,
  ExperiencePageItemRoleTitle,
  ExperiencePageItemTechnologies,
} from "../styles/experience.styles";
import { StaticImageData } from "next/image";
import { selectCvDataState } from "../store/reducers/CVDataReducer";

interface ItemProps {
  item: JobExperienceData;
  index: number;
}

const ExperienceItem = (props: ItemProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const { item } = props;

  const getLogo = (): StaticImageData => {
    switch (item?.companyName) {
      case "Silicon Rhino":
        return siliconrhinoImg;
      case "Dropless":
        return droplessImg;
      case "SG Digital":
        return sgdigitalImg;
      default:
        return sgdigitalImg;
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
            objectFit={"none"}
            height={"150px"}
            width={"150px"}
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
  const data: CVData = useSelector(selectCvDataState);

  return (
    <ExperiencePageContainer
      data-testid={"experience-section"}
      name="experience"
    >
      {data?.jobExperience.map((item, i) => {
        return <ExperienceItem key={i} item={item} index={i} />;
      })}
    </ExperiencePageContainer>
  );
};

export default Experience;
