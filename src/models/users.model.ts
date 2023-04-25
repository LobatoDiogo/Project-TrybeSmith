import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../interfaces/User';
import connection from './connection';

async function createUser(username: string, vocation: string, level: number, password: string)
  : Promise<User> {
  const [row] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  
  const newUser = {
    id: row.insertId,
    username,
    vocation,
    level,
    password,
  };

  return newUser;
}

async function findByUsername(username: string): Promise<User | null> {
  const [row] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username || null],
  );

  const [user] = row;
  return user as (User | null);
}

export default {
  createUser,
  findByUsername,
};
