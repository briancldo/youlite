import React from 'react';

import PlaylistItem from './PlaylistItem';

export default function PlaylistList(props) {
  const { playlistsData } = props;

  return playlistsData.map(playlistData => (
    <PlaylistItem key={playlistData.title} {...{playlistData}} />
  ));
}