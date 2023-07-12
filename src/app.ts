import 'dotenv/config';
import * as express from 'express';
import bodyParser = require('body-parser');
import 'express-async-errors';

import userRoutes from './routes/users.routes';
import postRoutes from './routes/posts.routes';

import errorHandler from './middlewares/error.middleware';

const app = express();

app.use(bodyParser.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ORIGIN);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use(errorHandler);

export default app;
