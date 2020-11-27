import { screen } from '@testing-library/react';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { renderWithTheme } from 'utils/tests/helpers';

import 'matchMediaMock';

import Wishlist from '.';

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(
      screen.getByRole('heading', { name: /wishlist/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
  });
});
