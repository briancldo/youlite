import React from 'react';

import { useInitializeState } from '../../utils/initializeState';
import { getPlaylists } from '../../utils/youtube.api';

export default function HomePage() {
  const [playlists, setPlaylists] = useInitializeState(getPlaylists);

  console.log({ playlists })

  return (
    <>
      <h1>Playlists</h1>
      <p>{JSON.stringify(playlists, null, 2)}</p>
    </>
  );
}
