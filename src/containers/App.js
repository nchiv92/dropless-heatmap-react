import { connect } from 'react-redux';
import { switchTab } from '../store/actions/index';
import App from '../components/app/App';

/**
 * @ignore
 * @param index
 * @returns {{currentIndex: number}}
 */

const mapStateToProps = (state) => {
    return {
        currentIndex: state | state.navIndex
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
)(App)