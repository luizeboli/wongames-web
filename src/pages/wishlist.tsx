import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import Wishlist, { WishlistScreenProps } from 'screens/Wishlist';

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
