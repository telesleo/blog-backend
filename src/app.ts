import * as express from 'express';
import bodyParser = require('body-parser');
import 'express-async-errors';

import userRoutes from './routes/users.routes';
import postRoutes from './routes/posts.routes';

import errorHandler from './middlewares/error.middleware';

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use(errorHandler);

export default app;
