import React from 'react';
import Button from '@material-ui/core/Button';

import { removeToken } from '../../data/token';
import { set } from '../../data/playlist';
import './index.css';

export default function SettingsPage() {
  function clearPlaylistCache() {
    set.clearPlaylistCache();
    window.location.reload();
    alert('Cache cleared.');
  }

  return (
  <div className='settings-page-main'>
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
  )
}