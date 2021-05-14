import { screen } from '@testing-library/react';

import { render } from 'utils/test-utils';

import 'session.mock.ts';

import GameCard from '.';

const props = {
  id: '1',
  title: 'Population Zero',
  slug: 'population-zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235,
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    render(<GameCard {...props} />);

    expect(screen.getByRole('heading', { name: /Population Zero/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Rockstar Games/i })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /Population Zero/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute('href', `/game/${props.slug}`);
  });

  it('should render price in label', () => {
    render(<GameCard {...props} />);

    const price = screen.getByText('$235.00');

    expect(price).not.toHaveStyle('text-decoration: line-through');
    expect(price).toHaveStyle('background-color: #3CD3C1');
  });

  it('should render a line through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice={200} />);

    const price = screen.getByText('$235.00');
    const promotionalPrice = screen.getByText('$200.00');

    expect(price).toHaveStyle('text-decoration: line-through');
    expect(price).not.toHaveStyle('background-color: #3CD3C1');

    expect(promotionalPrice).not.toHaveStyle('text-decoration: line-through');
    expect(promotionalPrice).toHaveStyle('background-color: #3CD3C1');
  });

  it('should render the Ribbon', () => {
    render(<GameCard {...props} ribbon="150%" ribbonColor="secondary" ribbonSize="small" />);

    const ribbon = screen.getByText(/150%/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle('background-color: #3cd3c1');
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
