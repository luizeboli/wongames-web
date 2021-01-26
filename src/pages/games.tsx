import GamesScreen, { GamesScreenProps } from 'screens/Games';

import filterItemsMock from 'components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default function GamesPage(props: GamesScreenProps) {
  return <GamesScreen {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock,
    },
  };
}
