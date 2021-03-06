import { fireEvent, screen } from '@testing-library/react';

import { render } from 'utils/test-utils';

import Menu from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({ query: {} }));

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Won Games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2);
  });

  it('should handle the open/close mobile menu', () => {
    render(<Menu />);

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
    render(<Menu />);

    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
  });

  it('should show my account and wishlist if logged in', () => {
    render(<Menu username="felicio" />);

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2);
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2);
  });

  it('should not show signin or user dropdown if loading', () => {
    render(<Menu username="felicio" loading />);

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
  });
});
