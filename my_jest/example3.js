const target = require('./target');
jest.mock('./target', () => ({
  example: jest.fn(() => console.log("I'm mocked")),
}));
