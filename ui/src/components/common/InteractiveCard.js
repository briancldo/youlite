import React from 'react';
import Card from '@material-ui/core/Card';
import './InteractiveCard.css';

export default function InteractiveCard(props) {
  return (
    <div className='interactive-card'>
      <Card {...props} />
    </div>
  );
}
