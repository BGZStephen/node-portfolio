import { Request, Response } from 'express';
import { Error } from 'api/interfaces';
import * as Debug from 'debug' 
const debug = Debug('app');

function logErrors(err, req, res, next) {
	if (global.ENV === 'development' || global.ENV === 'testing') {
		debug(err);
	}
	next(err);
}

// handle all express generated errors with stacks
function errorHandler(err: Error, req: Request, res: Response) {
	return res.status(err.statusCode || 500).json(err);
}

export default {
	logErrors,
	errorHandler,
};
