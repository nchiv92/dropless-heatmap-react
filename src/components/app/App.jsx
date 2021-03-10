import './App.scss';
import Map from '../../containers/Map';
import TopNavigation from '../top-navigation/top-navigation';
import About from '../about/about';


const App = (props) => {
    const { currentIndex, switchIndex } = props
    return (
      <div className="App">
        <TopNavigation switchIndex={switchIndex} currentIndex={props.currentIndex}/>
        {currentIndex === 0 ? <About/> : <Map/>}
      </div>
    );
}

export default App
