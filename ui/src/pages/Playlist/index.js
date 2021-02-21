import React from 'react';
import { useLocation } from 'react-router-dom';

import VideosList from '../../components/common/VideosList';
import { getVideosByPlaylistId } from '../../utils/youtube.api';
import { useInitializeState } from '../../utils/initializeData';
import { get, set } from '../../data/playlist';

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
  const videosCached = get.videos(playlistId).length > 0;
  const getVideos = videosCached ? get.videos : getVideosByPlaylistId;
  const [videos] = useInitializeState(getVideos, [playlistId], []);
  
  if (!videosCached && videos.length > 1) set.videos(playlistId, videos);

  return <PlaylistUI {...{playlistTitle, videos}} />
}