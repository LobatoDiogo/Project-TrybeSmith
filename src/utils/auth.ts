import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/User';

const secretKey: Secret = process.env.JWT_SECRET || 'JWT_SECRET';

const configJWT: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload: User) => {
  const { id, username, level, vocation } = payload;

  const token = jwt.sign({ username, vocation, level, id }, secretKey, configJWT);

  return token;
};

const validaToken = (token: string) => {
  const decoded = jwt.verify(token, secretKey, configJWT);

  return decoded;
};

export { generateToken, validaToken };
