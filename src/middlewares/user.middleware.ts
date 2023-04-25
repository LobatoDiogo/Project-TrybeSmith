import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schemas/login.schema';

const loginVerify = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });

  if (!username || !password) {
    res.status(400).json({ message: error?.message });
  }

  next();
};

export = loginVerify;