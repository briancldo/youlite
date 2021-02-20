import React from 'react';
import { useLocation } from 'react-router-dom';

import VideosList from '../../components/common/VideosList';
import { getVideosByPlaylistId } from '../../utils/youtube.api';
import { useInitializeState } from '../../utils/initializeData';

function PlaylistUI(props) {
  const { playlistTitle, videos } = props;

  return (
    <>
      <h1>{playlistTitle}</h1>
      <VideosList {...{videos}} />
    </>
  );
}

export default function PlaylistPage(props) {
  const { playlistTitle, playlistId } = useLocation().state;
  const [videos] = useInitializeState(getVideosByPlaylistId, [playlistId], []);

  return <PlaylistUI {...{playlistTitle, videos}} />
}