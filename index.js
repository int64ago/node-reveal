#!/usr/bin/env node

const yargs = require('yargs');

const handler = require('./src/handler');

const builder = {
  i: {
    alias: 'init',
    default: 'reveal-demo',
    describe: 'Create a new project.',
  },
  w: {
    alias: 'watch',
    default: false,
    describe: 'Server in watch mode.',
  },
}

const argv = yargs
  .help('h')
  .options(builder)
  .argv


handler(argv);
