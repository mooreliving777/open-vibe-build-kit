# Open Vibe Build Kit

**A free, community-led toolkit for learning to ship reliable websites and small applications.**

Open Vibe Build Kit gives beginning and intermediate developers practical, inspectable starting points for static websites, React/Vite, Node.js APIs, and Supabase database security. It emphasizes a simple workflow: **understand → build → test → review → deploy**.

- **Free and noncommercial:** no subscriptions, sales funnels, paid support, affiliate links, ads, or commercial hosting services are offered by this project.
- **Open source:** MIT license for source code and authored documentation.
- **No external AI API calls:** no hosted model, tracking script, or credential is needed to use the toolkit.
- **Local-first:** examples run on a developer's machine. Deployment is optional, never triggered automatically.
- **Independent:** not a customer-facing portal, product landing page, or operational backend for a commercial company.

> **Status (November 18, 2026):** [Public GitHub repository](https://github.com/mooreliving777/open-vibe-build-kit) and GitHub Actions tests are confirmed. The Netlify dashboard reports this project **published at 8:55 AM** at [vcbuildkit.netlify.app](https://vcbuildkit.netlify.app/), the **chosen official toolkit URL**. Public HTTP response and visual behavior have **not been independently verified**. The maintainer confirmed on **November 18, 2026** that the `leonardemoore.com` custom-domain assignment was removed, leaving the `netlify.app` address as the intended toolkit URL. **This is maintainer-reported; Netlify domain settings have not been independently inspected.** **Netlify Open Source plan eligibility and approval remain pending.** See [publishing checklist](docs/publishing.md).

## What's included

| Component | What it does | Costs / dependencies |
| --- | --- | --- |
| Static documentation website | Landing page, interactive stack selector, deployment checklist | Runs as static files; no build step |
| `ovbk init static-site` | Copies a working static website example | No third-party packages |
| `ovbk init node-api` | Copies a Node.js HTTP API with `/health` | Node.js 20+; no packages |
| `ovbk init react-vite` | Copies a React/Vite starter | npm packages required for local install |
| `ovbk audit <path>` | Checks basic project hygiene without reading secrets | Node.js 20+; no packages |
| Supabase example | Demonstrates Row Level Security for user-owned notes | Optional Supabase project |
| Community docs | Deployment, testing, security, contribution guidance | Free |

## Run it locally

Requires **Node.js 20 or newer** for the command-line tool. No `npm install` is required for the toolkit itself.

```bash
node --version
node bin/ovbk.mjs help
node bin/ovbk.mjs init static-site my-first-site
node bin/ovbk.mjs audit my-first-site
node --test
```

To preview the documentation website:

```bash
python -m http.server 8080 --directory site
# Open http://localhost:8080
```

To try the standalone backend:

```bash
node bin/ovbk.mjs init node-api my-first-api
cd my-first-api
npm start
# Visit http://localhost:3000/health
```

To try React/Vite, from the toolkit root:

```bash
node bin/ovbk.mjs init react-vite my-react-site
cd my-react-site
npm install
npm run dev
```

The React starter's package versions are example constraints; review and update dependencies before a production launch. Do not paste credentials into source files.

## Docs

- [First build and how the CLI works](docs/getting-started.md)
- [Deploy with GitHub and Netlify](docs/deployment.md)
- [Supabase example and RLS](starters/supabase/README.md)
- [Security basics](docs/security-basics.md)
- [Publishing the repo and applying for Netlify Open Source](docs/publishing.md)
- [Contributing](CONTRIBUTING.md) · [Code of Conduct](CODE_OF_CONDUCT.md) · [Security policy](SECURITY.md)

## Community principles

We prioritize explanation over automation, accessibility over flash, and explicit review over hidden deployment. We welcome small examples, bug reports, tests, translations, and corrections. This is a learning project, not a substitute for professional security, tax, or legal advice.

## Open-source hosting eligibility

Netlify's [Open Source plan policy](https://www.netlify.com/legal/open-source-policy/) requires eligible licensing, a Code of Conduct, a Netlify attribution link on the actual site, and a **genuinely noncommercial** project. This repo is designed with those rules in mind, but **Netlify decides eligibility**; merely using an MIT license or describing a project as free does not guarantee approval. Actual deployment and approval are separate steps.

## Maintainer and license

Community project initiated by Leonard E. Moore. Contributions are welcome under the [MIT License](LICENSE). The project is separate from commercial SaaS, client hosting, and paid consulting activities.
