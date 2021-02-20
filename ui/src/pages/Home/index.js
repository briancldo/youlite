import React from 'react';
import Button from '@material-ui/core/Button';

import './index.css';

import { useInitializeState } from '../../utils/initializeData';
import { getPlaylistsData } from '../../utils/youtube.api';
import { useRedirect, routes } from '../../utils/navigation';
import { get, set } from '../../data/playlist';
import PlaylistList from '../../components/common/PlaylistList';

export default function HomePage() {
  const playlistsCached = Object.keys(get.playlists()).length > 0;
  const getPlaylists = playlistsCached ? get.playlistsDataList : getPlaylistsData;
  const [playlistsData] = useInitializeState(getPlaylists, [], []);
  const navigateToLogin = useRedirect(routes.login);

  if (!playlistsCached && playlistsData.length > 0) set.playlistsData(playlistsData);

  return (
    <div className='main'>
      <Button onClick={navigateToLogin}>Go to Login</Button>
      <h1>Playlists</h1>
      <PlaylistList {...{playlistsData}} />
    </div>
  );
}
