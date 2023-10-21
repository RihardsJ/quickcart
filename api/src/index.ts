import express, { Response, Request } from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'OK!' });
});

app.listen(PORT, () => {
  console.log(`quickcart api is running on port ${PORT}`);
});
