import {
  AuthAction,
  AuthReducer,
  AuthReducerCollection,
  AuthState,
  SetTokenAction,
} from './store.types';

function setToken(state: AuthState, action: SetTokenAction) {
  return {
    ...state,
    token: action.token,
  };
}

function removeToken(state: AuthState) {
  return {
    ...state,
    token: undefined,
  };
}

const handlers: AuthReducerCollection = {
  SET_TOKEN: setToken as AuthReducer,
  REMOVE_TOKEN: removeToken,
};

const initialState: AuthState = {};

export default function reducer(
  state: AuthState = initialState,
  action: AuthAction
) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}
