import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import User from './user-model';

class Post extends Model {
  public id?: number;
  public title!: string;
  public description?: string;
  public authorId!: number;
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
