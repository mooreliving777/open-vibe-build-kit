import { createServer } from 'node:http';

const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw Error('PORT must be 1–65535');

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'GET') {
    res.writeHead(405, { Allow: 'GET' });
    res.end(JSON.stringify({ error: 'method_not_allowed' }));
    return;
  }
  if (req.url === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ ok: true, service: 'ovbk-demo-api' }));
  } else if (req.url === '/api/hello') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'You built a small backend.' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'not_found' }));
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Demo API listening at http://127.0.0.1:${port}`));
