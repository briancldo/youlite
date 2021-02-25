import React from 'react';
import Button from '@material-ui/core/Button';

import { removeToken } from '../../data/token';

export default function SettingsPage() {
  return (
  <div>
    <h1>Settings</h1>
    <Button onClick={removeToken}>Logout</Button>
  </div>
  )
}
