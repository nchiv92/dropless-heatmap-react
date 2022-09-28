import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import SideNavigation from "../side-navigation/side-navigation";
import About from "../about/about";
import SideProjects from "../side-projects/side-projects";

const mapStateToProps = (state: any) => {
  return {
    currentIndex: state.currentIndex,
  };
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavigation />
        <div className="bodyContainer">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/side-projects" element={<SideProjects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(App);
