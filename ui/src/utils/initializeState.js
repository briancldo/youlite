import { useEffect, useState } from 'react';

function useInitializeState(initializer, initializerArgs, initialState = {}) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const initialize = async () => {
      const args = initializerArgs || [];
      const data = await initializer(...args);
      setState(data);
    }
    initialize();
  }, [initializer, initializerArgs]);

  return [state, setState];
}

export { useInitializeState };
