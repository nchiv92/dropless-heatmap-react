import { CVData } from "../../utils/types";
import { CVDataActionTypes, setData } from "../actions/CVDataActions";

interface State {
  data: CVData;
}

const initialState: State = {
  data: {
    fullName: "",
    position: "",
    linkedInUrl: "",
    gitHubUrl: "",
    skills: [],
    jobExperience: [],
  },
};

export const cvDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CVDataActionTypes.SET_CV_DATA: {
      return { ...state, data: action.payload.data };
    }
    default:
      return state;
  }
};

export const fetchCvData = () => async (dispatch: any, getState: any) => {
  const response = await fetch("http://localhost:3001/cv");
  dispatch(setData(await response.json()));
};
