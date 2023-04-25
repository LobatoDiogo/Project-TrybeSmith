import { Request, Response } from 'express';
import usersService from '../services/users.service';
import generateToken from '../utils/auth';

async function createUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;

  const newUser = await usersService.createUser(username, vocation, level, password);

  const token = generateToken(newUser);
  
  return res.status(201).json({ token });
}

export default {
  createUser,
};
