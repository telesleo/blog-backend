import { Request, Response } from 'express';
import IPost from '../interfaces/IPost';
import PostService from '../services/posts.service';

export default class PostController {
  constructor(private postService: PostService) { }

  async getAll(_req: Request, res: Response) {
    const posts = await this.postService.getAll();

    return res.status(200).json(posts);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const post = await this.postService.getById(parseInt(id, 10));

    return res.status(200).json(post);
  }

  async create(req: Request, res: Response) {
    const post = req.body as IPost;

    post.authorId = req.user?.id as number;

    await this.postService.create(post);

    return res.status(201).json({ message: 'Post created successfully.' });
  }

  async getLikes(req: Request, res: Response) {
    const postId  = parseInt(req.params.id);

    const likes = await this.postService.getLikes(postId);

    return res.status(200).json({ likes: likes });
  }
}
