import { cp, lstat, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const templateRoot = resolve(here, '..', 'starters');
export const starterNames = Object.freeze(['static-site', 'node-api', 'react-vite']);

export async function initStarter(name, folderName, cwd = process.cwd()) {
  if (!starterNames.includes(name)) throw new Error(`Unknown starter: ${name}. Run 'list' for choices.`);
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,79}$/.test(folderName || '')) {
    throw new Error('Use a simple new folder name (letters, digits, dashes, underscores; max 80 characters).');
  }
  const target = resolve(cwd, folderName);
  try {
    await lstat(target);
    throw new Error(`Refusing to overwrite an existing destination: ${target}`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  await mkdir(cwd, { recursive: true });
  await cp(join(templateRoot, name), target, { recursive: true, errorOnExist: true, force: false });
  return target;
}
