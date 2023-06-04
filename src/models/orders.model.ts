import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces/Order';
import connection from './connection';

export interface IUpdatedProduct {
  orderId: number;
  productId: number;
}

async function listOrders(): Promise<Order[]> {
  const [rows] = await connection
    .execute<RowDataPacket[]>(
    `SELECT o.id, o.user_id AS userId, 
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o
      JOIN Trybesmith.products AS p ON p.order_id = o.id
      GROUP BY o.id`,
  );
  return rows as Order[];
}

async function createOrder(userId: number): Promise<Order> {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  return { id: insertId, userId };
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
