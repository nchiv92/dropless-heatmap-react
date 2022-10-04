import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/reducers/FootballDataReducer";
import { RootState } from "../../store";
import { FootballData } from "../../utils/types";
import { SideProjectsContainer } from "./side-projects.styles";

const SideProjects = (props: any) => {
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch();
  const data: FootballData = useSelector((state: RootState) => {
    return state.footballData.data;
  });
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [data]);

  return (
    <SideProjectsContainer>
      {fetching ? "Loading" : "coming soon..."}
    </SideProjectsContainer>
  );
};

export default SideProjects;
