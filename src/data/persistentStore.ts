import { dispatch } from './store/load';
import { RestorePlaylistsAction, SetTokenAction } from './store/store.types';

function get(key: string) {
  let item;
  try {
    item = localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item);
  } catch {
    return item;
  }
}

function set(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function remove(key: string) {
  localStorage.removeItem(key);
}

const restorePlaylistsAction: RestorePlaylistsAction = {
  type: 'RESTORE_PLAYLISTS',
  playlists: get('playlists'),
};

const setTokenAction: SetTokenAction = {
  type: 'SET_TOKEN',
  token: get('token') || '',
};

function restoreData() {
  dispatch(restorePlaylistsAction);
  dispatch(setTokenAction);
}

export { get, set, remove, restoreData };
