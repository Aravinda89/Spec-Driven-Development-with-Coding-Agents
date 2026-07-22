import express, { Express } from 'express';
import { openDatabase } from './db';

type AgentRecord = {
  id: number;
  name: string;
  status: string;
};

type CreateAgentPayload = {
  name?: string;
  status?: string;
};

export function createApp(): Express {
  const app = express();

  app.use(express.json());

  app.get('/api/agents', async (_req, res) => {
    try {
      const db = await openDatabase();
      const rows = await db.all<AgentRecord>(
        'SELECT id, name, status FROM agents ORDER BY id ASC'
      );
      await db.close();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to list agents' });
    }
  });

  app.post('/api/agents', async (req, res) => {
    const { name, status } = req.body as CreateAgentPayload;

    if (typeof name !== 'string' || !name.trim()) {
      res.status(400).json({ error: 'name is required' });
      return;
    }

    try {
      const db = await openDatabase();
      const result = await db.run(
        'INSERT INTO agents (name, status) VALUES (?, ?)',
        [name.trim(), typeof status === 'string' ? status : 'healthy']
      );

      const inserted = await db.get<AgentRecord>(
        'SELECT id, name, status FROM agents WHERE id = ?',
        [result.lastID]
      );
      await db.close();

      res.status(201).json(inserted);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create agent' });
    }
  });

  return app;
}
