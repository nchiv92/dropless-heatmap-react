import { combineReducers, createStore } from 'redux';
import navigationReducer from './reducers/navigationReducer';


const rootReducer = combineReducers({
    navigationReducer
})


const store = createStore(
    rootReducer
)

export default store;