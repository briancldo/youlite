import { getStore } from './index';

function dispatch(action) {
  const store = getStore();
  store.dispatch(action);
}

export { dispatch };
