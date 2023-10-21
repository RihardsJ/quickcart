import express, { Response, Request } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'OK!' });
});

export default app;
