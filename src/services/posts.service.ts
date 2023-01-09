import 'dotenv/config';
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
}
