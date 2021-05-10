import React from 'react';
import Grid from '@material-ui/core/Grid';

import PlaylistItem from './PlaylistItem';
import './PlaylistList.css';

export default function PlaylistList(props) {
  const { playlistsData } = props;

  return ( 
    <Grid container className='playlist-list'>
      {playlistsData.map(playlistData => (
        <Grid item sm={12} md={4} lg={3} key={playlistData.title} className='playlist-list-item'>
          <PlaylistItem {...{playlistData}} />
        </Grid>
      ))}
    </Grid>
  )
}