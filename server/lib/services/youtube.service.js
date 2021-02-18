const { google } = require('googleapis');
const youtube = google.youtube('v3');
const transformService = require('./transform.service');

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkYjQwZTJmOTM1M2M1OGFkZDY0OGI2MzYzNGU1YmJmNjNlNGY1MDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDg4NTI3ODg2MDgtbTI2MTVsbXRiamhhMW1qcTgzZGI1cXBkajZ1NmgycmkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0ODg1Mjc4ODYwOC1tMjYxNWxtdGJqaGExbWpxODNkYjVxcGRqNnU2aDJyaS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjU1NTgzMjE1MjA0NDMyNTc2NCIsImVtYWlsIjoiYnJpYW5jbGRvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiX2xyUnZiVXJELU5nNXdVb0NMZzBwdyIsIm5hbWUiOiJCcmlhbiBEbyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaEJNY1ZOd0VIT2ZQVGZJS1NfLTJLaFBXYi14eFJTTmI2eHc0TkxTQT1zOTYtYyIsImdpdmVuX25hbWUiOiJCcmlhbiIsImZhbWlseV9uYW1lIjoiRG8iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYxMzYwNjIwMiwiZXhwIjoxNjEzNjA5ODAyLCJqdGkiOiJjYjJlYzFhZjU3NzYyZTk2MTI4Mjg0ODk5NWY0NmNkMDkzMmRmYWY4In0.XVT2k6w04tb4IL9JAYgyYnb65HGhN37kmTVcrCGIyhOTpbMW4qOU7j7bYsKsmc9BNKk-nvxSknzvdi_MHYsk9oBv4-gFCtFYOmCdqLl1vq7L86GbepmXJGB1USVfVCl2-GYEbkG5H8YYxx5mBRwgSe_gjsdoFcm6ak6GZmuD5wzGCGFtyd6cTRh_Z2PghcjxZ_h-lzqhGCcPzwWxds8O6V_HWaTwA1TNCX2anEg3WtmIg-R6JgOFBpbg0jOrow-86IWj3Brs6zWXbRjLGtPZCLlNGwHkPSTxuGb0yAjWH4BQ1aG2oaaseYn-TjvVyEquifAQ2u4adL4B5khKqFJk6A'

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

async function getSubscriptions() {
  
}

module.exports = {
  searchChannels,
  search,
};
