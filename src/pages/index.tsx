import Home, { HomeScreenProps } from 'screens/Home';

import bannersMock from 'components/BannerSlider/mock';
import gameCardSliderMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: HomeScreenProps) {
  return <Home {...props} />;
}

export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gameCardSliderMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardSliderMock,
      upcomingGames: gameCardSliderMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gameCardSliderMock,
      freeGames: gameCardSliderMock,
      freeHighlight: highlightMock,
    },
  };
}
