import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./side-projects.scss";
import { fetchData } from "../../store/reducers/FootballDataReducer";
import { RootState } from "../../store";
import { FootballData } from "../../utils/types";

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
  console.log(data);

  return (
    <div className="SideProjectContainer">
      {fetching ? "Loading" : "coming soon..."}
    </div>
  );
};

export default SideProjects;
