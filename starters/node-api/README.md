# Node API starter

An intentionally small educational HTTP server with `GET /health` and `GET /api/hello` endpoints, built using the standard Node.js library and no packages.

```bash
node server.mjs
# GET http://localhost:3000/health
```

`PORT=4000 node server.mjs` changes the local port. This is **not production hardened**; before exposing it to the internet add routing, auth, schema validation, rate limiting, traffic limits and monitoring. It is **not automatically hosted by a Netlify static site**.
