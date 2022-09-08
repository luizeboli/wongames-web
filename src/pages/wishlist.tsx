import { GetServerSidePropsContext } from 'next';

import { TQueryRecommended, TQueryWishlist, TQueryWishlistVariables } from 'graphql/generated';
import { QueryRecommended } from 'graphql/queries/recommended';
import { QueryWishlist } from 'graphql/queries/wishlist';
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

  if (!session) return { props: {} };

  await apolloClient.query<TQueryWishlist, TQueryWishlistVariables>({
    query: QueryWishlist,
  });

  const { data } = await apolloClient.query<TQueryRecommended>({ query: QueryRecommended });

  console.log({ data });

  return {
    props: {
      recommendedTitle: data.recommended?.data.attributes.section.title,
      recommendedGames: gamesMapper(data.recommended?.data.attributes.section.games),
      recommendedHighlight: highlightMapper(data.recommended?.data.attributes.section.highlight),
      initializeApollo: apolloClient.cache.extract(),
      session,
    },
  };
}
