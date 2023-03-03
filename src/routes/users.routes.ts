import * as express from 'express';

import User from '../database/models/user-model';
import UserService from '../services/users.service';
import UserController from '../controllers/users.controller';

const router = express.Router();

const userController = new UserController(new UserService(User));

router.post('/register', userController.register.bind(userController));
router.post('/login', userController.login.bind(userController));
router.get('/:id', userController.getById.bind(userController));

export default router;
