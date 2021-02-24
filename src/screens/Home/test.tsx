import { screen } from '@testing-library/react';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { renderWithTheme } from 'utils/tests/helpers';

import 'matchMediaMock';

import Home from '.';

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
};

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock showcase" />;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock banner slider" />;
    },
  };
});

describe('<Home />', () => {
  it('should render banner and showcase', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('mock banner slider')).toBeInTheDocument();
    expect(screen.getAllByTestId('mock showcase')).toHaveLength(4);
  });
});
