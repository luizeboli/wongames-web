import highlightMock from 'components/Highlight/mock';
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
      mostPopularHighlight: highlightMock,
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
      upcomingHighlight: highlightMock,
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
      freeHighlight: highlightMock,
    },
    revalidate: 60,
  };
}
