import { JobExperienceData } from "../../utils/types";

export const CVDataActionTypes = {
  SET_CV_DATA: "SET_CV_DATA",
};

export const setData = async (cVData: JobExperienceData) => {
  return {
    type: "SET_CV_DATA",
    payload: cVData,
  };
};
