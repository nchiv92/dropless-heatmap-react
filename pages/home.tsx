import React from "react";
import NavBar from "../components/nav-bar";
import { AppMain, BodyContainer } from "../styles/app.styles";
import Experience from "./experience";
import SideProjects from "./side-projects";
import Welcome from "./welcome";

const Home = (props: any) => {
  return (
    <AppMain>
      <NavBar />
      <BodyContainer>
        <Welcome />
        <Experience />
        <SideProjects />
      </BodyContainer>
    </AppMain>
  );
};

export default Home;
