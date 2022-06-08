import React from 'react';
import './App.scss';
import TopNavigation from '../top-navigation/top-navigation';
import About from '../about/about';
import Data from '../data/data';


const App = (props) => {
    const { currentIndex, switchIndex } = props
    return (
      <div className="App">
        <TopNavigation switchIndex={switchIndex} currentIndex={props.currentIndex}/>
        {currentIndex === 0 ? <About/> : <Data/>}
      </div>
    );
}

export default App
