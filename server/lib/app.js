const express = require('express');
const app = express();
const cors = require('cors');

const youtubeController = require('./controllers/youtube.controller');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/channels/:channelName', youtubeController.getChannels);
app.get('/search', youtubeController.search);

app.listen(5000, () => console.log('listening on port 5000'));
