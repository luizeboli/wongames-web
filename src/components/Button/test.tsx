import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
    expect(container).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should render the fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render the icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Sign UP</Button>,
    );

    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
