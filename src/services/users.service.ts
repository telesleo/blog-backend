import 'dotenv/config';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import AppError from '../errors/appError';
import User from '../database/models/user-model';
import IUser from '../interfaces/IUser';
import ILogin from '../interfaces/ILogin';

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

  async login(loginData: ILogin): Promise<string> {
    const user = await this.userModel.findOne({ where: { email: loginData.email } });

    if (!user || !(await bcrypt.compare(loginData.password, user.password))) {
      throw new AppError('Invalid email or password.', 401);
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '7d' });

    return token;
  }
}
