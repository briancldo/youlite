import { getStore } from "./store";
import { dispatch } from "./store/load";
import { remove } from "./persistentStore";
import { Playlist } from "../utils/api.transform.types";
import { Video } from "../utils/youtube.api.types";

function getPlaylists() {
  return getStore().getState().playlist || {};
}

function getPlaylistsDataList() {
  return Object.values(getPlaylists()).map((playlist) => playlist.metadata);
}

function getPlaylist(id: string) {
  const playlist = getPlaylists()[id];
  if (!playlist) throw new Error(`No such playlist: ${id}`);
  return playlist;
}

function getVideos(playlistId: string) {
  return getPlaylist(playlistId).videos || [];
}

const get = {
  playlists: getPlaylists,
  playlistsDataList: getPlaylistsDataList,
  playlist: getPlaylist,
  videos: getVideos,
};

function setPlaylistsData(playlistsData: Playlist[]) {
  dispatch({
    type: "CACHE_PLAYLIST_LIST",
    playlistsData,
  });
}

function setVideos(playlistId: string, videos: Video[]) {
  dispatch({
    type: "CACHE_PLAYLIST_VIDEOS",
    playlistId,
    videos,
  });
}

function clearPlaylistCache() {
  remove("playlists");
}

const set = {
  playlistsData: setPlaylistsData,
  clearPlaylistCache,
  videos: setVideos,
};

export { get, set };
