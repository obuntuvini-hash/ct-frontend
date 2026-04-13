const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// No X-Frame-Options — allow UOS iframe embedding
app.use((req, res, next) => {
  res.removeHeader('X-Frame-Options');
  next();
});

// Serve from browser/ subfolder (Angular 19 SSR build output)
const staticRoot = path.join(__dirname, 'browser');
app.use(express.static(staticRoot));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(staticRoot, 'index.html'));
});

app.listen(PORT, () => console.log(`CT Frontend on port ${PORT}`));
