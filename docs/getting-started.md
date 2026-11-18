# First build: from idea to a working local project

## Lesson 1 — Know your pieces

- **Frontend** is the interface a visitor sees (HTML/CSS/JavaScript, or React).
- **Backend** receives requests and performs server-side work (e.g. the Node HTTP API example).
- **Database** stores data, with access rules (optional Supabase example).
- **GitHub** stores reviewed history. A repository is not itself a public running server.
- **Netlify/Vercel** can host frontend sites. Deployments do not automatically validate security or business suitability.

## Lesson 2 — Make something work locally

1. Install Node.js 20+, open a terminal and run `node --version`.
2. From the toolkit directory run `node bin/ovbk.mjs init static-site demo-site`.
3. Open `demo-site/index.html` in a browser and inspect its code.
4. Run `node bin/ovbk.mjs audit demo-site` to see suggestions.
5. Change the title; reload and verify that it works.

## Lesson 3 — Make an API

1. Run `node bin/ovbk.mjs init node-api demo-api`.
2. Run `cd demo-api && node server.mjs`.
3. Open `http://localhost:3000/health`; observe a JSON response.
4. Read `server.mjs` to understand the route, status and `Content-Type`.
5. Stop the server with `Ctrl+C`. This backend is for **local learning**, not hardened production.

## Lesson 4 — React is optional

To build an interactive SPA, run `node bin/ovbk.mjs init react-vite demo-react`, then `cd demo-react && npm install && npm run dev`. Installation downloads free packages and should be reviewed for known vulnerabilities. The template contains no AI API keys and no automatic deployment.

## Lesson 5 — Review before deployment

Read [deployment](deployment.md), [security basics](security-basics.md), and run `node --test`. Commit changes deliberately. A live site should be published only after you review its content and the hosting account's usage limits.

### What the CLI actually does

`init` copies tracked sample files to a new directory. It refuses to overwrite an existing target. `audit` checks for several basic files and potential local `.env` exposure; it **does not read the contents** of any `.env` file. Neither command makes web requests or creates hosting accounts.
