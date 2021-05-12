import { server } from '../src/utils/mockServer/server';

global.fetch = require('node-fetch');

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
