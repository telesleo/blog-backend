import * as express from 'express';

import authMiddleware from '../middlewares/authorization.middleware';

import Post from '../database/models/post-model';
import PostService from '../services/posts.service';
import PostController from '../controllers/posts.controller';

import Like from '../database/models/like-model';

const router = express.Router();

const postController = new PostController(new PostService(Post, Like));

router.get('/', postController.getAll.bind(postController));
router.get('/:id', postController.getById.bind(postController));
router.post('/', authMiddleware, postController.create.bind(postController));
router.get('/:id/likes', authMiddleware, postController.getLikes.bind(postController));

export default router;
