import Wishlist, { WishlistScreenProps } from 'screens/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function WishlistPage({ ...props }: WishlistScreenProps) {
  return <Wishlist {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
    },
  };
}
