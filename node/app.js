const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const cloudinary = require('cloudinary');
const winston = require('winston')

// connect to mongodb
mongoose.connect(config.database);

// once connected
mongoose.connection.on('connected', () => {
	winston.error('Connected to database successfully');
});

// in case of error
mongoose.connection.on('error', (err) => {
	winston.error('Error: ' + err);
});

const app = express();

// middleware

// cross origin resource sharing setup
app.use(cors());

// static folder for public views
app.use(express.static(path.join(__dirname, '../public')));

// body partser initialize
app.use(bodyParser.json());

// routing
app.use(require('./routes/public'));
app.use(require('./routes/private'));

cloudinary.config(config.cloudinarySettings);

// define port
const port = 9000;

app.listen(port, () => {
	winston.info(`Server started, listening on port: ${port}`);
});
