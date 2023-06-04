import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function listOrders(req: Request, res: Response) {
  const allOrders = await ordersService.listOrders();
  res.status(200).json(allOrders);
}

async function createOrder(req: Request, res: Response): Promise<void> {
  const { productsIds } = req.body;
  const { id } = res.locals.user;

  const newOrder = await ordersService.createOrder(id, productsIds);

  res.status(201).json({ userId: newOrder.userId, productsIds });
}

export default {
  listOrders,
  createOrder,
};
