import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducers from './reducers';

export default createStore(
    allReducers,
    applyMiddleware(thunk, logger)
);