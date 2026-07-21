export function Footer() {
  const el = document.createElement('footer');
  el.className = 'site-footer';
  el.innerHTML = `<div class="container"><small>© ${new Date().getFullYear()} AgentClinic</small></div>`;
  return el;
}
