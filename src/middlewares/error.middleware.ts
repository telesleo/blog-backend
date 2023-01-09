import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';

function errorHandler(error: AppError, _req: Request, res: Response, next: NextFunction) {
  if (error.status) {
    res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).send({ message: 'Internal server error.' });
  }

  next();
}

export default errorHandler;
