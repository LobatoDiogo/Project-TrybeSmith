import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/User';

const secretKey: Secret = process.env.JWT_SECRET || 'JWT_SECRET';

const configJWT: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload: User) => {
  const { password, ...payloadWithoutPassword } = payload;
  return jwt.sign({ payload: payloadWithoutPassword }, secretKey, configJWT);
};

export default generateToken;
