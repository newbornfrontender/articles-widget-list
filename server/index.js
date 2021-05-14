const express = require('express');

const { createNews } = require('./helpers');

const PORT = 8000;

const app = express();

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

app.get('/api/news', (_, res) => {
  res.send(createNews());
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
