import { Router } from 'express';
import usersController from '../controllers/users.controller';
import userMiddleware from '../middlewares/user.middleware';

const usersRouter = Router();

usersRouter
  .post(
    '/',
    userMiddleware.loginVerify,
    userMiddleware.verifyLevel,
    userMiddleware.verifyVocation,
    userMiddleware.verifyPassword,
    usersController.createUser,
  );

export = usersRouter;