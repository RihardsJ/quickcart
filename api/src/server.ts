import express from 'express';
import { IContainer, Request, Response } from './interfaces';

interface IBody {
  [key: string]: string;
}

export default function ({ cors, morgan, constants: { LOGGER } }: IContainer) {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(morgan(LOGGER.FORMAT));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.get('/', (req: Request, res: Response) => {
    res.json({ status: 'ok', method: 'get', path: '/', query: req.query });
  });

  app.post('/', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      method: 'post',
      body: req.body as IBody,
      query: req.query,
    });
  });

  return app;
}
