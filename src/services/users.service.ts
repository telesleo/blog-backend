import * as bcrypt from 'bcrypt';
import User from '../database/models/user-model';
import IUser from '../interfaces/IUser';

export default class UserService {
  constructor(private userModel: typeof User) { }

  async register(user: IUser): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const createdUser = await this.userModel.create({ ...user, password: hashedPassword }) as IUser;

    return createdUser;
  }
}
