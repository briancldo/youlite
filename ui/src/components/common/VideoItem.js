import React from 'react';
import Divider from '@material-ui/core/Divider';

import { useRedirect, routes } from '../../utils/navigation';
import InteractiveCard from './InteractiveCard';
import './VideoItem.css';

export default function VideoItem(props) {
  const { video } = props;
  const { id, title, thumbnailUrl, description, uploader } = video;
  const navigateToVideo = useRedirect(routes.video);

  function navigateToVideoWithState() {
    navigateToVideo({}, { id }, { title, description, uploader });
  }

  return (
    <>
      <InteractiveCard className='video-item-wrapper' onClick={navigateToVideoWithState}>
        <img src={thumbnailUrl} alt={`Video ${title}`} />
        <h3>{title}</h3>
      </InteractiveCard>
      <Divider variant='middle' className='video-item-divider' />
    </>
  );
}
