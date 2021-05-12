import { useEffect, useRef, useState } from 'react';

function useInitializeState<T>(
  initializer: (...args: typeof initializerArgs) => T,
  initializerArgs: any[],
  initialState?: T
) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const initialize = async () => {
      const args = initializerArgs || [];
      const data = await initializer(...args);
      setState(data);
    }
    initialize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, setState];
}

function useInitializeRef<T>(
  initializer: (...args: typeof initializerArgs) => T,
  initializerArgs: any[],
  initialValue?: T
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

export {
  useInitializeState,
  useInitializeRef,
};
