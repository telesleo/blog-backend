import * as express from 'express';

import Post from '../database/models/post-model';
import PostService from '../services/posts.service';
import PostController from '../controllers/posts.controller';

const router = express.Router();

const postController = new PostController(new PostService(Post));

router.get('/', postController.getAll.bind(postController));

export default router;
