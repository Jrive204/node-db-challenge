require('dotenv').config(); // load .env variables

const server = require('./data/server');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

server.get('/', (req, res) => {
  res.json({ Welcome: 'HELLO' });
});
