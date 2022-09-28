import { useState } from "react";
import { JobExperienceData } from "../../utils/types";
import "./about.scss";
import { experienceData } from "./experience-data";

interface ItemProps {
  item: JobExperienceData;
}

const ExperienceItem = (props: ItemProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const { item } = props;

  return (
    <div
      className={"about__experience__imageWrapper"}
      onMouseEnter={() => setShowDescription((prev) => !prev)}
      onMouseLeave={() => setShowDescription((prev) => !prev)}
    >
      {showDescription ? (
        item.duties.map((duty) => {
          return <span>{duty}</span>;
        })
      ) : (
        <div className={"about__experience__imageWrapper__main"}>
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
      <div className={"about__experience"}>
        {experienceData.map((item, i) => {
          return <ExperienceItem key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default About;
