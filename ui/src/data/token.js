import { getStore } from './store';
import { dispatch } from './store/load';

function getToken() {
  return getStore().getState().auth.token;
}

function setToken(token) {
  localStorage.setItem('token', token);
  dispatch({
    type: 'SET_TOKEN',
    token,
  });
}

export {
  getToken,
  setToken,
};
