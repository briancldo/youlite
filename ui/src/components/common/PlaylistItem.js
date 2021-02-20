import React from 'react';
import Card from '@material-ui/core/Card';

import { useRedirect, routes } from '../../utils/navigation';

export default function PlaylistItem(props) {
  const { playlistData } = props
  const { thumbnailUrl, title, videos } = playlistData;
  const navigateToPlaylist = useRedirect(routes.playlist);

  function navigateToPlaylistWithState() {
    navigateToPlaylist({}, {}, { playlistTitle: title, videos });
  }

  return (
    <Card onClick={navigateToPlaylistWithState}>
      <img src={thumbnailUrl} alt={`Playlist ${title}`} />
      <h1>{title}</h1>
    </Card>
  );
}
