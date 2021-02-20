import React from 'react';
import Button from '@material-ui/core/Button';

import './index.css';

import { useInitializeState } from '../../utils/initializeData';
import { getPlaylistsData } from '../../utils/youtube.api';
import { useRedirect, routes } from '../../utils/navigation';
import PlaylistList from '../../components/common/PlaylistList';

export default function HomePage() {
  const [playlistsData] = useInitializeState(getPlaylistsData, [], []);
  const navigateToLogin = useRedirect(routes.login);

  return (
    <div className='main'>
      <Button onClick={navigateToLogin}>Go to Login</Button>
      <h1>Playlists</h1>
      <PlaylistList {...{playlistsData}} />
    </div>
  );
}
