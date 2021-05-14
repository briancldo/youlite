import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Button from '@material-ui/core/Button';
import './App.css';

import { routes } from './utils/navigation';
import { store, getStore } from './data/store';
import { restoreData } from './data/persistentStore';
import PrivateRoute from './components/common/PrivateRoute';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import PlaylistPage from './pages/Playlist';
import VideoPage from './pages/Video';
import SettingsPage from './pages/Settings';

function printState() {
  const state = getStore().getState();
  console.log({ state });
}

export default function App() {
  restoreData();

  return (
    <div className='app'>
        {
          process.env.NODE_ENV === 'development'
          && <Button onClick={printState}>Print State</Button>
        }
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path={routes.login}>
                <LoginPage />
              </Route>
              <PrivateRoute path={routes.search}>
                <SearchPage />
              </PrivateRoute>
              <PrivateRoute path={routes.playlist}>
                <PlaylistPage />
              </PrivateRoute>
              <PrivateRoute path={routes.video}>
                <VideoPage />
              </PrivateRoute>
              <PrivateRoute path={routes.settings}>
                <SettingsPage />
              </PrivateRoute>
              <PrivateRoute path={routes.home}>
                <HomePage />
              </PrivateRoute>
            </Switch>
          </Router>
        </Provider>
    </div>
  );
}
