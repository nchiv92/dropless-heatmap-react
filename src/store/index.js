import { createStore } from 'redux';
import navigationReducer from './reducers/navigationReducer';

const initialState = {
    navigationReducer: {
        navIndex: 0
    }
}
const store = createStore(
    navigationReducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;