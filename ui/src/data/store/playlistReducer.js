import { set } from '../persistentStore';

function cachePlaylistList(state, action) {
  const { playlistsData } = action;
  const playlistsDataMap = {};
  playlistsData.forEach(playlist => {
    playlistsDataMap[playlist.id] = {
      metadata: playlist,
    };
  });

  const newState = {
    ...state,
    ...playlistsDataMap,
  };
  set('playlists', newState);
  return newState;
}

function cachePlaylistVideos(state, action) {
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

function restorePlaylists(state, action) {
  return action.playlists;
}

const handlers = {
  CACHE_PLAYLIST_LIST: cachePlaylistList,
  CACHE_PLAYLIST_VIDEOS: cachePlaylistVideos,
  RESTORE_PLAYLISTS: restorePlaylists
};

const initialState = {};

export default function reducer(state = initialState, action) {
  const handler = handlers[action.type];
  if (!handler) return state;
  return handler(state, action);
}
