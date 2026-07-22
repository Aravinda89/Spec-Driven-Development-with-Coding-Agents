export function Main() {
  const el = document.createElement('main');
  el.className = 'site-main';
  el.innerHTML = `
    <div class="container">
      <section class="mvp-card">
        <h2>Agent Records</h2>
        <p>Manage the first MVP slice for AgentClinic with a lightweight record workflow for agents.</p>
        <div class="mvp-actions">
          <button type="button">Create Agent</button>
          <button type="button" class="secondary">View Agents</button>
        </div>
      </section>
    </div>
  `;
  return el;
}
