import React from 'react';
import './index.css';

import { useInitializeState } from '../../utils/initializeData';
import { getPlaylists } from '../../utils/youtube.api';
import PlaylistList from '../../components/common/PlaylistList';

export default function HomePage() {
  const [playlistsData] = useInitializeState(getPlaylists, [], []);

  console.log({ playlistsData });

  return (
    <div className='main'>
      <h1>Playlists</h1>
      <PlaylistList {...{playlistsData}} />
    </div>
  );
}
