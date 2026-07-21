export function Main() {
  const el = document.createElement('main');
  el.className = 'site-main';
  el.innerHTML = `
    <div class="container">
      <h2>Welcome</h2>
      <p>This is a minimal AgentClinic home page. Use this surface for demos and course examples.</p>
    </div>
  `;
  return el;
}
