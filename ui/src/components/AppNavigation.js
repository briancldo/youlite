import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/HomeRounded';
import SettingsIcon from '@material-ui/icons/SettingsRounded'
import './AppNavigation.css';

export default function AppNavigation() {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <BottomNavigation value={currentPage} showLabels className='app-bottom-navigation'>
      <BottomNavigationAction label='Home' icon={<HomeIcon />} />
      <BottomNavigationAction label='Settings' icon={<SettingsIcon />} />
    </BottomNavigation>
  )
}
