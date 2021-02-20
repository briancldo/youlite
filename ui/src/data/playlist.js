import { getStore } from './store';
import { dispatch } from './store/load';

function getPlaylists() {
  return getStore().getState().playlist;
}

function getPlaylistsDataList() {
  return Object.values(getPlaylists()).map(playlist => playlist.metadata);
}

function getPlaylist(id) {
  const playlist = getPlaylists()[id];
  if (!playlist) throw new Error(`No such playlist: ${id}`);
  return playlist;
}

function getVideos(playlistId) {
  return getPlaylist(playlistId).videos;
}

const get = {
  playlists: getPlaylists,
  playlistsDataList: getPlaylistsDataList,
  playlist: getPlaylist,
  videos: getVideos,
};

function setPlaylistsData(playlistsData) {
  dispatch({
    type: 'CACHE_PLAYLIST_LIST',
    playlistsData,
  });
}

function setVideos(playlistId, videos) {
  dispatch({
    type: 'CACHE_PLAYLIST_VIDEOS',
    playlistId,
    videos,
  });
}

const set = {
  playlistsData: setPlaylistsData,
  videos: setVideos,
};

export { get, set };
