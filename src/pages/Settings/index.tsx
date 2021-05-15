import React from 'react';
import Button from '@material-ui/core/Button';

import InfoModalButton from './InfoModalButton';
import { removeToken } from '../../data/token';
import { set } from '../../data/playlist';
import './index.css';

const SettingsPage: React.FC = () => {
  return (
    <div className='settings-page-main'>
      <div className='settings-page-header'>
        <InfoModalButton />
      </div>
      <div className='settings-page-content' />
      <div className='settings-page-footer'>
        <Button
          onClick={clearPlaylistCache}
          variant='contained'
          color='secondary'
          className='settings-page-button'
        >
          Clear cache
        </Button>
        <Button
          variant='contained'
          onClick={removeToken}
          className='settings-page-button'
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;

function clearPlaylistCache() {
  set.clearPlaylistCache();
  window.location.reload();
  alert('Cache cleared.');
}
