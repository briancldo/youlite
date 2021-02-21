import { createStore, combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import authReducer from './authReducer';

const initialState = {};
const reducer = combineReducers({
  playlist: playlistReducer,
  auth: authReducer,
});

const store = createStore(reducer, initialState);
const getStore = () => store;

export { store, getStore };
