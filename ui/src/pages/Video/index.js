import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandIcon from '@material-ui/icons/ExpandMoreRounded';

import { getQueryObject } from '../../utils/navigation';
import './index.css';

function VideoUI(props) {
  const { id, title, description, uploader } = props;
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  function toggleDescription() {
    setDescriptionExpanded(expanded => !expanded);
  }

  return (
    <div className='video-page-main'>
      <h1>{title}</h1>
      <iframe
        width={`${Math.min(560, window.innerWidth)}`}
        height='315'
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder='0'
        allow='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen="allowFullScreen">
      </iframe>
      <p>{uploader}</p>
      <Accordion
        expanded={descriptionExpanded}
        onChange={toggleDescription}
        className='video-description-accordion'
      >
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <p>Description</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>{description}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default function VideoPage(props) {
  const video = useLocation().state;
  const queryString = useLocation().search;
  const id = getQueryObject(queryString).id;

  return <VideoUI {...{ ...video, id }} />
}
