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

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
  });

  app.get('/api/agents', async (_req, res) => {
    try {
      const db = await openDatabase();
      try {
        const rows = await db.all<AgentRecord>(
          'SELECT id, name, status FROM agents ORDER BY id ASC'
        );
        res.json(rows);
      } finally {
        await db.close();
      }
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
      try {
        const result = await db.run(
          'INSERT INTO agents (name, status) VALUES (?, ?)',
          [name.trim(), typeof status === 'string' ? status : 'healthy']
        );

        const inserted = await db.get<AgentRecord>(
          'SELECT id, name, status FROM agents WHERE id = ?',
          [result.lastID]
        );

        res.status(201).json(inserted);
      } finally {
        await db.close();
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to create agent' });
    }
  });

  return app;
}
