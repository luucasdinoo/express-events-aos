import 'reflect-metadata';
import 'dotenv/config';

import Express from 'express';
import { AppDataSource } from '@database/data-source';

const app = Express();
const PORT = process.env.PORT;

AppDataSource.initialize().then(() => {
  console.log('DATABASE OK!!!');
  app.listen(PORT, () => console.log(`System running in port ${PORT}`));
});

app.get('/status', (req, res) => {
  res.json({ status: 'Application OK' });
});
