import { Request, Response, NextFunction, Errback } from 'express';
import { UserModel } from './user-model';

interface ResErrorParams {
  statusCode?: number;
  message?: string;
}

export interface Request extends Request {
  context?: {
    user: UserModel,
    technology?: object,
    workExample?: object,
  };
  files: object[];
}

export interface Response extends Response {
  error(params: any): void;
}

export interface ErrBack extends Errback {
  statusCode?: number;
  message?: string;
}

export interface NextFunction extends NextFunction {}