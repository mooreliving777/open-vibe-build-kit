import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const html = await readFile(new URL('../site/index.html', import.meta.url), 'utf8');

test('documentation site includes valid learning and community destinations', async () => {
  for (const id of ['main', 'top', 'inside', 'planner', 'learn', 'community', 'quickstart']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  for (const filename of ['styles.css', 'app.js', 'favicon.svg']) {
    await access(new URL('../site/' + filename, import.meta.url));
  }
  assert.match(html, /This site is powered by Netlify/);
  assert.match(html, /CODE_OF_CONDUCT\.md/);
  assert.match(html, /MIT License/);
});

test('static site has no third-party script dependency', () => {
  assert.doesNotMatch(html, /<script[^>]+src="https?:\/\//i);
  assert.doesNotMatch(html, /google-analytics|gtag\(|pixel\.facebook|<iframe/i);
});
