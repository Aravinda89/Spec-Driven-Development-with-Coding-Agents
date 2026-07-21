import { describe, it, expect, afterAll } from 'vitest';
import { openDatabase } from '../src/db';

let db: Awaited<ReturnType<typeof openDatabase>>;

describe('AgentClinic SQLite persistence', () => {
  it('opens the SQLite database and creates the agents table', async () => {
    db = await openDatabase();
    const row = await db.get<{ name: string }>(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='agents'"
    );
    expect(row).toBeTruthy();
    expect(row?.name).toBe('agents');
  });
});

afterAll(async () => {
  if (db) {
    await db.close();
  }
});
