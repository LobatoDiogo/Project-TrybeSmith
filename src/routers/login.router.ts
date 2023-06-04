import { Router } from 'express';
import usersController from '../controllers/users.controller';
import userMiddleware from '../middlewares/user.middleware';

const loginRouter = Router();

loginRouter.use('/', userMiddleware.loginVerify, usersController.login);

export = loginRouter;