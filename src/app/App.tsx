import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/welcome";
import SideProjects from "../pages/side-projects/side-projects";
import NavBar from "../components/nav-bar/nav-bar";
import { Experience } from "../pages/experience";
import { AppContainer, BodyContainer } from "./App.styles";

const mapStateToProps = (state: any) => {
  return {
    currentIndex: state.currentIndex,
  };
};

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <NavBar />
        <BodyContainer>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/side-projects" element={<SideProjects />} />
          </Routes>
        </BodyContainer>
      </BrowserRouter>
    </AppContainer>
  );
};

export default connect(mapStateToProps, () => ({}))(App);
