import React from 'react';
import Button from '@material-ui/core/Button';

import { removeToken } from '../../data/token';
import { set } from '../../data/playlist';

export default function SettingsPage() {
  function clearPlaylistCache() {
    set.clearPlaylistCache();
    window.location.reload();
    alert('Cache cleared.');
  }

  return (
  <div>
    <h1>Settings</h1>
    <Button onClick={removeToken}>Logout</Button>
    <Button onClick={clearPlaylistCache}>Clear cache</Button>
  </div>
  )
}
