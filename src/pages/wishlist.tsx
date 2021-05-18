import { GetServerSidePropsContext } from 'next';

import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QueryWishlist, QueryWishlistVariables } from 'graphql/generated/QueryWishlist';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { QUERY_WISHLIST } from 'graphql/queries/wishlist';
import Wishlist, { WishlistScreenProps } from 'screens/Wishlist';
import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import protectedRoutes from 'utils/protected-routes';

export default function WishlistPage({ ...props }: WishlistScreenProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  if (!session) return {};

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user?.email as string,
    },
  });

  const { data } = await apolloClient.query<QueryRecommended>({ query: QUERY_RECOMMENDED });

  return {
    props: {
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(data.recommended?.section?.highlight),
      initializeApollo: apolloClient.cache.extract(),
      session,
    },
  };
}
