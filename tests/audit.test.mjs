import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { auditProject } from '../src/audit.mjs';

test('clean root passes error checks', async () => {
  const result = await auditProject('.');
  assert.equal(result.errors, 0);
  assert.ok(result.passed >= 5);
});

test('flags .env when not ignored without reading .env contents', async t => {
  const dir = await mkdtemp(join(tmpdir(), 'ovbk-audit-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  await writeFile(join(dir, '.env'), 'SECRET_DONT_READ=topsecret');
  await writeFile(join(dir, '.gitignore'), 'node_modules/\n');
  const result = await auditProject(dir);
  assert.equal(result.errors, 1);
  assert.ok(result.results.find(x => x.level === 'error').message.includes('.env'));
  assert.ok(!JSON.stringify(result).includes('topsecret'));
});

test('respects .env ignore rule', async t => {
  const dir = await mkdtemp(join(tmpdir(), 'ovbk-audit-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  await writeFile(join(dir, '.env'), 'SAMPLE=something');
  await writeFile(join(dir, '.gitignore'), '.env\n');
  assert.equal((await auditProject(dir)).errors, 0);
});
