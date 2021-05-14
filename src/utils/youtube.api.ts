import * as transformService from './api.transform';
import { createCompleteUrl } from './url';
import request from './request';
import { Playlist } from './api.transform.types';
import { Video, PlaylistData } from './youtube.api.types';
import { Query } from './request.types';

const baseUrls = {
  playlists: {
    list: 'https://www.googleapis.com/youtube/v3/playlists',
  },
  playlistsItems: {
    list: 'https://www.googleapis.com/youtube/v3/playlistItems',
  },
};

async function getPlaylistsData() {
  const query: Query = {
    part: 'snippet,contentDetails',
    maxResults: 50,
    mine: true,
  };
  const url = createCompleteUrl(baseUrls.playlists.list, query);
  const response = await request('get', url);
  if (!response) return [];
  return transformService.transformPlaylistResults(response.data);
}

async function getVideosByPlaylistId(id: string): Promise<Video[]> {
  const query = {
    part: 'snippet,contentDetails',
    maxResults: 50,
    playlistId: id,
  };
  const url = createCompleteUrl(baseUrls.playlistsItems.list, query);
  const response = await request('get', url);
  if (!response) return [];
  return transformService.transformPlaylistVideosResults(response.data);
}

async function getVideosFromPlaylists(
  playlists: Playlist[]
): Promise<PlaylistData[]> {
  const playlistVideosPromises = playlists.map(async (playlist) => ({
    videos: await getVideosByPlaylistId(playlist.id),
    title: playlist.title,
    description: playlist.description,
    thumbnailUrl: playlist.thumbnailUrl,
  }));
  // eslint-disable-next-line compat/compat
  return Promise.all(playlistVideosPromises);
}

async function getPlaylists() {
  const playlistData = await getPlaylistsData();
  return await getVideosFromPlaylists(playlistData);
}

export {
  getPlaylistsData,
  getVideosByPlaylistId,
  getVideosFromPlaylists,
  getPlaylists,
};
