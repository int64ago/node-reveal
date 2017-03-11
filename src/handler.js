const bs = require('browser-sync').create();
const nw = require('node-watch');
const path = require('path');
const Logger = require('chalklog');
const { copySync, existsSync, writeFileSync } = require('fs-extra');
const render = require('./render');

const log = new Logger('reveal');
const cwd = process.cwd();

const copyFilter = function(file) {
  const ignores = [/README\.md$/, /LICENSE$/, /package\.json$/];
  return !ignores.some(function(reg) {
    return reg.test(file);
  })
}

const watch = function() {
  bs.init({ server: cwd });
  nw(cwd, function(file) {
    log.yellow(`<${file}> is changed.`);
    bs.reload();
  });
  log.green(`Starting in watch mode...`);
}

const init = function(dir, callback) {
  const curHTML = path.join(cwd, 'index.html');
  const destHTML = path.join(cwd, dir, 'index.html');
  const sourceDir = path.join(__dirname, '../reveal.js');
  const destDir = path.join(cwd, dir);

  if (existsSync(curHTML)) {
    log.yellow('Seems already initialized.');
    return callback(false);
  }

  if (existsSync(destHTML)) {
    log.red(`Directory <${dir}> exists!`);
    return callback(true);
  }

  copySync(sourceDir, destDir, {
    filter: copyFilter
  });

  render(dir, function(err, html) {
    if (err) {
      log.red(`ERROR: ${err}`);
      return callback(true);
    }
    writeFileSync(destHTML, html, 'utf-8');
    log.green(`Init the project in: <${dir}>`);
    return callback(true);
  });
}

module.exports = function(argv) {
  if (argv.w) {
    return watch();
  }
  init(argv.i, function(ret) {
    if (!ret) watch();
  });
}