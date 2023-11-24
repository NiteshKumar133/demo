const express = require('express');
const useragent = require('express-useragent');

const app = express();
app.use(useragent.express());

app.get('/desi', (req, res) => {
  const userAgent = req.useragent;
  const deviceName = userAgent.source;

  res.send(`Device Name: ${deviceName}`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
