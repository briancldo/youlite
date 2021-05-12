import { set } from '../persistentStore';
import {
  PlaylistState,
  CachePlaylistListAction,
  CachePlaylistVideosAction,
  RestorePlaylistsAction,
  PlaylistAction,
  PlaylistReducerCollection,
  PlaylistReducer,
} from './store.types';

function cachePlaylistList(state: PlaylistState, action: CachePlaylistListAction) {
  const { playlistsData } = action;
  const playlistsDataMap: PlaylistState = {};
  playlistsData.forEach(playlist => {
    playlistsDataMap[playlist.id] = {
      metadata: playlist,
      videos: [],
    };
  });

  const newState = {
    ...state,
    ...playlistsDataMap,
  };
  set('playlists', newState);
  return newState;
}

function cachePlaylistVideos(state: PlaylistState, action: CachePlaylistVideosAction) {
  const { playlistId, videos } = action;

  const newState = {
    ...state,
    [playlistId]: {
      ...state[playlistId],
      videos,
    },
  };
  set('playlists', newState);
  return newState;
}

function restorePlaylists(state: PlaylistState, action: RestorePlaylistsAction) {
  return action.playlists;
}

const handlers: PlaylistReducerCollection = {
  CACHE_PLAYLIST_LIST: cachePlaylistList as PlaylistReducer,
  CACHE_PLAYLIST_VIDEOS: cachePlaylistVideos as PlaylistReducer,
  RESTORE_PLAYLISTS: restorePlaylists as PlaylistReducer,
};

const initialState = {};

export default function reducer(state: PlaylistState = initialState, action: PlaylistAction) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}
