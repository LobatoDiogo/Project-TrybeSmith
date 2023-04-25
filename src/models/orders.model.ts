import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/Order';
import connection from './connection';

async function listOrders(): Promise<Order[]> {
  const [rows] = await connection
    .execute<RowDataPacket[]>(
    `SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders
    JOIN Trybesmith.products ON orders.id = products.order_id
    GROUP BY orders.id, orders.user_id`,
  );
  return rows as Order[];
}

export default {
  listOrders,
};
