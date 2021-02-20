import React from 'react';
import { useLocation } from 'react-router-dom';

import VideosList from '../../components/common/VideosList';

function PlaylistUI(props) {
  const { playlistTitle, videos } = props;

  console.log({ playlistTitle, videos });

  return (
    <>
      <h1>{playlistTitle}</h1>
      <VideosList {...{videos}} />
    </>
  );
}

export default function PlaylistPage(props) {
  const { playlistTitle, videos } = useLocation().state;

  return <PlaylistUI {...{playlistTitle, videos}} />
}