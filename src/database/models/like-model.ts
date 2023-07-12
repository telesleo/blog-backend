import { Model, INTEGER } from 'sequelize';
import db from '.';

class Like extends Model {
  public userId!: number;
  public postId!: number;
}

Like.init({
  userId: {
    primaryKey: true,
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  postId: {
    primaryKey: true,
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'Post',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  sequelize: db,
  modelName: 'Like',
  underscored: true,
});

export default Like;