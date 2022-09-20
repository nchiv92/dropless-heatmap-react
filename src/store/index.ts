import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { footballDataReducer } from "./reducers/FootballDataReducer";

const rootReducer = combineReducers({
  footballData: footballDataReducer,
});

const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
