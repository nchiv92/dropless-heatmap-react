import moment from "moment";

export interface FootballData {
  address?: string;
}

export interface JobExperienceData {
  companyName: string;
  logoUrl: string;
  beginDate: string;
  endDate?: string;
  jobTitle: string;
  duties: string[];
}
