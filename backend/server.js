// External Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/connectDB.js');

const app = express(); // App init
const PORT = process.env.PORT || 3000;
const devMode = process.env.NODE_ENV === 'development' ? true : false;
connectDB(); // Starts connection to Mongo Database

if (devMode) {
  app.use(morgan('dev')); // Morgan is for loggin in developement mode
}

app.use(express.json());

// Route Imports
const userRoutes = require('./routes/userRoutes.js');

// Routing
app.use('/api/user', userRoutes);

// Serve React app when in production
if (!devMode) {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirnamem, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(
    `Server started on ${devMode ? `http://localhost:${PORT}` : `${PORT}`}`
  );
});
