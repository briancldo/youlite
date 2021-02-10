const youtubeService = require('../services/youtube.service');

async function getChannels(request, response) {
  const { channelName } = request.params;

  const data = await youtubeService.searchChannels(channelName);
  response.send(data);
}

async function search(request, response) {
  const { query } = request.query;

  const data = await youtubeService.search(query);
  response.send(data);
}

module.exports = {
  getChannels,
  search,
};
