import { AnyAction } from "redux";
import { RootState } from "..";
import { CVData } from "../../utils/types";
import { CVDataActionTypes, setData } from "../actions/CVDataActions";

interface State {
  data: CVData;
}

const initialState: State = {
  data: {
    id: 0,
    fullName: "",
    position: "",
    linkedInUrl: "",
    gitHubUrl: "",
    skills: [],
    jobExperience: [],
  },
};

export const cvDataReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CVDataActionTypes.SET_CV_DATA: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};

export const fetchCvData = () => async (dispatch: any, getState: any) => {
  const response = await fetch("http://localhost:3000/api/cv");
  dispatch(await setData(await response.json()));
};

export const selectCvDataState = (state: RootState) => state.cvData.data;
