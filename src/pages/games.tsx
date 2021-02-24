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

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9,
    },
  });

  return {
    props: {
      games: data.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name ?? null,
        img: game.cover?.url,
        price: game.price,
      })),
      filterItems: filterItemsMock,
    },
    revalidate: 300,
  };
}
