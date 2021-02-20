import React from 'react';
import Card from '@material-ui/core/Card';

import { useRedirect, routes } from '../../utils/navigation';
import './VideoItem.css';

export default function VideoItem(props) {
  const { video } = props;
  const { id, title, thumbnailUrl, description, uploader } = video;
  const navigateToVideo = useRedirect(routes.video);

  function navigateToVideoWithState() {
    navigateToVideo({}, { id }, { title, description, uploader });
  }

  return (
    <Card className='wrapper' onClick={navigateToVideoWithState}>
      <img src={thumbnailUrl} alt={`Video ${title}`} />
      <h1>{title}</h1>
    </Card>
  );
}
