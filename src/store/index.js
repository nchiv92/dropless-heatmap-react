import { combineReducers, createStore } from 'redux';
import navigationReducer from './reducers/navigationReducer';
import mapReducer from './reducers/mapReducer';


const rootReducer = combineReducers({
    mapReducer,
    navigationReducer
})


const store = createStore(
    rootReducer
)

export default store;