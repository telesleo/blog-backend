import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import AppError from '../errors/appError';
import User from '../database/models/user-model';
import IUser from '../interfaces/IUser';

export default class UserService {
  constructor(private userModel: typeof User) { }

  async register(userData: IUser) {
    const user = plainToClass(User, userData);

    const errors = await validate(user);
    if (errors.length > 0) {
      throw new AppError(`Invalid ${errors[0].property}.`, 400);
    }

    const userWithEmail = await this.userModel.findOne({
      where: { email: userData.email },
    });
    if (userWithEmail) {
      throw new AppError('A user with this email address already exists.', 400);
    }

    const userWithUsername = await this.userModel.findOne({
      where: { username: userData.username },
    });
    if (userWithUsername) {
      throw new AppError('A user with this username already exists.', 400);
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    await this.userModel.create({ ...userData, password: hashedPassword });
  }
}
