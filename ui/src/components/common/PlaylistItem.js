import React from 'react';
import InteractiveCard from './InteractiveCard';

import { useRedirect, routes } from '../../utils/navigation';
import './PlaylistItem.css';

export default function PlaylistItem(props) {
  const { playlistData } = props
  const { thumbnailUrl, title } = playlistData;
  const navigateToPlaylist = useRedirect(routes.playlist);

  function navigateToPlaylistWithState() {
    navigateToPlaylist({}, {}, { playlistTitle: title, playlistId: playlistData.id });
  }

  return (
    <div className='playlist-item'>
      <div className='playlist-item-wrapper'>
        <InteractiveCard onClick={navigateToPlaylistWithState}>
          <div className='playlist-item-content'>
            <img src={thumbnailUrl} alt={`Playlist ${title}`} />
            <h1>{title}</h1>
          </div>
        </InteractiveCard>
      </div>
    </div>
  );
}
