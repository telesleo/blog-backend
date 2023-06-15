import * as express from 'express';

import authMiddleware from '../middlewares/authorization.middleware';

import Post from '../database/models/post-model';
import PostService from '../services/posts.service';
import PostController from '../controllers/posts.controller';

import Like from '../database/models/like-model';
import Comment from '../database/models/comment-model';

const router = express.Router();

const postController = new PostController(new PostService(Post, Like, Comment));

router.get('/', postController.getAll.bind(postController));
router.get('/:id', postController.getById.bind(postController));
router.post('/', authMiddleware, postController.create.bind(postController));
router.get('/:id/likes', postController.getLikes.bind(postController));
router.post('/:id/likes', authMiddleware, postController.like.bind(postController));
router.delete('/:id/likes', authMiddleware, postController.unlike.bind(postController));
router.get('/:id/liked', authMiddleware, postController.checkIfLiked.bind(postController));
router.get('/:id/comments', postController.getComments.bind(postController));

export default router;
