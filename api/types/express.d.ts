interface ResErrorParams {
  statusCode?: number;
  message?: string;
}

declare namespace Express {
  export interface Request {
    context?: object;
  }

  export interface Response {
    error(params: ResErrorParams)
  }

  export interface Errback {
    statusCode?: number;
    message?: string;
  }
}