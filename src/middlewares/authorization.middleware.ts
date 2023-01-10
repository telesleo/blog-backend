import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import IUser from '../interfaces/IUser';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization as string;

  const user = jwt.verify(token, process.env.JWT_SECRET as string) as IUser;

  req.user = user;

  if (!user.id) {
    res.status(401).json({ message: 'User not authorized.' });
    return;
  }

  next();
}
