const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Remove X-Frame-Options to allow UOS iframe embedding
app.use((req, res, next) => {
  res.removeHeader('X-Frame-Options');
  next();
});

app.use(express.static(__dirname));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`CT Frontend on port ${PORT}`));
