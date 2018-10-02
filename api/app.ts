global.ENV = process.env.NODE_ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const errorUtils = require('./utils/error-utils');
const debug = require('debug')('app');

import config from './config';

const port = 3000;

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	debug('Connected to database successfully');
});

mongoose.connection.on('error', err => {
	debug('Error: ' + err);
});

require('./models');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(function(req: Express.Request, res, next) {
	res.error = function(params) {
		if (params.message) {
			res.statusMessage = params.message;
		}
		debug(`API Error: ${params.statusCode || ''} ${params.message || ''}`);
		return res.status(params.statusCode).json(params);
	};

	req.context = {};

	next();
});

app.use(require('./routes/public'));
app.use('/private', require('./routes/private'));

app.use(errorUtils.logErrors);
app.use(errorUtils.errorHandler);

app.listen(port, () => {
	debug(`Server started, listening on port: ${port}`);
});