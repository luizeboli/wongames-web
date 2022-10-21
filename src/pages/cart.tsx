import { GetServerSidePropsContext } from 'next';

import { TQueryRecommended } from 'graphql/generated';
import { QueryRecommended } from 'graphql/queries/recommended';
import Cart, { CartProps } from 'screens/Cart';
import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import protectedRoutes from 'utils/protected-routes';

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx);
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<TQueryRecommended>({ query: QueryRecommended });

  return {
    props: {
      recommendedTitle: data.recommended?.data.attributes.section.title,
      recommendedGames: gamesMapper(data.recommended?.data.attributes.section.games),
      recommendedHighlight: highlightMapper(data.recommended?.data.attributes.section.highlight),
      session,
    },
  };
}
