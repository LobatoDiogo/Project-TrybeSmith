import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/User';
import usersModel from '../models/users.model';

const configJWT: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

async function createUser(username: string, vocation: string, level: number, password: string)
  : Promise<User> {
  const newUser = await usersModel.createUser(username, vocation, level, password);

  return newUser;
}

async function login(username: string, password: string): Promise<string> {
  const user = await usersModel.findByUsername(username);

  if (!user || password !== user.password) {
    throw new Error('Unauthorized');
  }

  const token = jwt.sign({ password: user.password }, 'JWT_SECRET', configJWT);
  return token;
}

export default {
  createUser,
  login,
};
