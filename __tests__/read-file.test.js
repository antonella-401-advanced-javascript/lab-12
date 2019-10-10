const { readFile } = require('../read-file');

describe('fs testing', () => {
  it('reads a file', () => {
    return readFile('./test-text.txt')
      .then(body => {
        expect(body).toEqual('only for testing purposes');
      });
  });
});