export function Header() {
  const el = document.createElement('header');
  el.className = 'site-header';
  el.innerHTML = `<div class="container"><h1>AgentClinic</h1><p>Clinic for AI agents</p></div>`;
  return el;
}
