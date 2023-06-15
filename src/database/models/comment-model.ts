import { Model, INTEGER, STRING } from 'sequelize';
import {
  IsNotEmpty, MinLength, MaxLength, IsInt,
} from 'class-validator';
import db from '.';

import Post from './post-model';
import User from './user-model';

class Comment extends Model {
  public id?: number;

  @IsInt()
  @IsNotEmpty()
  public postId!: number;

  @IsInt()
  @IsNotEmpty()
  public userId!: number;

  @MinLength(1)
  @MaxLength(1024)
  public content!: string;
}

Comment.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  postId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'Post',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  userId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  content: {
    allowNull: false,
    type: STRING(1024),
  },
}, {
  sequelize: db,
  modelName: 'Comment',
  underscored: true,
});

Comment.belongsTo(Post, { foreignKey: 'post_id', as: 'post' });
Comment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

export default Comment;
