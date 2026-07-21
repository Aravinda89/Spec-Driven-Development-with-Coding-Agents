import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('AgentClinic public assets', () => {
  it('serves an index.html file', () => {
    const filePath = path.resolve(process.cwd(), 'public', 'index.html');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('links to the CSS file from index.html', () => {
    const html = fs.readFileSync(path.resolve(process.cwd(), 'public', 'index.html'), 'utf-8');
    expect(html).toContain('<link rel="stylesheet" href="/css/styles.css" />');
  });
});
