import { Router } from 'express';
import usersController from '../controllers/users.controller';
import loginVerify from '../middlewares/user.middleware';

const loginRouter = Router();

loginRouter.use('/', loginVerify, usersController.login);

export = loginRouter;