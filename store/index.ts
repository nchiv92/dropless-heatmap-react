import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { footballDataReducer } from "./reducers/FootballDataReducer";
import { cvDataReducer } from "./reducers/CVDataReducer";

const rootReducer = combineReducers({
  footballData: footballDataReducer,
  cvData: cvDataReducer,
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
