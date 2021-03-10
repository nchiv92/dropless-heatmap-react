import { connect } from 'react-redux';
import { switchTab } from '../store/actions/index';
import TopNavigation from '../components/top-navigation/top-navigation';

/**
 * @ignore
 * @param state
 * @returns {{currentIndex: number}}
 */

const mapStateToProps = (navigationReducer) => {
    console.error('container,,,,,,,,', navigationReducer)
    return {
        currentIndex: navigationReducer.navIndex
    }
}

/**
 * @ignore
 * @param dispatch
 * @returns {{switchIndex: switchIndex}}
 */
const mapDispatchToProps = dispatch => ({
    switchIndex: navIndex => {
        dispatch(switchTab(navIndex))
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TopNavigation)