import express from 'express';
import winston from 'winston';

import config from './config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World !');
});

app.listen(config.PORT, () => {
  winston.info(`Listening on port ${config.PORT}!`);
});
