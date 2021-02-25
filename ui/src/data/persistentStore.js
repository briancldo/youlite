import { dispatch } from './store/load';

function get(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return localStorage.getItem(key);
  }
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function remove(key) {
  localStorage.removeItem(key);
}

function restoreData() {
  dispatch({
    type: 'RESTORE_PLAYLISTS',
    playlists: get('playlists'),
  })
  dispatch({
    type: 'SET_TOKEN',
    token: get('token') || '',
  });
}

export { get, set, remove, restoreData };
