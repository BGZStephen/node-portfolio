import { Request, Response, NextFunction, Errback } from 'express';
import { UserModel } from './user-model';
import { WorkExampleModel } from './work-example-model';
import { TechnologyModel } from './technology-model';

interface ResErrorParams {
  statusCode?: number;
  message?: string;
}

export interface Request extends Request {
  context?: {
    user: UserModel,
    technology?: TechnologyModel,
    workExample?: WorkExampleModel,
  };
  files: any[];
  file: any;
}

export interface Response extends Response {
  error(params: any): void;
}

export interface ErrBack extends Errback {
  statusCode?: number;
  message?: string;
}

export interface NextFunction extends NextFunction {}