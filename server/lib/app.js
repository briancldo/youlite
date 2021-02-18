const express = require('express');
const app = express();
const cors = require('cors');
const serverless = require('serverless-http');

const youtubeController = require('./controllers/youtube.controller');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/channels/:channelName', youtubeController.getChannels);
app.get('/search', youtubeController.search);
app.get('/subscriptions', youtubeController.getSubscriptions);

module.exports.app = app;
module.exports.handler = serverless(app);
