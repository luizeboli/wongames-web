import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'next-image.mock';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env.testing',
});

global.setImmediate = global.setImmediate || jest.useRealTimers;
