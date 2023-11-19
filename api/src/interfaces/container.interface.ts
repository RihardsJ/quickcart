import { IConstants } from './constants.interface';

import express, { Express, Request, NextFunction as Next, Response } from 'express';
import type cors from 'cors';
import type morgan from 'morgan';

export { type Express, type Request, type Response, type Next };

export type IMiddleware = (req: Request, res: Response, next: Next) => void;

export interface IContainer {
  express: typeof express;
  morgan: typeof morgan;
  cors: typeof cors;

  constants: IConstants;
  logger(req: Request, res: Response, next: Next): Next;
  server: Express;
}
