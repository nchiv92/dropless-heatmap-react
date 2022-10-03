import { useState } from "react";
import { JobExperienceData } from "../../utils/types";
import "./about.scss";
import { experienceData } from "./experience-data";

interface ItemProps {
  item: JobExperienceData;
  index: number;
}

const ExperienceItem = (props: ItemProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const { item } = props;

  return (
    <div
      key={props.index}
      className={"about__experience__imageWrapper"}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      {showDescription ? (
        item.duties.map((duty, index) => {
          return (
            <span
              data-testid={`experience-technologies-text-${index}`}
              key={index}
            >
              {duty}
            </span>
          );
        })
      ) : (
        <div
          className={"about__experience__imageWrapper__main"}
          data-testid={`experience-companies-text-${props.index}`}
        >
          <img
            className={"about__experience__imageWrapper__image"}
            src={item.logoUrl}
            alt={item.companyName}
          />
          <span>{item.jobTitle}</span>
          <span>
            {item.beginDate} - {item.endDate}
          </span>
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className={"about"}>
      <div className={"about__biography"}>
        <h1>Nathan Chiverton</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div data-testid={"experience-section"} className={"about__experience"}>
        {experienceData.map((item, i) => {
          return <ExperienceItem key={i} item={item} index={i} />;
        })}
      </div>
    </div>
  );
};

export default About;
