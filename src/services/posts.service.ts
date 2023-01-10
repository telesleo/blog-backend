import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import 'dotenv/config';
import AppError from '../errors/appError';
import Post from '../database/models/post-model';
import User from '../database/models/user-model';
import IPost from '../interfaces/IPost';

export default class PostService {
  constructor(private postModel: typeof Post) { }

  async getAll(): Promise<IPost[]> {
    const posts = await this.postModel.findAll({
      attributes: ['id', 'title', 'author_id', 'description', 'content', 'created_at', 'updated_at'],
      order: [['createdAt', 'DESC']],
      limit: 20,
      include: { model: User, as: 'author', attributes: ['username', 'name', 'about'] },
    });

    return posts;
  }

  async create(postData: IPost) {
    const post = plainToClass(Post, postData);
    const errors = await validate(post);
    if (errors.length > 0) {
      throw new AppError(`Invalid ${errors[0].property}.`, 400);
    }

    await this.postModel.create({ ...postData });
  }
}
