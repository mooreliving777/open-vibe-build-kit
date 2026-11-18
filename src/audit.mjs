import { access, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const exists = async path => { try { await access(path); return true; } catch { return false; } };

export async function auditProject(project) {
  const info = await stat(project);
  if (!info.isDirectory()) throw new Error('Project path must be a directory.');
  const results = [];
  const add = (ok, message, level = 'note') => results.push({ ok, message, level });
  const has = p => exists(join(project, p));

  add(await has('README.md'), 'README.md explains how to run the project');
  const license = await has('LICENSE');
  add(license, 'License file present (review compatibility before publishing)');
  add(await has('CODE_OF_CONDUCT.md'), 'Code of Conduct present for community work');
  const ignore = await has('.gitignore');
  add(ignore, '.gitignore exists');
  const hasEnv = await has('.env');
  let envIgnored = false;
  if (ignore) {
    const content = await readFile(join(project, '.gitignore'), 'utf8');
    envIgnored = /^\.env\s*$/m.test(content) || /^\.env\*\s*$/m.test(content) || /^\.env\.\*\s*$/m.test(content);
  }
  if (hasEnv && !envIgnored) add(false, 'A local .env exists but .gitignore does not explicitly ignore it. Do not commit secrets.', 'error');
  else if (hasEnv) add(true, '.env file is present and an ignore rule exists (check git tracking separately)');
  else add(true, 'No root .env file detected');
  if (await has('package.json')) add(true, 'package.json present; run tests and review dependencies');
  else add(false, 'No package.json detected; this is fine for plain HTML/CSS projects');
  const passed = results.filter(x => x.ok).length;
  const errors = results.filter(x => !x.ok && x.level === 'error').length;
  const notes = results.length - passed - errors;
  return { results, passed, errors, notes };
}
