import { fireEvent, screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: /Population Zero/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Population Zero/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText('R$ 235,00');

    expect(price).not.toHaveStyle('text-decoration: line-through');
    expect(price).toHaveStyle('background-color: #3CD3C1');
  });

  it('should render a line through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />);

    const price = screen.getByText('R$ 235,00');
    const promotionalPrice = screen.getByText('R$ 200,00');

    expect(price).toHaveStyle('text-decoration: line-through');
    expect(price).not.toHaveStyle('background-color: #3CD3C1');

    expect(promotionalPrice).not.toHaveStyle('text-decoration: line-through');
    expect(promotionalPrice).toHaveStyle('background-color: #3CD3C1');
  });

  it('should render filled favorite icon when favorite is strue', () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });
});
