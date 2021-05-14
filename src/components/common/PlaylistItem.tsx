import React from 'react';
import InteractiveCard from './InteractiveCard';

import { useRedirect, routes } from '../../utils/navigation';
import './PlaylistItem.css';
import { Playlist } from '../../utils/api.transform.types';

interface PlaylisItemProps {
  playlistData: Playlist;
}

const PlaylistItem: React.FC<PlaylisItemProps> = (props) => {
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
};

export default PlaylistItem;
