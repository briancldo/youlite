import React from 'react';

import { useRedirect, routes } from '../../utils/navigation';
import { Video } from '../../utils/youtube.api.types';
import InteractiveCard from './InteractiveCard';
import './VideoItem.css';

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = (props) => {
  const { video } = props;
  const { id, title, thumbnailUrl, description, uploader } = video;
  const navigateToVideo = useRedirect(routes.video);

  function navigateToVideoWithState() {
    navigateToVideo({}, { id }, { title, description, uploader });
  }

  return (
    <>
      <InteractiveCard
        onClick={navigateToVideoWithState}
        className='video-item-wrapper'
      >
        <img src={thumbnailUrl} alt={`Video ${title}`} />
        <h3>{title}</h3>
      </InteractiveCard>
    </>
  );
};

export default VideoItem;
