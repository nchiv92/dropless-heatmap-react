import {ActionTypes} from '../actions/index';

const initialState = {
    navIndex: 0
}
    
    
const navigationReducer = (state = initialState, action) => {
    if( action.type === ActionTypes.SWITCH_TAB ) {
        return action.payload.navIndex
    }
    return state
}

export default navigationReducer;