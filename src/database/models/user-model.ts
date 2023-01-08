import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  public id?: number;
  public email!: string;
  public username!: string;
  public password!: string;
  public name!: string;
  public about?: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  email: {
    allowNull: false,
    type: STRING(256),
  },
  username: {
    allowNull: false,
    unique: true,
    type: STRING(256),
  },
  password: {
    allowNull: false,
    type: STRING(256),
  },
  name: {
    allowNull: false,
    type: STRING(256),
  },
  about: {
    type: STRING(1024),
  },
}, {
  sequelize: db,
  modelName: 'User',
  underscored: true,
});

export default User;
