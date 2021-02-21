function setToken(state, action) {
  return {
    ...state,
    token: action.token,
  };
}

function removeToken(state) {
  return {
    ...state,
    token: undefined,
  }
}

const handlers = {
  SET_TOKEN: setToken,
  REMOVE_TOKEN: removeToken,
};

const initialState = {};

export default function reducer(state = initialState, action) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}

