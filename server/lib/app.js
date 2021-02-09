const express = require('express');
const app = express();
const cors = require('cors');
const { urlencoded } = require('express');

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('root');
});

app.listen(5000, () => console.log('listening on port 5000'));
