import React from 'react';

import VideoItem from './VideoItem';
import './VideosList.css';

export default function VideosList(props) {
  const { videos } = props;

  return (
    <div class='list'>
      {
        videos.map((video, index) => (
          <div key={`video${index}`}>
            <VideoItem {...{video}} />
          </div>
        ))
      }
    </div>
  );
}
