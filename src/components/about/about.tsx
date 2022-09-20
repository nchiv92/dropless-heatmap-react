import React from "react";
import "./about.scss";
import dropless from "../../assets/images/dropless.png";
import sgdigital from "../../assets/images/sgdigital.jpeg";
import siliconrhino from "../../assets/images/siliconrhino.png";

const About = () => {
  return (
    <div className={"about"}>
      <div className={"about__biography"}>
        <h1>Nathan Chiverton</h1>
        Welcome to my portfolio.
      </div>
      <div className={"about__experience"}>
        <div className={"about__experience__imageWrapper"}>
          <img
            className={"about__experience__imageWrapper__image"}
            src={dropless}
            alt={"dropless"}
          />
          <span>2021-2022</span>
        </div>
        <div className={"about__experience__imageWrapper"}>
          <img
            className={"about__experience__imageWrapper__image"}
            src={sgdigital}
            alt={"dropless"}
          />
          <span>2018-2021</span>
        </div>
        <div className={"about__experience__imageWrapper"}>
          <img
            className={"about__experience__imageWrapper__image"}
            src={siliconrhino}
            alt={"dropless"}
          />
          <span>2017-2018</span>
        </div>
      </div>
    </div>
  );
};

export default About;
