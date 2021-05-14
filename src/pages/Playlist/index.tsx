import React from 'react';
import { useLocation } from 'react-router-dom';

import VideosList from '../../components/common/VideosList';
import { getVideosByPlaylistId } from '../../utils/youtube.api';
import { useInitializeState } from '../../utils/initializeData';
import { get, set } from '../../data/playlist';
import './index.css';
import { Video } from '../../utils/youtube.api.types';

interface PlaylistUIProps {
  playlistTitle: string;
  videos: Video[];
}

const PlaylistUI: React.FC<PlaylistUIProps> = (props) => {
  const { playlistTitle, videos } = props;

  return (
    <div className='playlist-page-main'>
      <div className='playlist-page-header'>
        <h1>{playlistTitle}</h1>
      </div>
      <div className='playlist-page-video-list'>
        <VideosList {...{videos}} />
      </div>
    </div>
  );
}

interface PlaylistPageLocationState {
  playlistTitle: string;
  playlistId: string;
}

const PlaylistPage: React.FC = () => {
  const { playlistTitle, playlistId } = useLocation<PlaylistPageLocationState>().state;
  const videosCached = get.videos(playlistId).length > 0;
  const getVideos = videosCached ? get.videos : getVideosByPlaylistId;
  const [videos] = useInitializeState(getVideos, [playlistId], []);
  
  if (!videosCached && videos && videos.length > 1) set.videos(playlistId, videos);

  return <PlaylistUI {...{playlistTitle, videos}} />
}

export default PlaylistPage;
