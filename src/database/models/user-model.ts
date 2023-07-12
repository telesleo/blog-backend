import { Model, INTEGER, STRING } from 'sequelize';
import {
  IsEmail, IsNotEmpty, MinLength, MaxLength, IsOptional, Matches,
} from 'class-validator';
import db from '.';

class User extends Model {
  public id?: number;

  @MinLength(6)
  @MaxLength(254)
  @IsEmail()
  @IsNotEmpty()
  public email!: string;

  @MinLength(3)
  @MaxLength(32)
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9#&*@]*$/)
  public username!: string;

  @MinLength(8)
  @MaxLength(64)
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9#&*@]*$/)
  public password!: string;

  @MinLength(3)
  @MaxLength(64)
  @IsNotEmpty()
  @Matches(/^[a-zA-Z]+(?:[ ]{1}[a-zA-Z]+)*$/)
  public name!: string;

  @MinLength(3)
  @MaxLength(512)
  @IsOptional()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9#&*@]*(?:[ ]{1}[a-zA-Z0-9#&*@]*)*$/)
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
