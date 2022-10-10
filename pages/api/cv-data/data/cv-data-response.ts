import moment from "moment";
import { CVData } from "../../../../utils/types";

export const cvDataResponse: CVData = {
  id: 1,
  fullName: "Nathan Chiverton",
  position: "Front End Developer",
  gitHubUrl: "https://github.com/nchiv92",
  linkedInUrl: "https://www.linkedin.com/in/nathan-chiverton-3bb509114/",
  skills: [
    "React",
    "Angular",
    "SCSS",
    "Styled Components",
    "Redux",
    "RxJs",
    "mobX",
  ],
  jobExperience: [
    {
      id: 1,
      companyName: "Dropless",
      beginDate: moment("2021-05").format("MM/YYYY"),
      jobTitle: "Lead Portal Developer",
      duties: [
        `React, React Native,
  Angular | RxJs, MobX | SASS, JSS | Node, Koa,
  Sequelize/SQL.`,
      ],
    },
    {
      id: 2,
      companyName: "SG Digital",
      beginDate: moment("2018-05").format("MM/YYYY"),
      endDate: moment("2021-05").format("MM/YYYY"),
      jobTitle: "Associate Frontend Developer",
      duties: [`React, SASS.`],
    },
    {
      id: 3,
      companyName: "Silicon Rhino",
      beginDate: moment("2017-07").format("MM/YYYY"),
      endDate: moment("2018-06").format("MM/YYYY"),
      jobTitle: "Graduate Full Stack Developer",
      duties: [`React, Angular, Typescript, Sass, Node, MongoDB.`],
    },
  ],
};
