const { google } = require('googleapis');
const youtube = google.youtube('v3');

const token = 'ya29.A0AfH6SMAhkWbMKWuJ0fknI8BHxaJvLh6RndYehwGxb3UpthhUqLB3kTx2nAG0tyzOja2O475dy_O6Gv4D6ZYbAIRc5UO-9nh4wq4_JK3cDpOUHuZdRjQ74a6axyd4pD_ou_2bjOcGzRS3r5lvkIe8xGfyHgva'

async function searchChannels(channelName) {
  try {
    return await youtube.channels.list({
      access_token: token,
      part: 'snippet,contentDetails,statistics',
      forUsername: channelName,
    });
  } catch(error) {
    console.error('Error:', error);
  }

}

module.exports = {
  searchChannels,
};
