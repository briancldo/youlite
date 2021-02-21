import React from 'react';
import Card from '@material-ui/core/Card';
import './InteractiveCard.css';

export default function InteractiveCard(props) {
  return (
    <p className='interactive-card'>
      <Card {...props} />
    </p>
  );
}
