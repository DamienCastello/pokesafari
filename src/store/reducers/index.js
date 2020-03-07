import { combineReducers } from 'redux';
import catchedReducer from './catched';
import escapedReducer from './escaped';

export default combineReducers({
    catched: catchedReducer,
    escaped: escapedReducer


});