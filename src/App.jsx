import './App.scss';
import BristolMap from './components/map/map';
import TopNavigation from './components/top-navigation/top-navigation';
import About from './components/about/about';



const App = (props) => {

  const {currentIndex, switchIndex} = props;
    return (
      <div className="App">
        <TopNavigation switchIndex={switchIndex} currentIndex={currentIndex}/>
        {currentIndex === 0 ? <About/> : <BristolMap/>}
      </div>
    );
}

export default App
