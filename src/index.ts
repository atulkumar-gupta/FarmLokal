// import express from 'express';
// import { getToken } from './auth/oauth';
// import productRouter from './products/routes';

// const app = express();
// app.use(express.json());

// app.use('/products', productRouter);

// app.get('/health', (_, res) => res.send('OK'));

// app.listen(3000, () => console.log('Server running on port 3000'));
import express, { Request, Response } from 'express';
import productRouter from './products/routes';

const app = express();


app.use(express.json());

app.use('/products', productRouter);

app.get('/health', (_req: Request, res: Response) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
