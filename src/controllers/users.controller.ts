import { Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import UserService from '../services/users.service';

export default class UserController {
  constructor(private userService: UserService) { }

  async register(req: Request, res: Response) {
    const user = req.body as IUser;

    const createdUser = await this.userService.register(user);

    return res.json({ createdUser });
  }
}
