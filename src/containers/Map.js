import { connect } from 'react-redux';
import { addPosition } from '../store/actions/index';
import BristolMap from '../components/map/map';

const mapStateToProps = (state) => {
    return {
        positions: state.mapReducer.positions
    }
}

const mapDispatchToProps = dispatch => ({
    addNewLocation: navIndex => {
        dispatch(addPosition(navIndex))
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BristolMap)