import moment from "moment";

export interface FootballData {
  type?: string;
  value?: string;
  guessed?: boolean;
}

export interface JobExperienceData {
  companyName: string;
  logoUrl: string;
  beginDate: string;
  endDate?: string;
  jobTitle: string;
  duties: string[];
}
