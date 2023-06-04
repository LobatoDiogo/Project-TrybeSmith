import { NextFunction, Request, Response } from 'express';
import usersService from '../services/users.service';
import { generateToken } from '../utils/auth';

async function createUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;

  const newUser = await usersService.createUser(username, vocation, level, password);

  const token = generateToken(newUser);
  
  return res.status(201).json({ token });
}

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;

    const token = await usersService.login(username, password);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
}

export default {
  createUser,
  login,
};
