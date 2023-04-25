import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function listOrders(req: Request, res: Response) {
  const allOrders = await ordersService.listOrders();
  res.status(200).json(allOrders);
}

export default {
  listOrders,
};
