const express = require('express');
const videoRoutes = require('./routes/videoRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

//app.use(express.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use('/videos', videoRoutes);
apiRoutes.use('/products', productRoutes);

module.exports = app;