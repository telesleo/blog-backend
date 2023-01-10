import { Model, INTEGER, STRING } from 'sequelize';
import {
  IsNotEmpty, MinLength, MaxLength, IsOptional, IsInt, Matches,
} from 'class-validator';
import db from '.';

import User from './user-model';

class Post extends Model {
  public id?: number;

  @MinLength(3)
  @MaxLength(128)
  @IsNotEmpty()
  @Matches(/^[a-zA-Z]+(?:[ ]{1}[a-zA-Z]+)*$/)
  public title!: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(512)
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9#&*@]*(?:[ ]{1}[a-zA-Z0-9#&*@]*)*$/)
  public description?: string;

  @IsInt()
  @IsNotEmpty()
  public authorId!: number;

  @MinLength(64)
  @MaxLength(16384)
  public content!: string;
}

Post.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  title: {
    allowNull: false,
    type: STRING(256),
  },
  description: {
    type: STRING(1024),
  },
  authorId: {
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
    type: STRING(4096),
  },
}, {
  sequelize: db,
  modelName: 'Post',
  underscored: true,
});

User.hasMany(Post, { foreignKey: 'author_id', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'author_id', as: 'author' });

export default Post;
