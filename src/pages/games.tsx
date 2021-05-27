import { GetServerSidePropsContext } from 'next';

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES } from 'graphql/queries/games';
import GamesScreen, { GamesScreenProps } from 'screens/Games';
import { initializeApollo } from 'utils/apollo';
import { parseQueryStringToWhere } from 'utils/filter';
import { genreFields, platformFields, priceFields, sortFields } from 'utils/filter/fields';

export default function GamesPage(props: GamesScreenProps) {
  return <GamesScreen {...props} />;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields,
  };

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformFields,
  };

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields,
  };

  // Could be done by quering CMS
  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: genreFields,
  };

  const filterItems = [filterSort, filterPrice, filterPlatforms, filterCategories];

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems,
    },
  };
}
