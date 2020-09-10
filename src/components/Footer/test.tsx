import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render 4 columns', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Contact Us/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Follow Us/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Location/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
