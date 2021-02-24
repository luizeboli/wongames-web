import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { QueryGameBySlug, QueryGameBySlugVariables } from 'graphql/generated/QueryGameBySlug';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QueryUpcoming, QueryUpcomingVariables } from 'graphql/generated/QueryUpcoming';
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from 'graphql/queries/games';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { QUERY_UPCOMING } from 'graphql/queries/upcoming';
import Game, { GameScreenProps } from 'screens/Game';
import { initializeApollo } from 'utils/apollo';
import { gamesMapper, highlightMapper } from 'utils/mappers';

const apolloClient = initializeApollo();

export default function Index(props: GameScreenProps) {
  const router = useRouter();

  if (router.isFallback) return <p>Loading fallback from next router...</p>;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({ query: QUERY_GAMES, variables: { limit: 9 } });

  const paths = data.games.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<QueryGameBySlug, QueryGameBySlugVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
  });

  if (!data.games.length) {
    return { notFound: true };
  }

  const { data: recommendedData } = await apolloClient.query<QueryRecommended>({ query: QUERY_RECOMMENDED });

  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcomingData } = await apolloClient.query<QueryUpcoming, QueryUpcomingVariables>({
    query: QUERY_UPCOMING,
    variables: { date: TODAY },
  });

  const game = data.games[0];

  return {
    props: {
      cover: game.cover?.src,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description,
      },
      gallery: game.gallery,
      description: game.description,
      gameDetails: {
        developer: game.developers[0]?.name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        ...(!!game.publisher && {
          publisher: game.publisher?.name,
        }),
        rating: game.rating,
        genres: game.categories.map((category) => category.name),
      },
      upcomingTitle: upcomingData.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingData.upcomingGames),
      upcomingHighlight: highlightMapper(upcomingData.showcase?.upcomingGames?.highlight),
      recommendedTitle: recommendedData.recommended?.section?.title,
      recommendedGames: gamesMapper(recommendedData.recommended?.section?.games),
    },
    revalidate: 300,
  };
};
