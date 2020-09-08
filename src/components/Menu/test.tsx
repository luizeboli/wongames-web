import { renderWithTheme } from 'utils/tests/helpers';
import { fireEvent, screen } from '@testing-library/react';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Won Games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/search games/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Initial close state
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({
      opacity: 0,
    });

    // Open Menu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({
      opacity: 1,
    });

    // Close Menu
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({
      opacity: 0,
    });
  });

  it('should show register box if logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/login now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
  });

  it('should show my account and wishlist if logged in', () => {
    renderWithTheme(<Menu username="felicio" />);

    expect(screen.queryByText(/login now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();

    expect(screen.getByText(/my account/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
  });
});
