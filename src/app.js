// Core Node Modules
const path = require('path');

// NPM modules
const express = require('express');

// Initialize app to use express
const app = express();

// Paths
const staticAssetsPath = path.join(__dirname,'../public');

// Set app to use static assets
app.use(express.static(staticAssetsPath));
