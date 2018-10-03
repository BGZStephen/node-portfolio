import { ResError } from 'api/interfaces';
global.ENV = process.env.NODE_ENV || 'development';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as Debug from 'debug';
import errorUtils from './utils/error-utils';
import config from './config';

const port = 3000;
const debug = Debug('app');

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

app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
	res.error = function(params: ResError) {
		if (params.message) {
			res.statusMessage = params.message;
		}
		debug(`API Error: ${params.statusCode || ''} ${params.message || ''}`);
		return res.status(params.statusCode).json(params);
	};

	req.context = {};

	next();
});

import publicRoutes from './routes/public';
import privateRoutes from './routes/private';

app.use(publicRoutes);
app.use('/private', privateRoutes);

app.use(errorUtils.logErrors);
app.use(errorUtils.errorHandler);

app.listen(port, () => {
	debug(`Server started, listening on port: ${port}`);
});