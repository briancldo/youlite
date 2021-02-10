function transformChannelData(channelData) {
  return {
    title: channelData.channelTitle,
    thumbnail: {
      url: channelData.thumbnails.medium.url,
    },

  };
}

function transformVideoData(videoData) {
  return {
    channelTitle: videoData.channelData,
    title: videoData.title,
    description: videoData.description,
    thumbnail: {
      url: videoData.thumbnails.medium.url,
    }
  };
}

function transformSearchResult(result) {
  if (result.id.kind === 'youtube#channel') {
    return {
      type: 'channel',
      data: transformChannelData(result.snippet),
    };
  }

  if (result.id.kind === 'youtube#video') {
    return {
      type: 'video',
      data: transformVideoData(result.snippet),
    };
  }
}

function transformSearchResults(results) {
  return results.map(result => transformSearchResult(result));
}

module.exports = {
  transformSearchResults,
};
