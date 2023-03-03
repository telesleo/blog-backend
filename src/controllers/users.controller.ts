import { Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import ILogin from '../interfaces/ILogin';
import UserService from '../services/users.service';

export default class UserController {
  constructor(private userService: UserService) { }

  async register(req: Request, res: Response) {
    const user = req.body as IUser;

    await this.userService.register(user);

    return res.status(201).json({ message: 'User created successfully.' });
  }

  async login(req: Request, res: Response) {
    const login = req.body as ILogin;

    const token = await this.userService.login(login);

    return res.status(200).json({ token });
  }

  async validate(req: Request, res: Response) {
    const { user } = req;

    const data = await this.userService.getById(user?.id);

    return res.status(200).json(data);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await this.userService.getById(parseInt(id), true);

    return res.status(200).json(user);
  }
}
