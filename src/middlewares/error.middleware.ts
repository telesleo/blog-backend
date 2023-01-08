import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';

function errorHandler(error: AppError, _req: Request, res: Response, next: NextFunction) {
  res.status(error.status || 500).send({ message: error.message });

  next();
}

export default errorHandler;
