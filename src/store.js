import createHistory from "history/createBrowserHistory";

import { routerMiddleware } from "react-router-redux";

import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducers';

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

export const thunkMiddleware = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            routeMiddleware,
        ),
    ));

export default store;
