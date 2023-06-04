import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schemas/login.schema';

const errorMessages = {
  required: 'is required',
  string: 'must be a string',
  length: 'length must be at least 3 characters long',
  number: 'must be a number',
  minValue: 'must be greater than or equal to 1',
  minPasswordLength: 'length must be at least 8 characters long',
};

const loginVerify = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });

  if (!username || !password) {
    return res.status(400).json({ message: error?.message });
  }

  if (typeof username !== 'string') {
    return res.status(422).json({ message: `"username" ${errorMessages.string}` });
  }

  if (username.length < 3) {
    return res.status(422).json({ message: `"username" ${errorMessages.length}` });
  }

  return next();
};

const verifyVocation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;

  if (!vocation) {
    return res.status(400).json({ message: `"vocation" ${errorMessages.required}` });
  }

  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: `"vocation" ${errorMessages.string}` });
  }

  if (vocation.length < 3) {
    return res.status(422).json({ message: `"vocation" ${errorMessages.length}` });
  }

  return next();
};

const verifyLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level <= 0) {
    return res.status(422).json({ message: `"level" ${errorMessages.minValue}` });
  }

  if (!level) {
    return res.status(400).json({ message: `"level" ${errorMessages.required}` });
  }

  if (typeof level !== 'number') {
    return res.status(422).json({ message: `"level" ${errorMessages.number}` });
  }

  return next();
};

const verifyPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: `"password" ${errorMessages.required}` });
  }

  if (typeof password !== 'string') {
    return res.status(422).json({ message: `"password" ${errorMessages.string}` });
  }

  if (password.length < 8) {
    return res.status(422)
      .json({ message: `"password" ${errorMessages.minPasswordLength}` });
  }

  return next();
};

export = { loginVerify, verifyVocation, verifyLevel, verifyPassword };