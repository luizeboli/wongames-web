import gameCardSliderMock from 'components/GameCardSlider/mock';
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
    data: { banners, newGames },
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
      newGames: newGames.map((newGame) => ({
        title: newGame.name,
        slug: newGame.slug,
        cover: newGame.cover?.url,
        ...(!!newGame.developers.length && {
          developer: newGame.developers[0].name,
        }),
        img: newGame.cover?.url,
        price: newGame.price,
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardSliderMock,
      upcomingGames: gameCardSliderMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gameCardSliderMock,
      freeGames: gameCardSliderMock,
      freeHighlight: highlightMock,
    },
    revalidate: 60,
  };
}
