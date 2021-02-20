import { createStore, combineReducers } from 'redux';

import playlistReducer from './playlistReducer';

const initialState = {};
const reducer = combineReducers({
  playlist: playlistReducer,
});

const store = createStore(reducer, initialState);
const getStore = () => store;

export { store, getStore };
