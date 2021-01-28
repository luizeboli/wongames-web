import galleryMock from 'components/Gallery/mock';
import gamesMock from 'components/GameCardSlider/mock';
import gameDetailsMock from 'components/GameDetails/mock';
import highlightMock from 'components/Highlight/mock';
import textContentMock from 'components/TextContent/mock';
import Game, { GameScreenProps } from 'screens/Game';

export default function Index(props: GameScreenProps) {
  return <Game {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'skate-4' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      cover: '/img/games/Skate-4.1.jpg',
      gameInfo: {
        title: 'Skate 4',
        price: '99.90',
        description: 'The best skate game for the century',
      },
      gallery: galleryMock,
      description: textContentMock.body,
      gameDetails: gameDetailsMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock,
    },
  };
}
