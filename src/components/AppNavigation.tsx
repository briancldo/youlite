import React from "react";
import { useLocation } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SettingsIcon from "@material-ui/icons/SettingsRounded";

import { routes, useRedirect } from "../utils/navigation";
import "./AppNavigation.css";

const AppNavigation: React.FC = () => {
  const location = useLocation();
  const navigateToHome = useRedirect(routes.home);
  const navigateToSettings = useRedirect(routes.settings);

  function _navigateToHome() {
    if (location.pathname !== routes.home) navigateToHome();
  }

  function _navigateToSettings() {
    if (location.pathname !== routes.settings) navigateToSettings();
  }

  return (
    <BottomNavigation
      value={location.pathname}
      showLabels
      className="app-bottom-navigation"
    >
      <BottomNavigationAction
        label="Home"
        value={routes.home}
        icon={<HomeIcon />}
        onClick={_navigateToHome}
      />
      <BottomNavigationAction
        label="Settings"
        value={routes.settings}
        icon={<SettingsIcon />}
        onClick={_navigateToSettings}
      />
    </BottomNavigation>
  );
};

export default AppNavigation;
