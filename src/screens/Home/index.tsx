import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';

import Layout from '../Layout';
import * as S from './styles';

export type HomeScreenProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
  newGamesTitle: string;
  mostPopularGamesTitle: string;
  upcomingGamesTitle: string;
  freeGamesTitle: string;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  freeGames,
  freeHighlight,
  newGamesTitle,
  mostPopularGamesTitle,
  upcomingGamesTitle,
  freeGamesTitle,
}: HomeScreenProps) => (
  <Layout>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <S.SectionMostPopular>
      <Showcase title={mostPopularGamesTitle} highlight={mostPopularHighlight} games={mostPopularGames} />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Showcase title={upcomingGamesTitle} highlight={upcomingHighlight} games={upcomingGames} />
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Showcase title={freeGamesTitle} highlight={freeHighlight} games={freeGames} />
    </S.SectionFreeGames>
  </Layout>
);

export default Home;
