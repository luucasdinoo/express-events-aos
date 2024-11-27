import 'reflect-metadata';
import 'dotenv/config';

import Express from 'express';

const app = Express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`System running in port ${PORT}`));

app.get('/status', (req, res) => {
  res.json({ status: 'Application OK' });
});
