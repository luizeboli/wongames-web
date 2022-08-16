import { TQueryHome, TQueryHomeVariables } from 'graphql/generated';
import { QueryHome } from 'graphql/queries/home';
import Home, { HomeScreenProps } from 'screens/Home';
import { initializeApollo } from 'utils/apollo';
import { bannersMapper, gamesMapper, highlightMapper } from 'utils/mappers';

export default function Index(props: HomeScreenProps) {
  console.log({ props });
  return <Home {...props} />;
}

export async function getStaticProps() {
  const TODAY = new Date().toISOString().slice(0, 10);

  const apolloClient = initializeApollo();
  const {
    data: { banners, sections, newGames, freeGames, upcomingGames },
  } = await apolloClient.query<TQueryHome, TQueryHomeVariables>({
    query: QueryHome,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      banners: bannersMapper(banners),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularHighlight: highlightMapper(sections?.data?.attributes?.popularGames?.highlight),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularGames: gamesMapper(sections?.data?.attributes?.popularGames?.games),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.data?.attributes?.upcomingGames?.highlight),
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.data?.attributes?.freeGames?.highlight),
    },
    revalidate: 60,
  };
}
