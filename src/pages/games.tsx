import filterItemsMock from 'components/ExploreSidebar/mock';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES } from 'graphql/queries/games';
import GamesScreen, { GamesScreenProps } from 'screens/Games';
import { initializeApollo } from 'utils/apollo';

export default function GamesPage(props: GamesScreenProps) {
  return <GamesScreen {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock,
    },
    revalidate: 300,
  };
}
