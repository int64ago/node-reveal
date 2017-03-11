const bs = require('browser-sync').create();
const nw = require('node-watch');
const path = require('path');
const { copySync } = require('fs-extra');

const cwd = process.cwd();

const watch = function() {
  bs.init({ server: cwd });
  nw(cwd, function(x) {
    bs.reload();
  });
}

const init = function(dir) {
  copySync(path.join(__dirname, '../reveal.js'), path.join(cwd, dir));
}

module.exports = function(argv) {
  if (argv.w) return watch();
  init(argv.i);
}