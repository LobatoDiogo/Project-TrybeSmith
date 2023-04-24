import { ResultSetHeader } from 'mysql2';
import { Products } from '../interfaces/Products';
import connection from './connection';

async function registerProduct(name: string, amount: string): Promise<Products> {
  const [rows] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  
  const newProduct = {
    id: rows.insertId,
    name,
    amount,
  };

  return newProduct;
}

export default {
  registerProduct,
};
