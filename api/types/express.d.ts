declare namespace Express {
  export interface Request {
     context?: object;
  }

  export interface Response {
    error?: object;
 }
}