const toAllCaps = require('../str-capitalize');

describe('capitalize', () => {
  it('capitalizes strings', () => {
    const lower = 'i am a lowercase sentence';
    const upper = toAllCaps(lower);

    expect(upper).toEqual('I AM A LOWERCASE SENTENCE');
  });
});