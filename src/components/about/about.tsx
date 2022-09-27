import "./about.scss";
import dropless from "../../assets/images/dropless.png";
import sgdigital from "../../assets/images/sgdigital.png";
import siliconrhino from "../../assets/images/siliconrhino.png";

const About = () => {
  return (
    <div className={"about"}>
      <div className={"about__biography"}>
        <h1>Nathan Chiverton</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className={"about__experience"}>
        <div className={"about__experience__imageWrapper"}>
          <img
            className={"about__experience__imageWrapper__image"}
            src={dropless}
            alt={"dropless"}
          />
          <span>Lead Portal Developer</span>
          <span>2021-2022</span>
        </div>
        <div className={"about__experience__imageWrapper"}>
          <img
            className={"about__experience__imageWrapper__image"}
            src={sgdigital}
            alt={"dropless"}
          />
          <span>Associate Developer</span>
          <span>2018-2021</span>
        </div>
        <div className={"about__experience__imageWrapper"}>
          <img
            className={"about__experience__imageWrapper__image"}
            src={siliconrhino}
            alt={"dropless"}
          />
          <span>Graduate Full Stack Developer </span>
          <span>2017-2018</span>
        </div>
      </div>
    </div>
  );
};

export default About;
