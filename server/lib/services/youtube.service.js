const { google } = require('googleapis');
const youtube = google.youtube('v3');
const transformService = require('./transform.service');

const token = 'ya29.A0AfH6SMAhkWbMKWuJ0fknI8BHxaJvLh6RndYehwGxb3UpthhUqLB3kTx2nAG0tyzOja2O475dy_O6Gv4D6ZYbAIRc5UO-9nh4wq4_JK3cDpOUHuZdRjQ74a6axyd4pD_ou_2bjOcGzRS3r5lvkIe8xGfyHgva'

async function searchChannels(channelName) {
  try {
    return await youtube.channels.list({
      access_token: token,
      part: 'snippet,contentDetails,statistics',
      forUsername: channelName,
    });
  } catch(error) {
    console.error('Search Channels error:', error);
  }
}

async function search(query) {
  try {
    const response = await youtube.search.list({
      access_token: token,
      part: 'snippet',
      q: query,
    });
    return transformService.transformSearchResults(response.data.items);
  } catch (error) {
    console.error('Search error:', error);
  }
}

module.exports = {
  searchChannels,
  search,
};
