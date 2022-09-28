import moment from "moment";
import { JobExperienceData } from "../../utils/types";
import dropless from "../../assets/images/dropless.png";
import sgdigital from "../../assets/images/sgdigital.png";
import siliconrhino from "../../assets/images/siliconrhino.png";

// TODO: Extract data into backend
export const experienceData: JobExperienceData[] = [
  {
    companyName: "Dropless",
    logoUrl: dropless,
    beginDate: moment("2021-05").format("MM/YYYY"),
    jobTitle: "Lead Portal Developer",
    duties: [
      `
  Duties include: Maintenance (Technology
  upgrades/improvements), product
  roadmapping & code reviews`,
      `Technologies include: React, React Native,
  Angular | RxJs, MobX | SASS, JSS | Node, Koa,
  Sequelize/SQL.`,
    ],
  },
  {
    companyName: "SG Digital",
    logoUrl: sgdigital,
    beginDate: moment("2018-05").format("MM/YYYY"),
    endDate: moment("2021-05").format("MM/YYYY"),
    jobTitle: "Associate Frontend Developer",
    duties: [
      `Example of customers - William Hill, Golden
          Nugget & Danske Spil`,
      `Technologies: React, SCSS`,
    ],
  },
  {
    companyName: "Silicon Rhino",
    logoUrl: siliconrhino,
    beginDate: moment("2017-07").format("MM/YYYY"),
    endDate: moment("2018-06").format("MM/YYYY"),
    jobTitle: "Graduate Full Stack Developer",
    duties: [
      `Examples of applications worked on - Bubble, FalconDHQ and Polimapper.`,
      `Technologies: React, Angular, Typescript, Sass, Node, MongoDB.`,
    ],
  },
];
