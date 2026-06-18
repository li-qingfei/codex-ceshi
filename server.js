const express = require('express');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Feiyang Auto Care is running at http://localhost:${port}`);
});
