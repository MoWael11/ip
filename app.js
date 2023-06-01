const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  res.send(ipAddress);
})

app.listen(3000)