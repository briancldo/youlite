const youtubeService = require('../services/youtube.service');

async function getChannels(request, response) {
  const { channelName } = request.params;

  const data = await youtubeService.searchChannels(channelName);
  response.send(data);
}

module.exports = {
  getChannels,
};
