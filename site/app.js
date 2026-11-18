'use strict';
// All functionality is local. No network requests, tracking, or account calls.
const recommendations = Object.freeze({
  static: {
    title: 'HTML + CSS',
    description: "Start with a static website. There's no install step, no server billing, and you can inspect every line.",
    command: 'node bin/ovbk.mjs init static-site my-first-site',
    note: 'Then open the generated index.html in a browser.'
  },
  react: {
    title: 'React + Vite',
    description: 'Build an interactive interface with components and state. Run locally, review changes, then compile static assets.',
    command: 'node bin/ovbk.mjs init react-vite my-react-site',
    note: 'Next: cd my-react-site && npm install && npm run dev.'
  },
  api: {
    title: 'Node.js HTTP API',
    description: 'Learn what a backend does with two simple endpoints. No framework or package installation needed.',
    command: 'node bin/ovbk.mjs init node-api my-first-api',
    note: 'Next: cd my-first-api && node server.mjs. It binds to localhost.'
  },
  full: {
    title: 'React + Node + optional Supabase',
    description: 'Learn the three pieces independently before connecting them. Start with a frontend; add an API and a secured database only when needed.',
    command: 'node bin/ovbk.mjs init react-vite my-fullstack-ui',
    note: 'Then explore the node-api and supabase folders. Nothing deploys automatically.'
  }
});
const titleEl = document.getElementById('recommendation-title');
const descriptionEl = document.getElementById('recommendation-description');
const commandEl = document.getElementById('recommendation-command');
const noteEl = document.getElementById('recommendation-note');
const copyBtn = document.getElementById('copy-command');

function renderRecommendation(value) {
  const item = recommendations[value] || recommendations.static;
  titleEl.textContent = item.title;
  descriptionEl.textContent = item.description;
  commandEl.textContent = item.command;
  noteEl.textContent = item.note;
  copyBtn.textContent = 'Copy';
}

document.querySelectorAll('input[name="goal"]').forEach(input => {
  input.addEventListener('change', () => { if (input.checked) renderRecommendation(input.value); });
});
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(commandEl.textContent);
    copyBtn.textContent = 'Copied!';
  } catch {
    copyBtn.textContent = 'Select text';
  }
});
renderRecommendation(document.querySelector('input[name="goal"]:checked')?.value || 'static');
