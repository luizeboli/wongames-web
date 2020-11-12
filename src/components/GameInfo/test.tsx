import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
  title: 'hypa game',
  description: 'hypa description',
  price: '210,00',
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /hypa game/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/\$210,00/)).toBeInTheDocument();
    expect(screen.getByText(/hypa description/i)).toBeInTheDocument();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /wishlist/i }),
    ).toBeInTheDocument();
  });
});
