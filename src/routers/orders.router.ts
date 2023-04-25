import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.use('/', ordersController.listOrders);

export = ordersRouter;
