import { Order } from '../interfaces/Order';
import ordersModel from '../models/orders.model';

async function listOrders(): Promise<Order[]> {
  const orders = await ordersModel.listOrders();
  return orders;
}

async function createOrder(userId: number, productsIds: number[]): Promise<Order> {
  const newOrder = await ordersModel.createOrder(userId);

  await Promise.all(productsIds.map((pId) => 
    ordersModel.updateProduct(newOrder.id as number, pId)));

  return newOrder;
}

export default {
  listOrders,
  createOrder,
};
