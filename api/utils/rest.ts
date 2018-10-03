import { Request, Response, NextFunction } from 'express';

function asyncwrap(fn) {
	const ctx = this;

	return function(req: Request, res: Response, next: NextFunction): object {
		return fn.call(ctx, req, res, next).catch(next);
	};
}

export default {
	asyncwrap,
};
