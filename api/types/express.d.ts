interface ResErrorParams {
  statusCode?: number;
  message?: string;
}

declare namespace Express {
  export interface Request {
    context?: {
      user?: object,
      workExample?: object,
      technology?: object,
    };
    files: object[];
  }

  export interface Response {
    error(params: ResErrorParams)
  }

  export interface Errback {
    statusCode?: number;
    message?: string;
  }
}