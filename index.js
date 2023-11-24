const express = require('express');
const useragent = require('express-useragent');
const os = require('node:os');
const app = express();
app.use(useragent.express());

app.get('/desi', (req, res) => {
  const userAgent = req.useragent;
  const deviceName = userAgent.source;

  res.send(`Device Name: ${deviceName}`);
});
app.get('/random', (req, res) => {
    res.send(os.hostname())
  });
  app.get('/wifi', (req, res) => {
    res.send(os.networkInterfaces()['Wi-Fi'])
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
