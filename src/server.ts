import 'reflect-metadata';
import 'dotenv/config';
import './shared/container';

import Express from 'express';
import { AppDataSource } from '@database/data-source';
import cors from 'cors';
import { routes } from 'routes';

const app = Express();
const PORT = process.env.PORT || 8080;

app.use(Express.json());
app.use(cors());
app.use(routes);

AppDataSource.initialize().then(() => {
  console.log('DATABASE OK!!!');
  app.listen(PORT, () => console.log(`System running in port ${PORT}`));
});

app.get('/status', (req, res) => {
  res.json({ status: 'Application OK' });
});
