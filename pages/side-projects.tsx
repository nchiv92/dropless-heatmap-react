import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFootballData } from "../store/reducers/FootballDataReducer";
import { RootState } from "../store";
import { FootballData } from "../utils/types";
import { SideProjectsContainer } from "../styles/side-projects.styles";

const SideProjects = (props: any) => {
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch();
  const data: FootballData = useSelector((state: RootState) => {
    return state.footballData.data;
  });
  useEffect(() => {
    dispatch(fetchFootballData());
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [data]);

  return (
    <SideProjectsContainer id="side-projects">
      {fetching ? "Loading" : "coming soon..."}
    </SideProjectsContainer>
  );
};

export default SideProjects;
