import { Request, Response } from 'express';
import PostService from '../services/posts.service';

export default class PostController {
  constructor(private postService: PostService) { }

  async getAll(_req: Request, res: Response) {
    const posts = await this.postService.getAll();

    return res.status(200).json(posts);
  }
}
