const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('HIT', new Date());
  res.json({ message: 'Hello' })
});

app.listen(3000, () => console.log('listening at port 3000'));