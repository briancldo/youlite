import React from 'react';
import Card from '@material-ui/core/Card';

import './VideoItem.css';

export default function VideoItem(props) {
  const { video } = props;
  const { id, title, thumbnailUrl, description, uploader } = video;

  return (
    <Card className='wrapper'>
      <img src={video.thumbnailUrl} alt={`Video ${title}`} />
      <h1>{title}</h1>
    </Card>
  );
}
