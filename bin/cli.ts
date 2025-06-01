#!/usr/bin/env node

import { log } from '../dist/index';
const args = process.argv.slice(2);
if (args.includes('--help') || args.length === 0) {
    console.log(`
    Usage:
        emoji-log "Your message here" [level]
    Levels:
    info     📘
    success  ✅
    warning  ⚠️
    error    ❌
`);
    process.exit(0)
};