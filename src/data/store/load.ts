import { getStore } from "./index";
import { StoreAction } from "./store.types";

function dispatch(action: StoreAction) {
  const store = getStore();
  store.dispatch(action);
}

export { dispatch };
