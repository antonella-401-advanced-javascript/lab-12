const { readFile, writeFile } = require('../read-file');

describe('fs testing', () => {
  it('reads a file', () => {
    return readFile('./test-text.txt')
      .then(body => {
        expect(body).toEqual('only for testing purposes');
      });
  });

  it('writes a new file', () => {
    return writeFile('./write-test.txt', 'I hope this thing works')
      .then(() => {
        return readFile('./write-test.txt');
      })
      .then(body => {
        expect(body).toEqual('I hope this thing works');
      });
  });
});