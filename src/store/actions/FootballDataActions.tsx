import { FootballData } from "../../utils/types";

export const FootballDataActionTypes = {
  SET_DATA: "SET_DATA",
};

export const setData = (data: FootballData) => ({
  type: "SET_DATA",
  payload: data,
});
