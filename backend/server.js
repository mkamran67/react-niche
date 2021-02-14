// External Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// Internal Imports
const connectDB = require('./config/connectDB.js');

const app = express(); // App init

connectDB(); // Starts connection to Mongo Database

const PORT = process.env.PORT || 3000;
const devMode = process.env.NODE_ENV === 'developement' ? true : false;

if (devMode) {
  app.use(morgan('dev')); // Morgan is for loggin in developement mode
}

// Serve React app when in production
if (!devMode) {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirnamem, 'frontend', 'build', 'index.html'));
  });
} else {
  console.log(`Developement mode 💻`);
}

app.listen(PORT, () => {
  console.log(
    `Server started on ${devMode ? `http://localhost:${PORT}` : `${PORT}`}`
  );
});
