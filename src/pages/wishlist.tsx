import { GetServerSidePropsContext } from 'next';

import gamesMock from 'components/GameCardSlider/mock';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import Wishlist, { WishlistScreenProps } from 'screens/Wishlist';
import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import protectedRoutes from 'utils/protected-routes';

export default function WishlistPage({ ...props }: WishlistScreenProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({ query: QUERY_RECOMMENDED });

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(data.recommended?.section?.highlight),
      session,
    },
  };
}
