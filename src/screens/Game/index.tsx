import { NextSeo } from 'next-seo';

import { Divider } from 'components/Divider';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import { GameCardProps } from 'components/GameCard';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import TextContent from 'components/TextContent';
import Layout from 'screens/Layout';

import * as S from './styles';

export type GameScreenProps = {
  slug: string;
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  gameDetails: GameDetailsProps;
  upcomingTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
};

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  gameDetails,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames,
}: GameScreenProps) => (
  <Layout>
    <NextSeo
      title={`${gameInfo.title} - Won Games`}
      description={gameInfo.description}
      canonical={`https://wongames.willianjusten.com.br/game/${slug}`}
      openGraph={{
        url: `https://wongames.willianjusten.com.br/game/${slug}`,
        title: `${gameInfo.title} - Won Games`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`,
          },
        ],
      }}
    />

    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      {!!gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}

      <S.SectionDescription>
        <TextContent title="Description" body={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...gameDetails} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase title={upcomingTitle} games={upcomingGames} highlight={upcomingHighlight} />
      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Layout>
);

export default Game;
