import './top-navigation.scss';
import logo from '../../assets/logo.svg';

const TopNavigation = (props) => {

    const {currentIndex, switchIndex} = props;
    
    const switchTab = (index) => {
        switchIndex(index)
    }

    return (
        <div className="topNavigation">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="navButtons">
                <button className={(currentIndex === 0 ? 'active' : '')} onClick={() => switchTab(0)}> About </button>
                <button className={(currentIndex === 1 ? 'active' : '')} onClick={() => switchTab(1)}> Map </button>
            </div>
        </div>
    )

}

export default TopNavigation