import express from 'express';
import path from 'path';
import { openDatabase } from './db';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

async function start() {
  try {
    const db = await openDatabase();
    await db.close();
    app.listen(port, () => {
      console.log(`AgentClinic server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start AgentClinic:', error);
    process.exit(1);
  }
}

start();
