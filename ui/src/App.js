import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Button from '@material-ui/core/Button';
import './App.css';

import { routes } from './utils/navigation';
import { store, getStore } from './data/store';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import PlaylistPage from './pages/Playlist';
import VideoPage from './pages/Video';

function printState() {
  const state = getStore().getState();
  console.log({ state });
}

function App() {
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
            <Route path={routes.search}>
              <SearchPage />
            </Route>
            <Route path={routes.playlist}>
              <PlaylistPage />
            </Route>
            <Route path={routes.video}>
              <VideoPage />
            </Route>
            <Route path={routes.home}>
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
