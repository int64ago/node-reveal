const bs = require('browser-sync').create();
const nw = require('node-watch');
const path = require('path');
const Logger = require('chalklog');
const { copySync, existsSync } = require('fs-extra');

const log = new Logger('reveal');
const cwd = process.cwd();

const watch = function() {
  bs.init({ server: cwd });
  nw(cwd, function(file) {
    log.yellow(`<${file}> is changed.`)
    bs.reload();
  });
  log.green(`Starting in watch mode...`);
}

const init = function(dir) {
  if (existsSync(path.join(cwd, 'index.html'))) {
    log.yellow('Seems already initialized.');
    return false;
  }

  if (existsSync(path.join(cwd, dir, 'index.html'))) {
    log.red(`Directory <${dir}> exists!`);
    return true;
  }

  copySync(path.join(__dirname, '../reveal.js'), path.join(cwd, dir));
  log.green(`Init the project in: <${dir}>`);
  return true;
}

module.exports = function(argv) {
  if (argv.w) {
    return watch();
  }
  if (!init(argv.i)) {
    watch();
  }
}