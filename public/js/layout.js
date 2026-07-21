import { Header } from './header.js';
import { Main } from './main.js';
import { Footer } from './footer.js';

const app = document.getElementById('app');
if (app) {
  app.appendChild(Header());
  app.appendChild(Main());
  app.appendChild(Footer());
} else {
  console.error('No #app element found for layout to mount into');
}
