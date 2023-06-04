import { NextFunction, Request, Response } from 'express';
import { validaToken } from '../utils/auth';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = validaToken(authorization);

    res.locals.user = decoded;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;