import { useEffect, useRef, useState } from 'react';

function useInitializeState<T>(
  initializer: (...args: typeof initializerArgs) => T | Promise<T>,
  initializerArgs: any[],
  initialState: T
) {
  const stateObj = useState(initialState);

  useEffect(() => {
    const initialize = async () => {
      const args = initializerArgs || [];
      const data = await initializer(...args);
      stateObj[1](data);
    };
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return stateObj;
}

function useInitializeRef<T>(
  initializer: (...args: typeof initializerArgs) => T | Promise<T>,
  initializerArgs: any[],
  initialValue: T
) {
  const ref = useRef(initialValue);

  useEffect(() => {
    const initialize = async () => {
      const args = initializerArgs || [];
      const data = await initializer(...args);
      ref.current = data;
    };
    initialize();
  }, [initializer, initializerArgs]);

  return ref;
}

export { useInitializeState, useInitializeRef };
