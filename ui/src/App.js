import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { routes } from './utils/navigation';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import PlaylistPage from './pages/Playlist';
import VideoPage from './pages/Video';

function App() {
  console.log('App');
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
