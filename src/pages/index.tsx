import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import Home, { HomeScreenProps } from 'screens/Home';
import { initializeApollo } from 'utils/apollo';
import { bannersMapper, gamesMapper, highlightMapper } from 'utils/mappers';

export default function Index(props: HomeScreenProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const TODAY = new Date().toISOString().slice(0, 10);

  const apolloClient = initializeApollo();
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({ query: QUERY_HOME, variables: { date: TODAY } });

  return {
    props: {
      banners: bannersMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
    },
    revalidate: 60,
  };
}
