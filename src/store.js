import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers';

const initialState = {};
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(ReduxPromise),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;