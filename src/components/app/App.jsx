import './App.scss';
import BristolMap from '../map/map';
import TopNavigation from '../top-navigation/top-navigation';
import About from '../about/about';


const App = (props) => {
    const { currentIndex, switchIndex } = props
    return (
      <div className="App">
        <TopNavigation switchIndex={switchIndex} currentIndex={props.currentIndex}/>
        {currentIndex === 0 ? <About/> : <BristolMap/>}
      </div>
    );
}

export default App
