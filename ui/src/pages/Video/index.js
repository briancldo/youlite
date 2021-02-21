import React from 'react';
import { useLocation } from 'react-router-dom';

import { getQueryObject } from '../../utils/navigation';
import './index.css';

function VideoUI(props) {
  const { id, title, description, uploader } = props;

  return (
    <div className='video-page-main'>
      <h1>{title}</h1>
      <iframe
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder='0'
        allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen="allowFullScreen">
      </iframe>
      <p>{uploader}</p>
      <p>{description}</p>
    </div>
  )
}

export default function VideoPage(props) {
  const video = useLocation().state;
  const queryString = useLocation().search;
  const id = getQueryObject(queryString).id;

  return <VideoUI {...{ ...video, id }} />
}
