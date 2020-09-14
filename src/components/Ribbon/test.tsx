import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toBeInTheDocument();
  });

  it('should render with primary color by default', () => {
    renderWithTheme(<Ribbon>Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      backgroundColor: '#f231a5',
    });
  });

  it('should render with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      backgroundColor: '#3cd3c1',
    });
  });

  it('should render the normal size by default', () => {
    renderWithTheme(<Ribbon>Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<Ribbon size="small">Hot deal</Ribbon>);

    expect(screen.getByText(/hot deal/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
