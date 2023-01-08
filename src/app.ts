import * as express from 'express';
import bodyParser = require('body-parser');

import userRoutes from './routes/users.routes';

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

export default app;
