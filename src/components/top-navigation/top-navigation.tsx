import React from 'react';
import './top-navigation.scss';

const TopNavigation = (props) => {

    const {currentIndex, switchIndex} = props;
    
    const switchTab = (index) => {
        switchIndex(index)
    }

    return (
        <div className="topNavigation">
            <div className="navButtons">
                <button className={(currentIndex === 0 ? 'active' : '')} onClick={() => switchTab(0)}> About </button>
                <button className={(currentIndex === 1 ? 'active' : '')} onClick={() => switchTab(1)}> Map </button>
            </div>
        </div>
    )

}

export default TopNavigation