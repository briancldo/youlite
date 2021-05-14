import { getStore } from './store';
import { dispatch } from './store/load';
import { RemoveTokenAction, SetTokenAction } from './store/store.types';

function getToken() {
  return getStore().getState().auth?.token;
}

function setToken(token: string) {
  localStorage.setItem('token', token);
  const setTokenAction: SetTokenAction = {
    type: 'SET_TOKEN',
    token,
  };
  dispatch(setTokenAction);
}

const removeTokenAction: RemoveTokenAction = { type: 'REMOVE_TOKEN' };

function removeToken() {
  localStorage.removeItem('token');
  dispatch(removeTokenAction);
}

export { getToken, setToken, removeToken };
