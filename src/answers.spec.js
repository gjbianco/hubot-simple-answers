const sut = require('./answers');

describe('#getAnswer', () => {
  it('should get an answer for pi', () => {
    return expect(sut.getAnswer('pi')).resolves.toMatch(/3\.1415/);
  });
});
