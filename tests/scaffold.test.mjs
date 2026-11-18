import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readdir, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { initStarter, starterNames } from '../src/scaffold.mjs';

for (const starter of starterNames) {
  test(`scaffold ${starter} works without network`, async t => {
    const root = await mkdtemp(join(tmpdir(), 'ovbk-'));
    t.after(() => rm(root, { recursive: true, force: true }));
    const target = await initStarter(starter, `demo-${starter}`, root);
    assert.ok((await readdir(target)).length >= 2);
    assert.ok((await readFile(join(target, 'README.md'), 'utf8')).length > 100);
    await assert.rejects(initStarter(starter, `demo-${starter}`, root), /Refusing to overwrite/);
  });
}

test('rejects unknown starters and path traversal', async () => {
  await assert.rejects(initStarter('secret', 'demo'), /Unknown starter/);
  await assert.rejects(initStarter('static-site', '../escape'), /simple new folder/);
  await assert.rejects(initStarter('static-site', '/absolute'), /simple new folder/);
  await assert.rejects(initStarter('static-site', ''), /simple new folder/);
});
