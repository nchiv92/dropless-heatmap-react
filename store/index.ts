import { createWrapper } from "next-redux-wrapper";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { cvDataReducer } from "./reducers/CVDataReducer";

const rootReducer = combineReducers({
  cvData: cvDataReducer,
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
