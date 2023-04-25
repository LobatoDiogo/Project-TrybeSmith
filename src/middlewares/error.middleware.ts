import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof Error && err.message === 'Unauthorized') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(500).json({ message: err.message });
};

export default errorMiddleware;