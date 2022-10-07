import React from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AppContainer } from "../styles/app.styles";
import { fetchCvData } from "../store/reducers/CVDataReducer";
import LoadingScreen from "../components/loading-screen";
import Home from "./home";

const App = () => {
  const [fetching, setFetching] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCvData());
    setFetching(true);
  }, []);

  setTimeout(() => {
    setFetching(false);
  }, 4000);

  return <AppContainer>{fetching ? <LoadingScreen /> : <Home />}</AppContainer>;
};

export default connect(() => ({}))(App);
