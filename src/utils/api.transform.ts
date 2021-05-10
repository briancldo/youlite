const playlistFilterKeyword = 'lite';

function transformChannelData(channelData: ChannelData) {
  return {
    title: channelData.channelTitle,
    thumbnail: {
      url: channelData.thumbnails.medium.url,
    },
  };
}

function transformVideoData(videoData: VideoData) {
  return {
    channelTitle: videoData.channelData,
    title: videoData.title,
    description: videoData.description,
    thumbnail: {
      url: videoData.thumbnails.medium.url,
    }
  };
}

function transformSearchResult(result: SearchResult) {
  if (result.id.kind === 'youtube#channel') {
    return {
      type: 'channel',
      data: transformChannelData(result.snippet as ChannelData),
    };
  }

  if (result.id.kind === 'youtube#video') {
    return {
      type: 'video',
      data: transformVideoData(result.snippet as VideoData),
    };
  }
}

function transformSearchResults(results: SearchResult[]) {
  return results.map(result => transformSearchResult(result));
}

function filterPlaylists(playlists: Playlist[]) {
  return playlists.filter(playlist =>
    playlist.description && playlist.description.includes(playlistFilterKeyword)
  );
}

function transformPlaylistResults(results: PlaylistResults) {
  const playlistData = results.items;
  const slimPlaylistData = 
    playlistData.map(playlist => ({
      id: playlist.id,
      title: playlist.snippet.title,
      description: playlist.snippet.description,
      thumbnailUrl: playlist.snippet.thumbnails.medium.url,
    }));
  return filterPlaylists(slimPlaylistData) || [];
}

function transformPlaylistVideosResults(results: PlaylistVideosResults) {
  const videoListData = results.items;
  return videoListData.map(video => ({
    id: video.snippet.resourceId.videoId,
    title: video.snippet.title,
    thumbnailUrl: video.snippet.thumbnails.medium.url,
    uploader: video.snippet.videoOwnerChannelTitle,
    description: video.snippet.description,
  }));
}

export {
  transformSearchResults,
  transformPlaylistResults,
  transformPlaylistVideosResults,
};
