import { dispatch } from './store/load';

function get(key) {
  return JSON.parse(localStorage.getItem(key));
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function restorePlaylists() {
  dispatch({
    type: 'RESTORE_PLAYLISTS',
    playlists: get('playlists'),
  })
}

export { get, set, restorePlaylists };
