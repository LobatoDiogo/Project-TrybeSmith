import { Order } from '../interfaces/Order';
import ordersModel from '../models/orders.model';

async function listOrders(): Promise<Order[]> {
  const orders = await ordersModel.listOrders();
  return orders;
}

export default {
  listOrders,
};
