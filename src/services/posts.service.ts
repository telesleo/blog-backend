import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import 'dotenv/config';
import AppError from '../errors/appError';
import Post from '../database/models/post-model';
import User from '../database/models/user-model';
import Like from '../database/models/like-model';
import IPost from '../interfaces/IPost';
import ILike from '../interfaces/ILike';
import Comment from '../database/models/comment-model';
import IComment from '../interfaces/IComment';

export default class PostService {
  postQueryOptions = {};

  constructor(
    private postModel: typeof Post,
    private likeModel: typeof Like,
    private commentModel: typeof Comment,
  ) {
    this.postQueryOptions = {
      attributes: ['id', 'title', 'author_id', 'description', 'content', 'created_at', 'updated_at'],
      include: { model: User, as: 'author', attributes: ['username', 'name', 'about'] },
    };
  }

  async getAll(): Promise<IPost[]> {
    const posts = await this.postModel.findAll({
      ...this.postQueryOptions,
      order: [['createdAt', 'DESC']],
      limit: 20,
    });

    return posts;
  }

  async getById(id: number): Promise<IPost> {
    const post = await this.postModel.findOne({
      ...this.postQueryOptions,
      where: { id },
    }) as IPost;

    return post;
  }

  async create(postData: IPost) {
    const post = plainToClass(Post, postData);
    const errors = await validate(post);
    if (errors.length > 0) {
      throw new AppError(`Invalid ${errors[0].property}.`, 400);
    }

    await this.postModel.create({ ...postData });
  }

  async getLikes(postId: number) {
    return await this.likeModel.count({ where: { postId }, });
  }

  async like(like: ILike) {
    const existingLike =  await this.likeModel.findOne(
      { where: { userId: like.userId, postId: like.postId }, }
    );

    if (existingLike) {
      throw new AppError(`This user has already liked this post.`, 400);
    }

    await this.likeModel.create({ ...like });
  }

  async unlike(like: ILike) {
    const existingLike =  await this.likeModel.findOne(
      { where: { userId: like.userId, postId: like.postId }, }
    );

    if (!existingLike) {
      throw new AppError(`This post has not been liked by this user.`, 404);
    }

    await this.likeModel.destroy(
      { where: { userId: like.userId, postId: like.postId }, }
    );
  }

  async getLike(like: ILike): Promise<ILike | null> {
    const user = await this.likeModel.findOne({
      where: { userId: like.userId, postId: like.postId }
    });

    return user;
  }

  async getComments(postId: number): Promise<IComment[] | null> {
    const comments = await this.commentModel.findAll({
      where: { postId },
      attributes: ['id', 'post_id', 'user_id', 'content', 'created_at', 'updated_at'],
      include: { model: User, as: 'user', attributes: ['username', 'name'] },
    });

    return comments;
  }

  async createComment(commentData: IComment): Promise<IComment | null> {
    const comment = plainToClass(Comment, commentData);
    const errors = await validate(comment);
    if (errors.length > 0) {
      throw new AppError(`Invalid ${errors[0].property}.`, 400);
    }

    const commentAdded = await this.commentModel.create({ ...commentData });

    return commentAdded;
  }
}
