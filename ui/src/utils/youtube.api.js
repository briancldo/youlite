import * as transformService from './api.transform';
import { createCompleteUrl } from './url';
import request from './request';

const baseUrls = {
  playlists: {
    list: 'https://www.googleapis.com/youtube/v3/playlists',
  },
  playlistsItems: {
    list: 'https://www.googleapis.com/youtube/v3/playlistItems',
  },
}

async function getPlaylistsData() {
  const query = {
    part: 'snippet,contentDetails',
    maxResults: 50,
    mine: true,
  };
  const url = createCompleteUrl(baseUrls.playlists.list, query);
  const response = await request('get', url);
  return transformService.transformPlaylistResults(response.data);
}

async function getPlaylistVideosFromId(id) {
  const query = {
    part: 'snippet,contentDetails',
    maxResults: 50,
    playlistId: id,
  };
  const url = createCompleteUrl(baseUrls.playlistsItems.list, query);
  const response = await request('get', url);
  return transformService.transformPlaylistVideosResults(response.data);
}

async function getPlaylistVideosFromPlaylist(playlist) {
  const playlistVideosPromises = playlist.map(async item => ({
    videos: await getPlaylistVideosFromId(item.id),
    title: item.title,
    description: item.description,
  }));
  return Promise.all(playlistVideosPromises);
}

async function getPlaylists() {
  const playlistData = await getPlaylistsData();
  return await getPlaylistVideosFromPlaylist(playlistData);
}

export {
  getPlaylists,
};
