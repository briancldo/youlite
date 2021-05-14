import React from 'react';
import Grid from '@material-ui/core/Grid';

import VideoItem from './VideoItem';
import './VideosList.css';
import { Video } from '../../utils/youtube.api.types';

interface VideosListProps {
  videos: Video[];
}

const VideosList: React.FC<VideosListProps> = (props) => {
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
};

export default VideosList;
