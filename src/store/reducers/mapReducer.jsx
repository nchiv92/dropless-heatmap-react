import {ActionTypes} from '../actions/index';

const initialState = {
    positions: [
        {lat: 51.45, lng: -2.5879},
        {lat: 51.50, lng: -2.5881},
        {lat: 51.45, lng: -2.58781},
        {lat: 51.45, lng: -2.58782},
        {lat: 51.45, lng: -2.58783},
        {lat: 51.46, lng: -2.58801},
        {lat: 51.47, lng: -2.5880},
        {lat: 51.47, lng: -1.5879},
    ]
}
    
const mapReducer = (state = initialState, action) => {
    if( action.type === ActionTypes.ADD_LOCATION ) {
        return { 
            ...state,
            arr: state.arr.push([action.positions])
         }    
    }
    return state
}

export default mapReducer;