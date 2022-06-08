import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { switchTab } from '../store/actions/index';
import App from '../components/app/App';

/**
 * @ignore
 * @param index
 * @returns {{currentIndex: number}}
 */

const mapStateToProps = (state) => {
    return {
        currentIndex: state.navigationReducer | state.navigationReducer.navIndex
    }
}

/**
 * @ignore
 * @param dispatch
 * @returns {{switchIndex: switchIndex}}
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
    switchIndex: ( navIndex: number) => {
        dispatch(switchTab(navIndex))
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(App)