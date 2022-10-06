import React from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Welcome from "./welcome";
import SideProjects from "./side-projects";
import NavBar from "../components/nav-bar";
import Experience from "./experience";
import {
  AppContainer,
  AppMain,
  BodyContainer,
  LoadingSpinnerContainer,
  LoadingSpinnerIcon,
} from "../styles/index.styles";
import { fetchCvData } from "../store/reducers/CVDataReducer";

const App = () => {
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCvData());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 5000);
  }, []);
  return (
    <AppContainer>
      {fetching ? (
        <LoadingSpinnerContainer>
          <LoadingSpinnerIcon icon={faSpinner} />
        </LoadingSpinnerContainer>
      ) : (
        <AppMain>
          <NavBar />
          <BodyContainer>
            <Welcome />
            <Experience />
            <SideProjects />
          </BodyContainer>
        </AppMain>
      )}
    </AppContainer>
  );
};

export default connect(() => ({}))(App);
