const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Webhook Server Running');
});

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('Webhook received');
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
