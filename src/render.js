const path = require('path');
const fetch = require('node-fetch');
const { readFileSync } = require('fs-extra');

const tplEngine = function(html, data) {
  const re = /{%([^%}]+)%}/g;
  let match = null, tpl = html;

  while(match = re.exec(tpl)) {
    tpl = tpl.replace(match[0], data[match[1].trim()]);
  }

  return tpl;
}

const fetchToken = function(callback) {
  fetch('https://reveal.302.at/token')
  .then(function(res) {
    return res.json();
  }).then(function(json) {
    callback(null, json);
  }).catch(function(err) {
    callback(err);
  })
}

module.exports = function(title, callback) {
  fetchToken(function(err, json) {
    if (err) return callback(err);

    const tplHTML = path.join(__dirname, '../template/index.html');
    const html = readFileSync(tplHTML, 'utf-8');

    return callback(null, tplEngine(html, {
      title: title,
      secret: json.secret,
      id: json.socketId,
    }));
  })
}
