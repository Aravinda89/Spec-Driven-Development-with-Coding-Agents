import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

const DATABASE_FILE = path.resolve(__dirname, '..', 'data', 'agentclinic.db');

export async function openDatabase(): Promise<Database> {
  const db = await open({
    filename: DATABASE_FILE,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS agents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'healthy'
    );
  `);

  return db;
}
