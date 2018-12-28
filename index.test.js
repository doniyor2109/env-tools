global.console = {
  warn: jest.fn(),
  log: jest.fn(),
  error: jest.fn(),
};

const env = require('./index');

describe('env', () => {
  beforeEach(function () {
    console.log.mockClear();
    console.warn.mockClear();
    console.error.mockClear();
  });

  test('should', function () {
    process.env.NODE_ENV = 'production';
    env.prod.log('hello');
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('hello');
  });

  test('should not log for not production environment', function () {
    process.env.NODE_ENV = 'not-production';
    env.not.prod.log('hello');
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('hello');
  });
})