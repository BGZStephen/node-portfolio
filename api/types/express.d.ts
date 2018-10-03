declare namespace Express {
  export interface Request {
    context?: object;
  }

  export interface Response {
    error?: object;
  }

  export interface Errback {
    statusCode?: number;
    message?: string;
  }
}