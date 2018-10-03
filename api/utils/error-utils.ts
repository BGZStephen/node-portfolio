import { Request, Response, NextFunction } from 'express';
import { Error } from 'api/interfaces';

import * as Debug from 'debug' 
const debug = Debug('app');

function logErrors(err: Error, req: Request, res: Response, next: NextFunction): void {
	if (global.ENV === 'development' || global.ENV === 'testing') {
		debug(err);
	}
	next(err);
}

// handle all express generated errors with stacks
function errorHandler(err: Error, req: Request, res: Response): Response {
	return res.status(err.statusCode || 500).json(err);
}

export default {
	logErrors,
	errorHandler,
};
