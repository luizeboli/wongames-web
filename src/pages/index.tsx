import { QueryHome } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import Home, { HomeScreenProps } from 'screens/Home';
import { initializeApollo } from 'utils/apollo';

export default function Index(props: HomeScreenProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      banners: banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size,
        }),
      })),
      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        cover: game.cover?.url,
        ...(!!game.developers.length && {
          developer: game.developers[0].name,
        }),
        img: game.cover?.url,
        price: game.price,
      })),
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: sections?.popularGames?.highlight?.background?.url,
        floatImage: sections?.popularGames?.highlight?.floatImage?.url,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        alignment: sections?.popularGames?.highlight?.alignment,
      },
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        cover: game.cover?.url,
        ...(!!game.developers.length && {
          developer: game.developers[0].name,
        }),
        img: game.cover?.url,
        price: game.price,
      })),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        cover: game.cover?.url,
        ...(!!game.developers.length && {
          developer: game.developers[0].name,
        }),
        img: game.cover?.url,
        price: game.price,
      })),
      upcomingHighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: sections?.upcomingGames?.highlight?.background?.url,
        floatImage: sections?.upcomingGames?.highlight?.floatImage?.url,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        alignment: sections?.upcomingGames?.highlight?.alignment,
      },
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        cover: game.cover?.url,
        ...(!!game.developers.length && {
          developer: game.developers[0].name,
        }),
        img: game.cover?.url,
        price: game.price,
      })),
      freeHighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: sections?.freeGames?.highlight?.background?.url,
        floatImage: sections?.freeGames?.highlight?.floatImage?.url,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        alignment: sections?.freeGames?.highlight?.alignment,
      },
    },
    revalidate: 60,
  };
}
