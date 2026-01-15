const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello there this is Express application....</h1>');
});

app.listen(3001, () => {
  console.log(`http://localhost:3001`);
});