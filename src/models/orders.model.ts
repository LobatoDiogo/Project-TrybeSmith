import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/Order';
import connection from './connection';

export interface IUpdatedProduct {
  orderId: number;
  productId: number;
}

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

async function createOrder(userId: number): Promise<Order> {
  const [row] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  return { id: row.insertId, userId };
}

async function updateProduct(orderId: number, productId: number): Promise<IUpdatedProduct> {
  await connection.execute(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, productId],
  );
  return { orderId, productId };
}

export default {
  listOrders,
  createOrder,
  updateProduct,
};
