import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { render, screen } from 'utils/test-utils';

import 'matchMediaMock';
import 'session.mock.ts';

import Wishlist from '.';

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedTitle: 'Título',
  recommendedGames: gamesMock,
};

jest.mock('screens/Layout', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Layout">{children}</div>;
  },
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    render(<Wishlist {...props} />);

    expect(screen.getByRole('heading', { name: /wishlist/i })).toBeInTheDocument();

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });

  it('should render empty when there are no games', () => {
    render(<Wishlist recommendedGames={gamesMock} recommendedHighlight={highlightMock} recommendedTitle="Título" />);

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /your wishlist is empty/i })).toBeInTheDocument();
  });
});
