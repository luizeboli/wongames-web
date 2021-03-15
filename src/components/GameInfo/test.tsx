import { render, screen } from 'utils/test-utils';

import GameInfo from '.';

const props = {
  id: '1',
  title: 'hypa game',
  description: 'hypa description',
  price: 210,
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    render(<GameInfo {...props} />);

    expect(screen.getByRole('heading', { name: /hypa game/i })).toBeInTheDocument();
    expect(screen.getByText(/\$210.00/)).toBeInTheDocument();
    expect(screen.getByText(/hypa description/i)).toBeInTheDocument();
  });

  it('should render buttons', () => {
    render(<GameInfo {...props} />);

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /wishlist/i })).toBeInTheDocument();
  });
});
