import React from 'react';
import { useLocation } from 'react-router-dom';

function PlaylistUI(props) {
  const { playlistTitle, videos } = props;

  console.log({ playlistTitle, videos });

  return null;
}

export default function PlaylistPage(props) {
  const { playlistTitle, videos } = useLocation().state;

  return <PlaylistUI {...{playlistTitle, videos}} />
}