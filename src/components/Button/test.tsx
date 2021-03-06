import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { render, screen } from 'utils/test-utils';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
    expect(container).toMatchSnapshot();
  });

  it('should render the small size', () => {
    render(<Button size="small">Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should render the fullWidth version', () => {
    render(<Button fullWidth>Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign UP/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render the icon version', () => {
    render(<Button icon={<AddShoppingCart data-testid="icon" />}>Sign UP</Button>);

    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render a minimalist version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Wishlist
      </Button>,
    );

    expect(screen.getByRole('button', { name: /Wishlist/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5',
    });

    expect(screen.getByRole('button', { name: /Wishlist/i })).toHaveStyleRule('background', 'none', { modifier: ':hover' });
  });

  it('should render Button as a button by default', () => {
    render(<Button>Sign UP</Button>);

    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Sign UP
      </Button>,
    );

    expect(screen.getByRole('link', { name: /Sign Up/i })).toHaveAttribute('href', '/link');
  });

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });
  });
});
