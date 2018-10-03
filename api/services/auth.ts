import config from '../config';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function isJWTValid(token): boolean {
  try {
    jwt.verify(token, config.secret);
	} catch (err) {
    return false;
  }
  
	return true;
}

export function onlyAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const token = req.get('x-access-token');

  if (!isJWTValid(token)) {
    res.error({statusCode: 403, message: 'Unauthorized'});
  } else {
    next();
  }
}