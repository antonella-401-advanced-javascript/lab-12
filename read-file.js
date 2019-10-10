const fs = require('fs').promises;

const readFile = path => fs.readFile(path, 'utf8');
const writeFile = (path, data) => fs.writeFile(path, data, 'utf8');

module.exports = {
  readFile,
  writeFile
};