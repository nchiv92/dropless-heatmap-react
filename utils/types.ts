export interface CVData {
  id: number;
  fullName: string;
  position: string;
  gitHubUrl: string;
  linkedInUrl: string;
  skills: string[];
  jobExperience: JobExperienceData[];
}

export interface JobExperienceData {
  id: number;
  companyName: string;
  beginDate: string;
  endDate?: string;
  jobTitle: string;
  duties: string[];
}
