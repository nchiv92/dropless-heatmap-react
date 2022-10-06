import { JobExperienceData } from "../../utils/types";

export const CVDataActionTypes = {
  SET_CV_DATA: "SET_CV_DATA",
};

export const setData = (cVData: JobExperienceData[]) => ({
  type: "SET_CV_DATA",
  payload: cVData,
});
