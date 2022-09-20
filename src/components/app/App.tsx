import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.scss";
import SideNavigation from "../side-navigation/side-navigation";
import About from "../about/about";
import Data from "../data/data";

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
          <TransitionGroup>
            {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
            <CSSTransition
              key={window.location.pathname}
              classNames={"fade"}
              timeout={300}
              style={"height: 100%; width: 100%"}
            >
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/data" element={<Data />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(App);
