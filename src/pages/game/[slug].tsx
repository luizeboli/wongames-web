import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import {
  TQueryGameBySlug,
  TQueryGameBySlugVariables,
  TQueryGames,
  TQueryGamesVariables,
  TQueryRecommended,
  TQueryUpcoming,
  TQueryUpcomingVariables,
} from 'graphql/generated';
import { QueryGameBySlug, QueryGames } from 'graphql/queries/games';
import { QueryRecommended } from 'graphql/queries/recommended';
import { QueryUpcoming } from 'graphql/queries/upcoming';
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
  const { data } = await apolloClient.query<TQueryGames, TQueryGamesVariables>({
    query: QueryGames,
    variables: { pagination: { limit: 9 } },
  });

  const paths = data.games?.data.map((game) => ({ params: { slug: game.attributes.slug } }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<TQueryGameBySlug, TQueryGameBySlugVariables>({
    query: QueryGameBySlug,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache',
  });

  if (!data.games?.data.length) {
    return { notFound: true };
  }

  const { data: recommendedData } = await apolloClient.query<TQueryRecommended>({ query: QueryRecommended });

  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcomingData } = await apolloClient.query<TQueryUpcoming, TQueryUpcomingVariables>({
    query: QueryUpcoming,
    variables: { date: TODAY },
  });

  const game = data.games.data[0];

  return {
    props: {
      slug: params?.slug,
      cover: game.attributes.cover.data.attributes.src,
      gameInfo: {
        id: game.id,
        title: game.attributes.name,
        price: game.attributes.price,
        description: game.attributes.short_description,
      },
      gallery: game.attributes.gallery?.data,
      description: game.attributes.description,
      gameDetails: {
        developer: game.attributes.developers?.data[0].attributes.name,
        releaseDate: game.attributes.release_date,
        platforms: game.attributes.platforms?.data.map((platform) => platform.attributes.name),
        ...(!!game.attributes.publisher && {
          publisher: game.attributes.publisher?.data.attributes.name,
        }),
        rating: game.attributes.rating,
        genres: game.attributes.categories?.data.map((category) => category.attributes.name),
      },
      upcomingTitle: upcomingData.showcase?.data.attributes.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingData.upcomingGames),
      upcomingHighlight: highlightMapper(upcomingData.showcase?.data.attributes.upcomingGames?.highlight),
      recommendedTitle: recommendedData.recommended?.data.attributes.section?.title,
      recommendedGames: gamesMapper(recommendedData.recommended?.data.attributes.section?.games),
    },
    revalidate: 300,
  };
};
