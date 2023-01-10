import { Request, Response } from 'express';
import IPost from '../interfaces/IPost';
import PostService from '../services/posts.service';

export default class PostController {
  constructor(private postService: PostService) { }

  async getAll(_req: Request, res: Response) {
    const posts = await this.postService.getAll();

    return res.status(200).json(posts);
  }

  async create(req: Request, res: Response) {
    const post = req.body as IPost;

    post.authorId = req.user?.id as number;

    await this.postService.create(post);

    return res.status(201).json({ message: 'Post created successfully.' });
  }
}
