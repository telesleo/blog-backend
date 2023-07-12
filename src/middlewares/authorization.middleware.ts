import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import IUser from '../interfaces/IUser';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization as string;

  if (!token) {
    res.status(401).json({ message: 'Access token is missing.' });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string) as IUser;
    req.user = user;
  } catch(error: any) {
    res.status(401).json({ message: 'Invalid token.' });
    return;
  }

  next();
}
