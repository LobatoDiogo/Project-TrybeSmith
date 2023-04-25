import { User } from '../interfaces/User';
import usersModel from '../models/users.model';

async function createUser(username: string, vocation: string, level: number, password: string)
  : Promise<User> {
  const newUser = await usersModel.createUser(username, vocation, level, password);

  return newUser;
}

export default {
  createUser,
};
