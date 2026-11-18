#!/usr/bin/env node
import { resolve } from 'node:path';
import { initStarter, starterNames } from '../src/scaffold.mjs';
import { auditProject } from '../src/audit.mjs';

const [command = 'help', arg1, arg2] = process.argv.slice(2);
const usage = `Open Vibe Build Kit · free, local-first learning tools

Usage:
  node bin/ovbk.mjs list
  node bin/ovbk.mjs init <static-site|node-api|react-vite> <new-directory>
  node bin/ovbk.mjs audit [directory]
  node bin/ovbk.mjs help

Commands do not call external services, deploy code or charge money.`;

try {
  if (command === 'help' || command === '--help' || command === '-h') {
    console.log(usage);
  } else if (command === 'list') {
    console.log(`Available starters: ${starterNames.join(', ')}`);
  } else if (command === 'init') {
    if (!arg1 || !arg2) throw Error('Usage: init <starter> <new-directory>');
    const destination = await initStarter(arg1, arg2, process.cwd());
    console.log(`Created ${arg1} in ${destination}`);
    console.log('Review generated files, then run the starter instructions in its README.');
  } else if (command === 'audit') {
    const project = resolve(arg1 || '.');
    const report = await auditProject(project);
    console.log(`Project audit: ${project}`);
    for (const row of report.results) console.log(`${row.ok ? 'PASS' : row.level === 'error' ? 'FAIL' : 'NOTE'} ${row.message}`);
    console.log(`Summary: ${report.passed} passed, ${report.notes} notes, ${report.errors} errors.`);
    console.log('Basic hygiene checks only; not a security certification.');
    if (report.errors) process.exitCode = 2;
  } else {
    throw Error(`Unknown command: ${command}\n${usage}`);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
