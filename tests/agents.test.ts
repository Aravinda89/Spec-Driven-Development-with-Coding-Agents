import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createServer } from 'node:http';
import { AddressInfo } from 'node:net';
import { createApp } from '../src/app';

describe('AgentClinic agent record API', () => {
  let server: ReturnType<typeof createServer>;
  let baseUrl: string;

  beforeAll(async () => {
    const app = createApp();
    server = createServer(app);
    await new Promise<void>((resolve) => server.listen(0, resolve));

    const address = server.address() as AddressInfo;
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  });

  it('creates and lists agents through the API', async () => {
    const createResponse = await fetch(`${baseUrl}/api/agents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test Agent', status: 'healthy' }),
    });

    expect(createResponse.status).toBe(201);
    const created = await createResponse.json();
    expect(created.name).toBe('Test Agent');
    expect(created.status).toBe('healthy');

    const listResponse = await fetch(`${baseUrl}/api/agents`);
    expect(listResponse.status).toBe(200);
    const list = await listResponse.json();
    expect(Array.isArray(list)).toBe(true);
    expect(list.some((agent: { name: string }) => agent.name === 'Test Agent')).toBe(true);
  });
});
