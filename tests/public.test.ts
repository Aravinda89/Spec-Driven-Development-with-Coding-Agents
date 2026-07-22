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

  it('includes a responsive viewport meta tag', () => {
    const html = fs.readFileSync(path.resolve(process.cwd(), 'public', 'index.html'), 'utf-8');
    expect(html).toContain('<meta name="viewport" content="width=device-width,initial-scale=1" />');
  });

  it('includes responsive CSS media query rules', () => {
    const css = fs.readFileSync(path.resolve(process.cwd(), 'public', 'css', 'styles.css'), 'utf-8');
    expect(css).toContain('@media (max-width: 768px)');
    expect(css).toContain('@media (max-width: 480px)');
  });

  it('contains the MVP dashboard shell copy for agent records', () => {
    const mainScript = fs.readFileSync(path.resolve(process.cwd(), 'public', 'js', 'main.js'), 'utf-8');
    expect(mainScript).toContain('Agent Records');
    expect(mainScript).toContain('Create Agent');
  });
});
