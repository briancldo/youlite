import React from 'react';

import './index.css';

import { useInitializeState } from '../../utils/initializeData';
import { getPlaylistsData } from '../../utils/youtube.api';
import { get, set } from '../../data/playlist';
import PlaylistList from '../../components/common/PlaylistList';

export default function HomePage() {
  const playlistsCached = Object.keys(get.playlists()).length > 0;
  const getPlaylists = playlistsCached ? get.playlistsDataList : getPlaylistsData;
  const [playlistsData] = useInitializeState(getPlaylists, [], []);

  if (!playlistsCached && playlistsData.length > 0) set.playlistsData(playlistsData);

  return (
    <div className='homepage-main'>
      <h1>Playlists</h1>
      <PlaylistList {...{playlistsData}} />
    </div>
  );
}
