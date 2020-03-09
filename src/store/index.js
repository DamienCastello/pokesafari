import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import allReducers from './reducers';
import LocalStorage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: LocalStorage
  }

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, logger));

export default store;