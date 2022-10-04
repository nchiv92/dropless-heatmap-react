import { connect } from "react-redux";
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
      <NavBar />
      <BodyContainer>
        <Welcome />
        <Experience />
        <SideProjects />
      </BodyContainer>
    </AppContainer>
  );
};

export default connect(mapStateToProps, () => ({}))(App);
