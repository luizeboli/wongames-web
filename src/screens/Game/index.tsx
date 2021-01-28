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
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  gameDetails: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  gameDetails,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameScreenProps) => (
  <Layout>
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

      <Showcase title="Upcoming" games={upcomingGames} highlight={upcomingHighlight} />
      <Showcase title="Recommended games" games={recommendedGames} />
    </S.Main>
  </Layout>
);

export default Game;
