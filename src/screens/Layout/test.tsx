import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Layout from '.';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock menu" />;
    },
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock footer" />;
    },
  };
});

describe('<Layout />', () => {
  it('should render menu, children and footer', () => {
    renderWithTheme(
      <Layout>
        <h1>Heading</h1>
      </Layout>,
    );

    expect(screen.getByTestId('mock menu')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock footer')).toBeInTheDocument();
  });
});
