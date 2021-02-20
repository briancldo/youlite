function cachePlaylistList(state, action) {
  const { playlistsData } = action;

  return {
    ...state,
    [playlistsData.id]: {
      ...state[playlistsData.id],
      metadata: playlistsData,
    }
  };
}

function cachePlaylistVideos(state, action) {
  const { playlistId, videos } = action;

  return {
    ...state,
    [playlistId]: {
      ...state[playlistId],
      videos,
    },
  };
}

const handlers = {
  CACHE_PLAYLIST_LIST: cachePlaylistList,
  CACHE_PLAYLIST_VIDEOS: cachePlaylistVideos,
};

const initialState = {};

export default function reducer(state = initialState, action) {
  const handler = handlers[action.type];
  if (!handler) return initialState;
  return handler(state, action);
}
