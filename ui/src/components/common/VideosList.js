import React from 'react';
import Grid from '@material-ui/core/Grid';

import VideoItem from './VideoItem';
import './VideosList.css';

export default function VideosList(props) {
  const { videos } = props;

  return (
    <Grid container className='video-list'>
      {
        videos.map((video, index) => (
          <Grid sm={12} md={4} lg={3} key={`video${index}`} className='video-list-item'>
            <VideoItem {...{video}} />
          </Grid>
        ))
      }
    </Grid>
  );
}
