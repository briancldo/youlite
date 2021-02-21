function setToken(state, action) {
  return {
    ...state,
    token: action.token,
  };
}

const handlers = {
  SET_TOKEN: setToken,
};

const initialState = {};

export default function reducer(state = initialState, action) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}

