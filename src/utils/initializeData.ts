import { useEffect, useRef, useState } from 'react';

function useInitializeState(initializer, initializerArgs, initialState = {}) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const initialize = async () => {
      const args = initializerArgs || [];
      const data = await initializer(...args);
      setState(data);
    }
    initialize();
  }, []);

  return [state, setState];
}

function useInitializeRef(initializer, initializerArgs, initialValue = {}) {
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
