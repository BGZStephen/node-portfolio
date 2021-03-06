import { Error, Request, Response, NextFunction } from '../interfaces';

import * as Debug from 'debug' 
const debug = Debug('app');

function logErrors(err: Error, req: Request, res: Response, next: NextFunction): void {
	if (global.ENV === 'development' || global.ENV === 'testing') {
		debug(err);
	}
	next(err);
}

// handle all express generated errors with stacks
function errorHandler(err: Error, req: Request, res: Response) {
	return res.error({statusCode: err.statusCode, message: err.message});
}

export default {
	logErrors,
	errorHandler,
};
