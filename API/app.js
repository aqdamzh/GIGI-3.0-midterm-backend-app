const express = require('express');

const app = express();

app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

module.exports = app;