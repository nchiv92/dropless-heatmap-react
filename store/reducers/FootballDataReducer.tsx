import { FootballData } from "../../utils/types";
import {
  FootballDataActionTypes,
  setData,
} from "../actions/FootballDataActions";

interface State {
  data: FootballData;
}

const initialState: State = {
  data: {},
};

export const footballDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FootballDataActionTypes.SET_DATA: {
      return { ...state, data: action.payload.data };
    }
    default:
      return state;
  }
};

export const fetchFootballData = () => async (dispatch: any, getState: any) => {
  const data = await fetch("http://localhost:3001/footballdata");
  dispatch(setData(await data.json()));
};
