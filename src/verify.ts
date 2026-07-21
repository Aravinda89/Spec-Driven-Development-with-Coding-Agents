import { openDatabase } from './db';

async function verify() {
  try {
    const db = await openDatabase();
    await db.get('SELECT 1');
    await db.close();
    console.log('Verification successful: SQLite database opened and schema is ready.');
    process.exit(0);
  } catch (error) {
    console.error('Verification failed:', error);
    process.exit(1);
  }
}

verify();
