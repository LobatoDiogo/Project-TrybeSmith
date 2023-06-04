import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import orderMiddleware from '../middlewares/order.middleware';
import tokenMiddleware from '../middlewares/token.middleware';

const ordersRouter = Router();

ordersRouter
  .get('/', ordersController.listOrders)
  .post('/', tokenMiddleware, orderMiddleware, ordersController.createOrder);

export = ordersRouter;
