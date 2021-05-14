import React from 'react';

import './index.css';

import { useInitializeState } from '../../utils/initializeData';
import { getPlaylistsData } from '../../utils/youtube.api';
import { get, set } from '../../data/playlist';
import PlaylistList from '../../components/common/PlaylistList';

const HomePage: React.FC = () => {
  const playlistsCached = Object.keys(get.playlists()).length > 0;
  const getPlaylists = playlistsCached ? get.playlistsDataList : getPlaylistsData;
  const [playlistsData] = useInitializeState(getPlaylists, [], []);

  if (!playlistsCached && playlistsData && playlistsData.length > 0) set.playlistsData(playlistsData);

  return (
    <div className='homepage-main'>
      <div className='homepage-header'>
        <h1>Playlists</h1>
      </div>
      <div className='homepage-playlist-list'>
        <PlaylistList {...{playlistsData}} />
      </div>
    </div>
  );
};

export default HomePage;
